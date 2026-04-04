import { Component } from '@angular/core';
import { ICard } from 'src/app/core/models/interfaces/card.interface';

@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.scss']
})
export class AssetsComponent {

   protected cardList: ICard[] = [
      { icon: "add", title: "Novo equipamento", text: "Adicionar um novo equipamento", redirectTo: "new", currencyCode: false },
      { icon: "apps", title: "Equipamentos", text: "Ver todos os equipamentos", redirectTo: "list", currencyCode: false },
      { icon: "view_in_ar", title: "Ativos do Usuário", text: "Buscar equipamento cadastrado por um usuário", redirectTo: "edit", currencyCode: false },
      { icon: "edit_square", title: "Editar", text: "Editar equipamento", redirectTo: "edit-permission", currencyCode: false },
      { icon: "delete", title: "Excluir", text: "Remover usuário do sistema", redirectTo: "delete",currencyCode: false }
    ]
}
