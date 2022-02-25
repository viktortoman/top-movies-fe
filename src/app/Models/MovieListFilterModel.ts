export class MovieListFilterModel implements IMovieListFilterModel {
    Order?: string;
    OrderBy?: string;
    Limit?: number;
    page?: number;

    constructor(data?: IMovieListFilterModel) {
        if (data) {
            for (const property in data) {
                if (data.hasOwnProperty(property)) {
                    (this as any)[property] = (data as any)[property];
                }
            }
        }
    }
}

export interface IMovieListFilterModel {
    Order?: string;
    OrderBy?: string;
    Limit?: number;
    page?: number;
}

export enum OrderDirection {
    ASC = 1,
    DESC = -1
}
