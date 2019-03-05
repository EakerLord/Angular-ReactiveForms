import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-age',
  templateUrl: './age.component.html'
})
export class AgeComponent implements OnInit {

  baseForm = this.fb.group({
    age: ['', [Validators.required, Validators.min(1), Validators.max(99)]]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void { }

  OnSubmit() {
    console.warn(this.baseForm.value);
  }
}
