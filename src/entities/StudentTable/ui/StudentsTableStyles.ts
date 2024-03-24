import {styled, TableCell, tableCellClasses} from "@mui/material";

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#f1f2f4",
        color: theme.palette.common.black,
        fontWeight: 600,
        border: '1px solid #dfe2e8',
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
        border: '1px solid #dfe2e8',
        '&:hover': {
            backgroundColor: theme.palette.action.hover,
            cursor: "pointer"
        },
        '&:nth-of-type(1)': {
            backgroundColor: 'transparent',
            cursor: "default",
            '&:hover': {
                backgroundColor: 'transparent'
            }
        },
    }
}));
