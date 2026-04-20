import { IUser } from "src/app/core/models/interfaces/user.interface";

export interface IAction {
    type: string,
    user: IUser
}