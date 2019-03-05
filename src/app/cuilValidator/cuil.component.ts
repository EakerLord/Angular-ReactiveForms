import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cuil',
  templateUrl: './cuil.component.html'
})
export class CuilComponent implements OnInit {

  baseForm = this.fb.group({
    cuil: ['', [Validators.required, Validators.maxLength(13), Validators.pattern(/\d{2}-\d{8}-\d/)]]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void { }

  OnSubmit() {
    console.warn(this.baseForm.value);
  }
}
