import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pssword',
  templateUrl: './pssword.component.html'
})
export class PsswordComponent implements OnInit {

  baseForm = this.fb.group({
    pssword: ['', [Validators.required, Validators.minLength(6)]],
    confirmPssword: ['', [Validators.required, Validators.minLength(6)]]
  }, {validator: this.check});

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
  }
  check(group: FormGroup){
    const pass = group.controls.pssword.value;
    const confirmPass = group.controls.confirmPssword.value;
    return pass === confirmPass ? null : {notSame: true}
  }

  OnSubmit() {
    console.warn(this.baseForm.value);
  }

}
