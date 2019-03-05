import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-boolean',
  templateUrl: './boolean.component.html'
})
export class BooleanComponent implements OnInit {

  baseForm = this.fb.group({
    boolean: ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void { }

  OnSubmit() {
    console.warn(this.baseForm.value);
  }
}
