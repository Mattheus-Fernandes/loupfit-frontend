import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-not-found-msg',
  templateUrl: './not-found-msg.component.html',
  styleUrls: ['./not-found-msg.component.scss']
})
export class NotFoundMsgComponent {
  @Input() msg: string = ""
}
