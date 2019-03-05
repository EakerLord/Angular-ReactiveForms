import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html'
})
export class NameComponent implements OnInit {

  baseForm = this.fb.group({
    name: ['', [Validators.required, Validators.maxLength(15), Validators.pattern(/^[A-Z][\S]+$/)]]
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
  }

  OnSubmit() {
    console.warn(this.baseForm.value);
  }
}
