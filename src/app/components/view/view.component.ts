import { Component, Input } from '@angular/core';
import { ViewSubinputsComponent } from '../view-subinputs/view-subinputs.component';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html'
})
export class ViewComponent {

  @Input() form: Array<object> = [];

}
