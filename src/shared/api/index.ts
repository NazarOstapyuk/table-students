import axios from "axios";
import {toast} from "react-toastify";
import {IColumn, IRate, IRateItem, ISchoolboy} from "../../entities/StudentTable/model/types";

const classKey = import.meta.env.VITE_CLASS_KEY;
const api = axios.create({
    baseURL: `http://94.131.246.109:5555/v1/${classKey}/`,
    headers: {
        "Content-Type": "application/json",
    }
})

export const students_api = {
    getAllStudents: async() => {
        return (await api.get<ISchoolboy>("Schoolboy")).data.Items
    },
    getColumns: async() => {
        return (await api.get<IColumn>("Column")).data.Items
    },
    getRates: async() => {
        return (await api.get<IRate>("Rate")).data.Items
    },
    markRate: async(data: Omit<IRateItem, 'Id'>) => {
        return await api.post("Rate", data)
    },
    unMarkRate: async(data: Omit<IRateItem, 'Id' | 'Title'>) => {
        return await api.post("UnRate", data)
    }
}

api.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    toast.error("Помилка на стороні клієнта: " + error.response.data);
                    break;
                case 500:
                    toast.error("Помилка сервера: Щось пішло не так!");
                    break;
                default:
                    toast.error(error.response.data.message || "Сталася помилка");
            }
        } else if (error.request) {
            toast.error("Помилка мережі: Запит було зроблено, але відповіді не отримано");
        } else {
            toast.error("Помилка: " + error.message);
        }

        return Promise.reject(error);
    }
);
