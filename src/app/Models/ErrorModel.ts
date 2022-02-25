import { ErrorMessageModel } from "./ErrorMessageModel";

export class ErrorModel implements IError {
    correlationId!: any;
    code!: string;
    messages!: ErrorMessageModel[];

    constructor(data?: IError) {
        if (data) {
            for (const property in data) {
                if (data.hasOwnProperty(property)) {
                    (this as any)[property] = (data as any)[property];
                }
            }
        }
    }
}

export interface IError {
    correlationId: any;
    code: string;
    messages: ErrorMessageModel[];
}
