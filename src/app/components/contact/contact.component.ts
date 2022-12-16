import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactFormData } from './../../models/contact-form-data.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @Output() sendForm: EventEmitter<object> = new EventEmitter<object>();

  ngOnInit(): void {
    this.buildForm()
  }

  public formData!: ContactFormData;
  public formContact!: FormGroup;

  private buildForm(): void {
    this.formContact = new FormGroup({
      name: new FormControl("", [Validators.required, Validators.minLength(8)]),
      email: new FormControl("", [Validators.required, Validators.email]),
      phone: new FormControl("", [Validators.required, Validators.minLength(10), Validators.maxLength(11)]),
      message: new FormControl("", [Validators.required])
    })
  };

  public submitForm(): void {
    // this.sendForm.emit(this.formContact)
    this.formData = this.formContact.getRawValue()
    console.log(this.formData)
    alert('Formulário enviado com sucesso')
    this.formContact.reset();
  };
}
