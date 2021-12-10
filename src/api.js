import * as web3 from '@solana/web3.js';

const connection = new web3.Connection(web3.clusterApiUrl('mainnet-beta'));
const base58publicKey = new web3.PublicKey(
  '8YmMhex5Vd5JPsyNhCwFPDx5vqeedpCuyFE2W7VtRXQT'
);

export async function getInfo(base58KeyString) {
  const base58publicKey = new web3.PublicKey(base58KeyString);
  const signatures = await connection.getSignaturesForAddress(base58publicKey, {
    limit: 5,
  });

  let data = [];
  signatures.map(async (s) => {
    const transactionHash = s.signature;
    const transactionStatuses = await connection.getSignatureStatuses(
      [s.signature],
      {
        searchTransactionHistory: true,
      }
    );

    const transactionDate = new Date(s.blockTime * 1000)
      .toISOString()
      .slice(0, 19)
      .replace('T', ' ');

    const transaction = await connection.getTransaction(s.signature, {
      encoding: 'jsonParsed',
    });
    const balanceBefore = transaction.meta.postBalances[0] / 1000000000;
    const balanceAfter = transaction.meta.preBalances[0] / 1000000000;
    const balanceDelta = balanceAfter - balanceBefore;
    const balanceDiff =
      balanceAfter < balanceBefore ? `-${balanceDelta}` : balanceDelta;

    data.push({
      blockId: s.slot,
      fee: transaction.meta.fee,
      transactionHash,
      transactionStatus: transactionStatuses.value[0].confirmationStatus,
      transactionDate,
      balanceBefore,
      balanceAfter,
      balanceDiff,
    });
  });
  // signatures.map(async (s) => {

  // });
  return data;
}
