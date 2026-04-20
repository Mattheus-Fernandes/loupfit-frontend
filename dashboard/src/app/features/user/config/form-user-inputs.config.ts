import { IInput } from "src/app/core/models/interfaces/input.interface";
import { UserRole } from "src/app/core/models/enums/user-role.enum";
import { RoleList } from "../types/role-list.type";

export class FormUserInputs {
    static inputName(): IInput {
        return {
            icon: 'person',
            name: 'name',
            type: 'text',
            placeholder: 'Nome'
        }
    }

    static inputLastname(): IInput {
        return {
            icon: 'person',
            name: 'lastname',
            type: 'text',
            placeholder: 'Sobrenome'
        }
    }

    static inputUsername(): IInput {
        return {
            icon: 'person_shield',
            name: 'username',
            type: 'text',
            placeholder: 'Usuário',
        }
    }

    static inputPassword(): IInput {
        return {
            icon: 'lock',
            name: 'password',
            type: 'password',
            placeholder: 'Senha',
            suffix: 'visibility_off'
        }
    }

    static roleList(): RoleList {
        return [
            { value: UserRole.OWNER, text: "Proprietário" },
            { value: UserRole.ADMIN, text: "Administrador" },
            { value: UserRole.EDITOR, text: "Editor" },
            { value: UserRole.VIEWER, text: "Visualizador" }
        ]
    }


}