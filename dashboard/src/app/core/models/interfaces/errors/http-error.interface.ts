import { IError } from "./error.interface";

export interface IHttpError {
    error: IError,
    headers: any,
    message: string,
    name: string,
    ok: boolean,
    status: number,
    statusText: string,
    url: string
}