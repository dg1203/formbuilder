import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-view-subinputs',
  templateUrl: './view-subinputs.component.html',
  styleUrls: ['./view-subinputs.component.css']
})
export class ViewSubinputsComponent implements OnInit {

  @Input() val = [];

  constructor() { }

  ngOnInit() {
  }

  isRadio(type) {
      if(type == 1) {
        return true;
      }
      else
        return false;
    }

    isText(type) {
      if(type == 2)
        return true;
      else
        return false;
    }

    isNumber(type) {
      if(type == 3)
        return true;
      else
        return false;
    }

    checkEquals(value, condition) {
      if(value == condition) {
        return true;
      }
      else {
        return false;
      }
    }

    checkEqualsNumber(value, condition, equals) {
      if(equals == 1) {
        if(value == condition) {
          return true;
        }
        else {
          return false;
        }
      }
      else if(equals == 2) {
        if(value > condition) {
          return true;
        }
        else {
          return false;
        }
      }
      else if(equals ==3) {
        if(value < condition) {
          return true;
        }
        else {
          return false;
        }
      }
      else {
        return false;
      }
    }

    isSubinput(subInput) {
      if(subInput.subInputs.length > 0) {
        return true;
      }
      else {
        return false;
      }
    }

}
