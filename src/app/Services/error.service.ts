import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { ErrorMessageModel } from "../Models/ErrorMessageModel";
import { ErrorModel } from "../Models/ErrorModel";

@Injectable({
    providedIn: 'root'
})
export class ErrorService {
    errorMsg: string = '';

    constructor() {}

    handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.log(error.error.code)
            this.errorMsg = this.findErrorMsg(error.error);
            return of(result as T);
        };
    }

    // Get error message
    getError() {
        return this.errorMsg;
    }

    // Find error message by error code
    findErrorMsg(errorCode: ErrorModel) {
        let msg: string = '';
        let messages: ErrorMessageModel[] = errorCode.messages;

        console.log(errorCode);
        console.log(messages);

        switch (errorCode.code) {
            default:
                msg = 'Ismeretlen hiba!';
                break;
        }

        return msg;
    }
}
