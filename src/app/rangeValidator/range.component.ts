import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-range',
  templateUrl: './range.component.html'
})
export class RangeComponent implements OnInit {

  form = new FormControl('');

  constructor() { }

  ngOnInit(): void { }
}
