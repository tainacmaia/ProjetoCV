import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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

  public btnDisabled = false;
  public formData!: ContactFormData;
  public formContact!: FormGroup;

  private buildForm(): void {
    this.formContact = new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      phone: new FormControl(),
      message: new FormControl("Desejo conversar com você para negócios")
    })
  };

  public submitForm(): void {
    // this.sendForm.emit(this.formContact)
    this.formData = this.formContact.getRawValue()
    console.log(this.formData)
    this.formContact.reset();
  };
}
