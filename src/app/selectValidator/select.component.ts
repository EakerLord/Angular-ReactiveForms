import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html'
})
export class SelectComponent implements OnInit {

  cargos = [ 'Trainee', 'Junior', 'Semi-Senior', 'Senior', 'Partner' ];

  baseForm = this.fb.group({
    select: ['', [Validators.required ]]
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
  }

  OnSubmit() {
    console.warn(this.baseForm.value);
  }
}
