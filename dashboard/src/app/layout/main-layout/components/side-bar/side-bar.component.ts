import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { RedirectList } from 'src/app/core/models/types/redirect-list.type';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {
  @Input() menuOpen: boolean = false

  protected listRedirect: RedirectList = [
    { icon: "person_shield", path: "user", text: "Usuários" },
    { icon: "group", path: "customer", text: "Clientes" },
    { icon: "home_work", path: "asset", text: "Equipamentos" },
    { icon: "arrow_split", path: "consumable", text: "Consumivéis" },
    { icon: "assignment_ind", path: "supplier", text: "Fornecedores" },
    { icon: "inventory_2", path: "product", text: "Produtos" },
    { icon: "sell", path: "order", text: "Vendas" },
    { icon: "logout", text: "Sair" }
  ]
}
