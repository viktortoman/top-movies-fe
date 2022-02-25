export class MovieModel implements IMovieModel {
    title?: string;
    releaseDate?: string;
    overview?: string;
    posterUrl?: string;
    createdAt?: string;
    relations?: any;

    constructor(data?: IMovieModel) {
        if (data) {
            for (const property in data) {
                if (data.hasOwnProperty(property)) {
                    (this as any)[property] = (data as any)[property];
                }
            }
        }
    }
}

export interface IMovieModel {
    title?: string;
    releaseDate?: string;
    overview?: string;
    posterUrl?: string;
    createdAt?: string;
    relations?: any;
}
