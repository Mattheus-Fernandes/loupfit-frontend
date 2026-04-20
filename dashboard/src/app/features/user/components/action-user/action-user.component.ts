import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-action-user',
  templateUrl: './action-user.component.html',
  styleUrls: ['./action-user.component.scss']
})
export class ActionUserComponent {
  @Input() icon: string = ""
}
