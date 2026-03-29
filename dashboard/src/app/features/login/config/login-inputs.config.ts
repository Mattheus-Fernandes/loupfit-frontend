import { IInput } from "src/app/core/models/interfaces/input.interface"

export class LoginInputs {
    static username(): IInput {
        return {
            icon: "person",
            type: "text",
            name: "user",
            placeholder: "Usuário",
        }
    }

    static password(): IInput {
        return {
            icon: "lock",
            type: "password",
            name: "password",
            placeholder: "Senha",
            suffix: "visibility_off"
        }
    }
}