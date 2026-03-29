import { TableColumn } from "src/app/core/models/types/table-column.type";

export class DeleteColumns {

    static mobileColumns(): TableColumn[] {
        return [
            { key: "name", label: "Nome" },
            { key: "username", label: "Usuário" }
        ]
    }

    static tabletColumns(): TableColumn[] {
        return [
            { key: "name", label: "Nome" },
            { key: "lastname", label: "Sobrenome" },
            { key: "username", label: "Usuário" }
        ]
    }

    static desktopColumns(): TableColumn[] {
        return [
            { key: "name", label: "Nome" },
            { key: "lastname", label: "Sobrenome" },
            { key: "username", label: "Usuário" },
            { key: "role", label: "Acesso" },
        ]
    }
}