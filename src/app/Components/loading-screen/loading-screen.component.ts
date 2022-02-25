import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {LoadingScreenService} from "../../Services/loading-screen.service";

@Component({
    selector: 'app-loader',
    templateUrl: './loading-screen.component.html',
    styleUrls: ['./loading-screen.component.scss']
})
export class LoadingScreenComponent implements OnInit {

    loading: boolean = false;
    loadingSubscription: Subscription = new Subscription();

    constructor(
        private loadingScreenService: LoadingScreenService
    ) {
    }

    ngOnInit(): void {
        this.loadingSubscription = this.loadingScreenService.loadingStatus.subscribe((value: any) => {
            this.loading = value;
        });
    }

    // Unsubscribe from loading subscription
    ngOnDestroy() {
        this.loadingSubscription.unsubscribe();
    }
}
