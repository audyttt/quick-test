import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-testspecs',
  templateUrl: './testspecs.component.html',
  styleUrls: ['./testspecs.component.scss'],
})
export class TestspecsComponent implements OnInit {
  form?: FormGroup;
  numberInput: any;
  result: boolean;
  option = 'isPrime';
  cars = [
    { value: 'isPrime', viewValue: 'Prime' },
    { value: 'isFibonacci', viewValue: 'Fibonacci' },
  ];
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
    this.numberInput = this.form?.get('numberInput');
    this.formValueChange();

  }

  initForm(): void {
    this.form = this.fb.group({
      numberInput: [''],
      calculateOption: ['isPrime'],
    });
  }

 modeSelect(){
  if (this.option === 'isPrime') {
    this.numberInput.toFixed();
    const isPrime = (num: any) => {
      for (let i = 2; i < num; i++) if (num % i === 0) return false;
      return num > 1;
    };
    this.result = isPrime(this.numberInput?.toFixed());
    console.log('Prime', this.result);
  } else {
    const number = this.numberInput;
    let n1 = 0,
      n2 = 1,
      nextTerm;
    console.log('Fibonacci Series:');
    nextTerm = n1 + n2;
    let arrFibo = [];
    while (nextTerm <= number) {
      console.log(nextTerm);
      arrFibo.push(nextTerm);
      n1 = n2;
      n2 = nextTerm;
      nextTerm = n1 + n2;
    }
    this.result = arrFibo.some((data) => data === this.numberInput);
    console.log('fibo', this.result);
  }
 }
  formValueChange() {
    this.form?.get('calculateOption')?.valueChanges.subscribe((data) => {
      this.option = data;
      this.modeSelect();

    })
    this.form?.get('numberInput')?.valueChanges.subscribe((data) => {
      this.numberInput = data;
      if (data === null) {
        console.log('null');
      } else {
        this.modeSelect();
      }
    });
  }
}
