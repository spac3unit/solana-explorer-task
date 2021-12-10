import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { truncate } from '../utils';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const theme = createTheme({
  typography: {
    fontFamily: ['Roboto Mono', 'Libre Franklin'].join(','),
  },
  palette: { mode: 'dark' },
  components: {
    // Name of the component
    MuiTable: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          // width: 'auto',
        },
      },
    },
    MuiTableContainer: {
      styleOverrides: {
        root: {
          // width: 'max-content',
        },
      },
    },
  },
});

export const TransactionsTable = ({ transactions }) => {
  return (
    <ThemeProvider theme={theme}>
      {transactions.length > 0 ? (
        <TableContainer component={Paper} elevation={6}>
          <Table sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow>
                <TableCell>Signature</TableCell>
                <TableCell align="right">Block</TableCell>
                <TableCell align="right">Date/Time</TableCell>
                <TableCell align="right">Status</TableCell>
                <TableCell align="right">Change Amount (SOL)</TableCell>
                <TableCell align="right">Balance after</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {transactions.map((t, i) => (
                <TableRow
                  key={t.blockId}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell>
                    {truncate(t.transactionHash, 10, 7, 24)}
                  </TableCell>
                  <TableCell align="right">{t.blockId}</TableCell>
                  <TableCell align="right">{t.transactionDate}</TableCell>
                  <TableCell align="right">
                    <span style={{ color: 'green' }}>
                      {t.transactionStatus}
                    </span>
                  </TableCell>
                  <TableCell align="right">{t.balanceDiff}</TableCell>
                  <TableCell align="right">{t.balanceAfter}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        'Loading...'
      )}
    </ThemeProvider>
  );
};
