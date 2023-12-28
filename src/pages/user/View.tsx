import Datatable from "../../components/tables/Datatable";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { GoVerified, GoUnverified } from "react-icons/go";
import { MdPending } from "react-icons/md";

const View = ({ rows, columns, handleOpenCloseForm, actions, handleShowModel }: any) => {

    return <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell>Names</TableCell>
                    <TableCell align="left">Email</TableCell>
                    <TableCell align="left">Role</TableCell>
                    <TableCell align="left">Status</TableCell>
                    <TableCell align="right">Action</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map((row: any) => (
                    <TableRow
                        key={row.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell component="th" scope="row">
                            {row.firstName} {row.lastName}
                        </TableCell>
                        <TableCell align="left">{row.email}</TableCell>
                        <TableCell align="left">{row.role}</TableCell>
                        <TableCell align="right">{row.status === "VERIFIED" ?
                            <span><GoVerified title="VERIFIED" size={20} className="text-blue-600 font-bold" /> VERIFIED</span> :
                            row.status === "PENDING_VERIFICATION" ?
                                <span><MdPending title="PENDING VERIFICATION" size={20} className="text-yellow-600 font-bold" /> PENDING VERIFICATION</span> :
                                <span>  <GoUnverified title="UNVERIFIED" size={20} className="text-gray-600 font-bold" />UNVERIFIED </span>}</TableCell>
                        <TableCell align="right"><div className='text-2xl'>
                            <i onClick={() => handleShowModel(row)} className='fas fa-eye text-gray-500 cursor-pointer'></i>
                        </div></TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
    // <Datatable
    //     title={"User List"}
    //     rows={rows}
    //     headCells={columns}
    //     handleOpenCloseForm={handleOpenCloseForm}
    //     actions={actions} />
}
export default View;