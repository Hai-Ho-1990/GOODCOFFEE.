// import Box from '@mui/material/Box';
// import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
// import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useState } from 'react';

function createData(
    orderNumber: number,
    orderDate: string,
    totalPrice: number,
    orderStatus: string
) {
    return {
        orderNumber,
        orderDate,
        totalPrice,
        orderStatus,
        history: [
            {
                //Beställningen ska liggas här.
            }
        ]
    };
}

function Row(props: { row: ReturnType<typeof createData> }) {
    const hasOrder = false;
    const { row } = props;
    const [open, setOpen] = useState(false);
    return hasOrder ? (
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
            <TableCell>
                <IconButton
                    aria-label="expand row"
                    size="small"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </IconButton>
            </TableCell>{' '}
            <TableCell component="th" scope="row">
                {row.orderNumber}
            </TableCell>
            <TableCell align="center">{row.orderDate}</TableCell>
            <TableCell align="center">{row.totalPrice}</TableCell>
            <TableCell align="center">{row.orderStatus}</TableCell>
        </TableRow>
    ) : (
        ''
    );

    {
        /* <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align="right">{historyRow.amount}</TableCell>
                      <TableCell align="right">
                        {Math.round(historyRow.amount * row.price * 100) / 100}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow> */
    }
}
const rows = [createData(123, '2024-05-17', 123, 'pending')];

function OrderComponent() {
    return (
        <section>
            <TableContainer>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell sx={{ fontWeight: 'bold' }}>
                                Order Number
                            </TableCell>
                            <TableCell
                                sx={{ fontWeight: 'bold' }}
                                align="center"
                            >
                                Order Date
                            </TableCell>
                            <TableCell
                                sx={{ fontWeight: 'bold' }}
                                align="center"
                            >
                                Total Price
                            </TableCell>
                            <TableCell
                                sx={{ fontWeight: 'bold' }}
                                align="center"
                            >
                                Order Status
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <Row key={row.orderNumber} row={row} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </section>
    );
}

export default OrderComponent;
