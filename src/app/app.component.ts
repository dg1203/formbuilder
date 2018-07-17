import { Component } from '@angular/core';
import * as saveAs from 'file-saver';
import { ViewComponent } from './components/view/view.component';
import { SubinputsComponent } from './components/subinputs/subinputs.component';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    form = [];
    isForm = false;
    formView = false;
    preview = 'Preview';

    constructor(private sanitizer: DomSanitizer) {}
  
    ngOnInit() {
      if(localStorage.form) {
        this.form = JSON.parse(localStorage.form);
        this.isForm = true;
      }
      else {
        localStorage.setItem('form', JSON.stringify(this.form));
      }
      setInterval(() => {
        localStorage.setItem('form', JSON.stringify(this.form));
      }, 1000);
    }
  
    addInput(object) {
      this.isForm = true;
      const newInput = {
        question: '',
        type: 1,
        subInputs: [],
        value: ''
      }
      this.form.push(newInput);
    }

    addSubInput(val) {
      const newSubInput = {
        question: '',
        type: 1,
        equals: 1,
        condition: '',
        subInputs: [],
        value: ''
      }
      val.subInputs.push(newSubInput);
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

    showFormView() {
      if(this.formView == false) {
        this.preview = 'Close';
        this.formView = true;
      }
      else {
        this.preview = 'Preview';
        this.formView = false;
      }
    }
    
    removeElement(val) {
      this.form.map((input, index) => {
        if(val == input) {
          this.form.splice(index, 1);
        }
      });
    }

    downloadFile(){
      let dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.form));
      let dlAnchorElem = document.getElementById('downloadAnchorElem');
      dlAnchorElem.setAttribute("href",     dataStr     );
      dlAnchorElem.setAttribute("download", "form.json");
      dlAnchorElem.click();
    }

}
