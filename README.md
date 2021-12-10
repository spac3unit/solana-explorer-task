Реализовать эксплорер аккаунтов в блокчейне solana
Показать список тразнакций, которые выполнены на этом аккаунте, и попробовать выцепить изменение баланса после каждой транзы.

Поля которые надо показать:
signature
дата
статус (success/failed)
баланс после транзы
изменение баланса

Пример аккаунта: 8YmMhex5Vd5JPsyNhCwFPDx5vqeedpCuyFE2W7VtRXQT

Стек: React + solana-web3
Дока по солане: https://solana.com/
Дока по серуму: https://projectserum.com/ (к изучению)
Апи соланы: https://github.com/solana-labs/solana-web3.js

Пример эксполрера: https://decommas.io/gears/app/walletexplorer?account=6bR25fWtxm31gGCyTiEm6bjayk89wuChxHw9sbFnVkUP

Рабочая нода соланы, на которую слать запросы: http://api.mainnet-beta.solana.com/ если не работает - смотрим сюда https://free.rpcpool.com/ (https://rpcpool.com/pricing/ - на бесплатном тарифе отдает 10 RPS так что подумать про очереди)

lamports: - The amount of lamports to send. You can think of lamports are to Sol, what gwei are to Ether.

https://www.quicknode.com/guides/web3-sdks/how-to-send-a-transaction-on-solana-using-javascript
https://docs.solana.com/developing/clients/jsonrpc-api#example-40
https://solana-labs.github.io/solana-web3.js/classes/Connection.html

#getBalance
curl http://api.mainnet-beta.solana.com/ -X POST -H "Content-Type: application/json" -d '
{"jsonrpc":"2.0", "id":1, "method":"getBalance", "params":["8YmMhex5Vd5JPsyNhCwFPDx5vqeedpCuyFE2W7VtRXQT"]}
'

#getTransaction
curl http://api.mainnet-beta.solana.com/ -X POST -H "Content-Type: application/json" -d '
{
"jsonrpc": "2.0",
"id": 1,
"method": "getTransaction",
"params": [
"5V3CSYBtqvoM5aQhCHYcGpGDXFYwGauHBzMGd1TANNei26vcpHqawPZH6dxVALrs5m5vsZkGZAudGCmpHEHwTmYX",
"json"
]
}
'
