import {TableRow} from '@mui/material';
import {StyledTableCell} from './StudentsTableStyles';
import {IColumnItem} from "../model/types";

interface IProps {
    columns: IColumnItem[] | undefined;
}

const StudentsTableHeader = (props: IProps) => {
    const {columns} = props;
    return (
        <TableRow>
            <StyledTableCell>№</StyledTableCell>
            <StyledTableCell>Ім'я учня</StyledTableCell>
            {columns?.map((column) => (
                <StyledTableCell key={column.Id}>{column.Title}</StyledTableCell>
            ))}
        </TableRow>
    );
};

export default StudentsTableHeader;
