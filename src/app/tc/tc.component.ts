import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
@Component({
  selector: 'app-tc',
  templateUrl: './tc.component.html',
  styleUrls: ['./tc.component.css']
})
export class TcComponent implements OnInit {

  constructor() { }
  c: any;
  f: any;
  ngOnInit(): void {
  }
  changed(value: any, type: any) {
    if (value) {
      if (type === 'c') {
        let feh = (value * 9 / 5) + 32;
        this.f = feh.toFixed(1);
      } else {
        let cel = (value - 32) * (5 / 9);
        this.c = cel.toFixed(1);
      }
    } else {
      this.c = null;
      this.f = null;
    }

  }
}
