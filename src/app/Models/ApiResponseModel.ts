export class ApiResponseModel implements IApiResponseModel {
    result!: any[];

    constructor(data?: IApiResponseModel) {
        if (data) {
            for (const property in data) {
                if (data.hasOwnProperty(property)) {
                    (this as any)[property] = (data as any)[property];
                }
            }
        }
    }
}

export interface IApiResponseModel {
    result: any[];
}
