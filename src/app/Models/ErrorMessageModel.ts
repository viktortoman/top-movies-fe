export class ErrorMessageModel implements IErrorMessage {
    formProperty!: any;
    label!: string;

    constructor(data?: IErrorMessage) {
        if (data) {
            for (const property in data) {
                if (data.hasOwnProperty(property)) {
                    (this as any)[property] = (data as any)[property];
                }
            }
        }
    }
}

export interface IErrorMessage {
    formProperty: any;
    label: string;
}
