import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ISelect } from 'src/app/core/models/interfaces/select.interface';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {
  @Input() optionsList: ISelect[] = []
  @Input() control!: FormControl
  @Input() error: boolean = false
}
