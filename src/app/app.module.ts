import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ReactiveFormsModule} from "@angular/forms";

import {ToastModule} from 'primeng/toast';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService, MessageService} from 'primeng/api';

import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ErrorService} from "./Services/error.service";
import {MovieService} from "./Services/movie.service";
import {HomeComponent} from './Components/home/home.component';
import {MovieListComponent} from './Components/movie-list/movie-list.component';
import {LoadingScreenComponent} from './Components/loading-screen/loading-screen.component';
import {LoadingScreenInterceptor} from "./Helpers/loading-screen.interceptor";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {RippleModule} from "primeng/ripple";
import {DialogService, DynamicDialogModule} from 'primeng/dynamicdialog';
import { MovieDataComponent } from './Components/movie-data/movie-data.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        MovieListComponent,
        LoadingScreenComponent,
        MovieDataComponent
    ],
    imports: [
        HttpClientModule,
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        DynamicDialogModule,
        TableModule,
        ButtonModule,
        DialogModule,
        ConfirmDialogModule,
        BrowserAnimationsModule,
        ToastModule,
        RippleModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: LoadingScreenInterceptor,
            multi: true
        },
        ConfirmationService,
        MessageService,
        ErrorService,
        MovieService,
        DialogService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
