export enum AppRoutes {
    MAIN = 'main',
    DETAIL = 'detail',
    // last
    NOT_FOUND = 'not_found',
}

export const getRouteMain = () => '/';
export const getRouteDetail = (id: string) => `/${id}`;

export const AppRouteByPathPattern: Record<string, AppRoutes> = {
    [getRouteMain()]: AppRoutes.MAIN,
    [getRouteDetail(':id')]: AppRoutes.DETAIL,
};
