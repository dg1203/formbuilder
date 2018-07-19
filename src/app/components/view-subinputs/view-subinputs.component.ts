import { Component, Input } from '@angular/core';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-view-subinputs',
  templateUrl: './view-subinputs.component.html'
})
export class ViewSubinputsComponent {

  @Input() val: Array<object> = [];

    checkEquals(value: string, condition: string) {
      if (value === condition) {
        return true;
      } else {
        return false;
      }
    }

    checkEqualsNumber(value: string, condition: string, equals: string) {
      if (parseInt(equals , 10) === 1) {
        if (parseInt(value , 10) === parseInt(condition , 10)) {
          return true;
        } else {
          return false;
        }
      } else if (parseInt(equals , 10) === 2) {
        if (parseInt(value , 10) > parseInt(condition , 10)) {
          return true;
        } else {
          return false;
        }
      } else if (parseInt(equals , 10) === 3) {
        if (parseInt(value , 10) < parseInt(condition , 10)) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    }

}
