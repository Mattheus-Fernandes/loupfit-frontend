import { Component, Input } from '@angular/core';
import { IRedirect } from 'src/app/core/models/interfaces/redirect.interface';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.scss']
})
export class RedirectComponent {
  @Input() redirectInfo: IRedirect = {} as IRedirect
}
