import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable} from "rxjs";
import {Router, UrlSerializer} from "@angular/router";
import {MovieModel} from "../Models/MovieModel";
import {MovieListFilterModel} from "../Models/MovieListFilterModel";
import {ErrorService} from "./error.service";
import {ApiResponseModel} from "../Models/ApiResponseModel";
import {ApiListResponseModel} from "../Models/ApiListResponseModel";

@Injectable({
    providedIn: 'root'
})
export class MovieService {

    apiUrl: string = `${environment.apiUrl}movie`;
    httpOptions: any = {};

    constructor(
        private http: HttpClient,
        private serializer: UrlSerializer,
        private router: Router,
        private error: ErrorService,
    ) {
    }

    getAllMovie(filterParams?: MovieListFilterModel): Observable<ApiListResponseModel> {
        const queryParams = this.router.createUrlTree([], { queryParams: filterParams });

        return this.http.get(this.apiUrl + '/saved-list' + this.serializer.serialize(queryParams), this.httpOptions).pipe(
            map((res: any) => {
                return res;
            }),
            catchError(this.error.handleError<ApiListResponseModel>('getAllMovie'))
        )
    }

    getMovie(id: number): Observable<ApiResponseModel> {
        return this.http.get(this.apiUrl + '/' + id, this.httpOptions).pipe(
            map((res: any) => {
                return res.result;
            }),
            catchError(this.error.handleError<ApiResponseModel>('getMovie'))
        )
    }
}
