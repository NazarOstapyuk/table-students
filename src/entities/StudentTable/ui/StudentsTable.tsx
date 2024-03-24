import {Paper, Table, TableBody, TableContainer, TableHead} from '@mui/material';
import StudentsTableRow from "./StudentsTableRow";
import {SkeletonData} from "../../../shared/ui/SkeletonData";
import StudentsTableHeader from "./StudentsTableHeader";
import {ISchoolboyItem} from "../model/types";
import {
    useGetAttendance,
    useGetColumns,
    useGetStudents
} from "../../../shared/lib/hooks/timeTableHooks/queriesTimeTableHooks";

export const StudentsTable = () => {
    const {data: students, isLoading: isLoadingStudents} = useGetStudents();
    const {data: columns, isLoading: isLoadingColumns} = useGetColumns();
    const {data: attendance, isLoading: isLoadingAttendance} = useGetAttendance();

    const dataLoading = isLoadingStudents || isLoadingColumns || isLoadingAttendance;

    return (
        <Paper sx={{width: '100%', overflow: 'hidden'}}>
            <TableContainer sx={{maxHeight: "100vh", overflow: 'auto'}}>
                <Table stickyHeader>
                    <TableHead>
                        {!dataLoading ? (
                            <StudentsTableHeader columns={columns}/>
                        ) : (
                            <SkeletonData columns={columns?.length || 8} rows={1}/>
                        )}
                    </TableHead>
                    <TableBody>
                        {!dataLoading ? (
                            students?.map((student: ISchoolboyItem, index) => (
                                <StudentsTableRow index={index} attendance={attendance} columns={columns}
                                                  student={student} key={student.Id}/>
                            ))
                        ) : (
                            <SkeletonData columns={columns?.length || 8} rows={students?.length || 10}/>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
};

