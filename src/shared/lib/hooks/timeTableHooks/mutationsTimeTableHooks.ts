import {useMutation, useQueryClient} from "@tanstack/react-query";
import {students_api} from "../../../api";
import {IRateItem} from "../../../../entities/StudentTable/model/types";
import {toast} from "react-toastify";

export const useMarkRate = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationKey: ['markRate'],
        mutationFn: (data: Omit<IRateItem, 'Id'>) => students_api.markRate(data),
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: ["attendance"] });
        },
        onError: () => {
            toast.error("Виникла помилка при відмітці відвідування")
        }
    })
}

export const useUnMarkRate = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationKey: ['unMarkRate'],
        mutationFn: (data:Omit<IRateItem, 'Id' | 'Title'>) => students_api.unMarkRate(data),
        onSuccess: async () => {
            await  queryClient.invalidateQueries({ queryKey: ["attendance"] });
        },
        onError: () => {
            toast.error("Виникла помилка при відміні відвідування");
        }
    })
}
