import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-subinputs',
  templateUrl: './subinputs.component.html',
  styleUrls: ['./subinputs.component.css']
})
export class SubinputsComponent implements OnInit {

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

    isSubinput(subInput) {
      if(subInput.subInputs.length > 0) {
        return true;
      }
      else {
        return false;
      }
    }

    addSubInput(subInput) {
      const newSubInput = {
        question: '',
        type: 1,
        equals: 1,
        condition: '',
        subInputs: [],
        value: ''
      }
      subInput.subInputs.push(newSubInput);
    }

    removeElement(subInput) {
      this.val['subInputs'].map((input, index) => {
        if(subInput == input) {
          this.val['subInputs'].splice(index, 1);
        }
      });
    }

}
