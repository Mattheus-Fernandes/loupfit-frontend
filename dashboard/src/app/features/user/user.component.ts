import { Component } from '@angular/core';
import { ICard } from 'src/app/core/models/interfaces/card.interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  protected cardList: ICard[] = [
    { icon: "add", title: "Novo usuário", redirectTo: "new",currencyCode: false },
    { icon: "data_loss_prevention", title: "Usuários", currencyCode: false },
    { icon: "person", title: "Buscar usuário", currencyCode: false },
    { icon: "person_edit", title: "Editar usuário", currencyCode: false },
    { icon: "edit", title: "Atualizar permissão", currencyCode: false },
    { icon: "edit", title: "Atualizar username", currencyCode: false },
    { icon: "delete", title: "Excluir usuário", currencyCode: false }
  ]
}
