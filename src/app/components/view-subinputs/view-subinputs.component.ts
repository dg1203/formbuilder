import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-view-subinputs',
  templateUrl: './view-subinputs.component.html'
})
export class ViewSubinputsComponent {

  @Input() val: Array<any> = [];

    checkEquals(value: any, condition: any) {
      if (value === condition) {
        return true;
      } else {
        return false;
      }
    }

    checkEqualsNumber(value: any, condition: any, equals: any) {
      if (equals === 1) {
        if (value === condition) {
          return true;
        } else {
          return false;
        }
      } else if (equals === 2) {
        if (value > condition) {
          return true;
        } else {
          return false;
        }
      } else if (equals === 3) {
        if (value < condition) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    }

}
