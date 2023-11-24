import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-appart',
  templateUrl: './form-appart.component.html',
  styleUrls: ['./form-appart.component.css']
})
export class FormAppartComponent {

  id = 0;
  appartForm!: FormGroup
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.appartForm = new FormGroup({
      numAppart: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required, Validators.minLength(10)]),
    });
  }

  // form validation
  get numAppart() {return this.appartForm.get('numAppart');}
  get description() {return this.appartForm.get('description');}

  add() {
    //used to show the value of the form in JSON format
    console.log(JSON.stringify(this.appartForm.value));
  }
  
}
