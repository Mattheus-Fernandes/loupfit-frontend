import { IError } from "../interfaces/errors/error.interface"
import { IHttpError } from "../interfaces/errors/http-error.interface"

export type HttpErrorResponse = {
    error: IError,
    body: IHttpError
} 