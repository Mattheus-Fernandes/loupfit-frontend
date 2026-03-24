import { IUser } from "src/app/core/models/interfaces/user.interface"

export type TableColumn = {
    key: keyof IUser, 
    label: string
}