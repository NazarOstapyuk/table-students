import {useQuery} from "@tanstack/react-query";
import {students_api} from "../../../api";
import {ISchoolboyItem} from "../../../../entities/StudentTable/model/types";

export const useGetStudentProfile = (id:string | undefined) => {
    return useQuery({
        queryKey: ['students-profile', id],
        queryFn: () => students_api.getAllStudents(),
        select: (data) => data.find((student:ISchoolboyItem) => student.Id === Number(id)),
    })
}
