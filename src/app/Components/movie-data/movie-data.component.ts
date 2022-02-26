import {AfterViewInit, Component, OnChanges, OnInit} from '@angular/core';
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";
import {MovieService} from "../../Services/movie.service";
import {ApiResponseModel} from "../../Models/ApiResponseModel";

@Component({
    selector: 'app-movie-data',
    templateUrl: './movie-data.component.html',
    styleUrls: ['./movie-data.component.scss']
})
export class MovieDataComponent implements AfterViewInit {

    movie: any;
    isLoading = true;
    vote: number = 0;

    constructor(
        private config: DynamicDialogConfig,
        private movieService: MovieService,
    ) {
    }

    ngAfterViewInit(): void {
        this.isLoading = true;
        this.movieService.getMovie(this.config.data.movieId).subscribe((response: ApiResponseModel) => {
            this.movie = response;
            this.vote = Math.round(this.movie.vote_average)
        })
    }

    getCategories(genres: any) {
        let categories:any = [];

        genres.map((genre: any) => {
            categories.push(genre.name);
        });

        return categories.join()
    }
}
