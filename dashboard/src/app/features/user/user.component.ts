import { Component } from '@angular/core';
import { ICard } from 'src/app/core/models/interfaces/card.interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  protected cardList: ICard[] = [
    { icon: "add", title: "Novo usuário", text: "Criar um novo usuário", redirectTo: "new", currencyCode: false },
    { icon: "data_loss_prevention", title: "Usuários", text: "Ver todos os usuários", redirectTo: "list", currencyCode: false },
    { icon: "person_edit", title: "Editar usuário", text: "Modificar dados do usuário", redirectTo: "edit", currencyCode: false },
    { icon: "security", title: "Atualizar permissão", text: "Alterar nível de acesso", redirectTo: "edit-permission", currencyCode: false },
    { icon: "alternate_email", title: "Atualizar username", text: "Modificar nome de usuário", currencyCode: false },
    { icon: "delete", title: "Excluir usuário", text: "Remover usuário do sistema", currencyCode: false }
  ]
}
