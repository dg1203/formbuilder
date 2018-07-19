import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ViewComponent } from './components/view/view.component';
import { SubinputsComponent } from './components/subinputs/subinputs.component';

class Form {
  question: string;
  type: number;
  subInputs: Array<object>;
  value: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

    form: Array<object> = [];
    isForm: boolean = false;
    formView: boolean = false;
    preview: string = 'Preview';

    ngOnInit() {
      this.form = Object.values(new Form());
      if (localStorage.form) {
        this.form = JSON.parse(localStorage.form);
        this.checkLength();
      } else {
        this.saveChanges();
      }
    }

    saveChanges() {
      localStorage.setItem('form', JSON.stringify(this.form));
      this.checkLength();
    }

    checkLength() {
      if (this.form.length > 0) {
        this.isForm = true;
      } else {
        this.isForm = false;
      }
    }

    addInput(object: object) {
      this.isForm = true;
      const newInput = {
        question: '',
        type: 1,
        subInputs: [],
        value: ''
      };
      this.form.push(newInput);
      this.saveChanges();
    }

    addSubInput(val: object) {
      const newSubInput = {
        question: '',
        type: 1,
        equals: 1,
        condition: '',
        subInputs: [],
        value: ''
      };
      val['subInputs'].push(newSubInput);
      this.saveChanges();
    }

    showFormView() {
      if (this.formView === false) {
        this.preview = 'Close';
        this.formView = true;
      } else {
        this.preview = 'Preview';
        this.formView = false;
      }
    }

    removeElement(val: object) {
      this.form.map((input, index) => {
        if (val === input) {
          this.form.splice(index, 1);
        }
      });
      this.saveChanges();
    }

    downloadFile() {
      const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(this.form));
      const dlAnchorElem = document.getElementById('downloadAnchorElem');
      dlAnchorElem.setAttribute('href', dataStr);
      dlAnchorElem.setAttribute('download', 'form.json');
      dlAnchorElem.click();
    }

}
