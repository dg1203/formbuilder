import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    form = [];

    constructor() {}
  
    ngOnInit() {
    }
  
    addInput() {
      const newInput = {
        question: '',
        type: '',
        subInputs: []
      }
      this.form.push(newInput);
      //console.log(this.form)
    }

    addSubInput(i) {
      const newSubInput = {
        question: '',
        type: '',
        equals: '',
        condition: '',
        subInputs: []
      }
      this.form[i].subInputs.push(newSubInput);
      //console.log(this.form)
    }

    isRadio(type) {
      alert(type)
    }

}
