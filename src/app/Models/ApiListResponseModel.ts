export class ApiListResponseModel implements IApiListResponseModel {
    results!: any[];
    totalItems!: number;
    pages!: number;

    constructor(data?: IApiListResponseModel) {
        if (data) {
            for (const property in data) {
                if (data.hasOwnProperty(property)) {
                    (this as any)[property] = (data as any)[property];
                }
            }
        }
    }
}

export interface IApiListResponseModel {
    results: any[];
    totalItems: number;
    pages: number;
}
