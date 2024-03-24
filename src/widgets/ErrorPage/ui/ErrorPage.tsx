import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {ErrorContainer} from "./ErrorPageStyles";

export const ErrorPage = () => {
    const reloadPage = () => {
        window.location.reload();
    };

    return (
        <ErrorContainer elevation={3}>
        <Typography variant="h5" component="p" gutterBottom>
                Відбулася непередбачена помилка
            </Typography>
            <Button variant="contained" color="primary" onClick={reloadPage}>
                Оновити сторінку
            </Button>
        </ErrorContainer>
    );
};
