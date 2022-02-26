import {Component, OnInit} from '@angular/core';
import {MovieModel} from "../../Models/MovieModel";
import {MovieListFilterModel} from "../../Models/MovieListFilterModel";
import {MovieService} from "../../Services/movie.service";
import {ApiResponseModel} from "../../Models/ApiResponseModel";
import {map} from "rxjs";
import {DialogService} from "primeng/dynamicdialog";
import {MovieDataComponent} from "../movie-data/movie-data.component";
import {ApiListResponseModel} from "../../Models/ApiListResponseModel";

@Component({
    selector: 'app-movie-list',
    templateUrl: './movie-list.component.html',
    styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

    page: number = 1;
    selectedMovies: MovieModel = new MovieModel();
    movie: MovieModel[] = [];

    rows = 20;
    isLoading = true;
    totalRecords: number = 0;

    filterParams: MovieListFilterModel = new MovieListFilterModel({
        page: this.page
    })

    constructor(
        private movieService: MovieService,
        private dialogService: DialogService
    ) {}

    ngOnInit(): void {
        this.isLoading = true;
        this.getAllMovie();
    }

    // Get All staff from backend
    getAllMovie() {
        this.movieService.getAllMovie(this.filterParams).subscribe((response: ApiListResponseModel) => {
            this.totalRecords = response.totalItems;

            if (response) {
                response.results.map(dto => {
                    new MovieModel(dto)
                })
                this.movie = response.results;
            }

            this.isLoading = false;
        })
    }

    show(movieId: any) {
        this.dialogService.open(MovieDataComponent, {
            width: '30%',
            data: {
                movieId: movieId
            },
        });
    }

    // On pagination event
    onPage(event: any) {
        this.page = event;
        this.isLoading = true;
        this.filterParams.page = this.page; //event.first / event.rows + 1;

        this.getAllMovie();
    }
}
