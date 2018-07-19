import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-subinputs',
  templateUrl: './subinputs.component.html'
})
export class SubinputsComponent {

  @Input() val: Array<object> = [];
  @Output() subinputEvent = new EventEmitter<object>();
  @Output() saveChangesEvent = new EventEmitter<object>();

    isSubinput(subInput: object) {
      if (subInput['subInputs'].length > 0) {
        return true;
      } else {
        return false;
      }
    }

    addSubInput(subInput: object) {
      this.subinputEvent.emit(subInput);
    }

    saveChanges() {
      this.saveChangesEvent.emit();
    }

    removeSubInput(subInput: object) {
      this.val['subInputs'].map((input, index) => {
        if (subInput === input) {
          this.val['subInputs'].splice(index, 1);
        }
      });
      this.saveChanges();
    }

}
