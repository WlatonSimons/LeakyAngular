import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule, ReactiveFormsModule],
  template: `
  <form [formGroup]="myForm">
    <ng-container>
      <label for="name">Name:</label>
      <input type="text" id="name" formControlName="name" required>
    </ng-container>
    @if (myForm.controls['textField']){
      <ng-container>
        <label for="name">Name:</label>
        <input type="text" id="textField" formControlName="textField" required>
      </ng-container>
    }
  </form>
  <button label="Continue" (click)="changeButton()"></button>
`,
})
export class AppComponent {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      name: ['', Validators.required]
    });
  }

  changeButton(): void {
    const newControl = this.fb.control('');
    for(let i = 0; i < 1001; i++) {
      if(this.myForm.controls['textField']){
        this.myForm.removeControl('textField');
      }else{
        this.myForm.addControl('textField', newControl);
      }
      console.log("loopin");
    }
  }
}
