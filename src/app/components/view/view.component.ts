import { Component, OnInit, Input } from '@angular/core';
import { ViewSubinputsComponent } from '../view-subinputs/view-subinputs.component'

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  @Input() form = [];

  constructor() { }

  ngOnInit() {
    
  }

  isRadio(type) {
    if(type == 1) {
      return true;
    }
    else {
      return false;
    }
  }

  isText(type) {
    if(type == 2) {
      return true;
    }
    else {
      return false;
    }
  }

  isNumber(type) {
    if(type == 3) {
      return true;
    }
    else {
      return false;
    }
  }

}
