import {AppRoutes, getRouteDetail, getRouteMain} from "../../../../shared/const/router";
import { RouteProps } from 'react-router-dom';
import {MainPage} from "../../../../pages/MainPage";
import {DetailPage} from "../../../../pages/DetailPage";
import {NotFoundPage} from "../../../../pages/NotFoundPage";

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: getRouteMain(),
        element: <MainPage />,
    },
    [AppRoutes.DETAIL]: {
        path: getRouteDetail(':id'),
        element: <DetailPage />,
    },
    // last
    [AppRoutes.NOT_FOUND]: {
        path: '*',
        element: <NotFoundPage />,
    },
};
