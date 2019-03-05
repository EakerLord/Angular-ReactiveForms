import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html'
})
export class DateComponent implements OnInit {

  baseForm = this.fb.group({
    date: ['', [Validators.required, Validators.pattern(/^\d{1,2}\/\d{1,2}\/(198[0-9]|199[0-9]|2000)$/)]]
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
  }

  OnSubmit() {
    console.warn(this.baseForm.value);
  }
}
