import { useParams } from 'react-router-dom';
import { Box, Typography, Button, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {useGetStudentProfile} from "../../../shared/lib/hooks/studentProfileHooks/useGetStudentProfile";

const DetailPage = () => {
    const {id} = useParams<{id:string}>();
    const {data} = useGetStudentProfile(id);
    const navigate = useNavigate();

    return (
        <Box sx={{ p: 3 }}>
            <Paper elevation={3} sx={{ p: 3, mb: 2, minHeight: '150px', overflow: 'auto' }}>
                <Typography variant="h4" gutterBottom>
                    Деталі учня
                </Typography>
                {data ? (
                    <>
                        <Typography variant="h6">Ім'я: {data.FirstName || 'Невідомо'}</Typography>
                        <Typography variant="h6">Прізвище: {data.LastName || 'Невідомо'}</Typography>
                        <Typography variant="h6">По-батькові: {data.SecondName || 'Невідомо'}</Typography>
                    </>
                ) : (
                    <Typography>Завантаження...</Typography>
                )}
            </Paper>
            <Button variant="contained" onClick={() => navigate(-1)}>
                Назад
            </Button>
        </Box>
    )
}
export default DetailPage;
