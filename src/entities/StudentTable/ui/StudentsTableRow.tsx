import {TableRow} from '@mui/material';
import {StyledTableCell} from './StudentsTableStyles';
import {useNavigate} from "react-router-dom";
import {IColumnItem, IRateItem, ISchoolboyItem} from "../model/types";
import {
    useMarkRate,
    useUnMarkRate
} from "../../../shared/lib/hooks/timeTableHooks/mutationsTimeTableHooks";

interface IProps {
    student: ISchoolboyItem;
    attendance: IRateItem[] | undefined;
    columns: IColumnItem[] | undefined;
    index: number;
}

const StudentsTableRow = (props: IProps) => {
    const {student, columns, attendance, index} = props;
    const {mutate: markMutate} = useMarkRate();
    const {mutate: unMarkMutate} = useUnMarkRate();
    const navigate = useNavigate();
    const handleAttendanceClick = (studentId:number, columnId :number, isAbsent: boolean | undefined) => {
        if (isAbsent) {
            unMarkMutate({SchoolboyId: studentId, ColumnId: columnId});
        } else {
            markMutate({SchoolboyId: studentId, ColumnId: columnId, Title: "H"});
        }
    };

    const handleStudentClick = (id: number) => {
        navigate(`/${id}`);
    }
    const studentInfo = [student.FirstName, student.SecondName, student.LastName]?.filter(Boolean)?.join(' ');
    return (
        <TableRow key={student.Id}>
            <StyledTableCell>
                {index + 1}
            </StyledTableCell>
            <StyledTableCell onClick={() => handleStudentClick(student.Id)}>
                {studentInfo}
            </StyledTableCell>
            {columns?.map((column: IColumnItem) => {
                const isAbsent = attendance?.some(a => a.SchoolboyId === student.Id && a.ColumnId === column.Id);
                return (
                    <StyledTableCell
                        key={column.Id}
                        onClick={() => handleAttendanceClick(student.Id, column.Id, isAbsent)}
                        style={{cursor: 'pointer'}}
                    >
                        {isAbsent ? "H" : ""}
                    </StyledTableCell>
                );
            })}
        </TableRow>

    );
};

export default StudentsTableRow;
