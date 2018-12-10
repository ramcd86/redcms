export interface IPageData {
    routes: Array<number>;
    pageData: Array<IPageConstruction>;
}

export interface IPageConstruction {
    route: number;
    routeName: string;
    title: string;
    pageContent: string;
}
