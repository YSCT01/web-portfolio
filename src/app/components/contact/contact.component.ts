import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ProjectServices } from '../../Services/project.service';
import { Api } from '../../Services/Api';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [ProjectServices]
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  constructor(
    public formbuilder:FormBuilder,
    private _projectServices: ProjectServices
  ) {
      this.contactForm = this.formbuilder.group({
      'name':['',[Validators.required, Validators.minLength(3)]],
      'lastname':['',[Validators.required, Validators.minLength(3)]],
      'email':['', [Validators.required, Validators.email]],
      'message':['',[Validators.required, Validators.minLength(3)]]
})

   }

  ngOnInit(): void {
  }

  sendEmail(form){

    this._projectServices.sendEmail(form).subscribe(
      response=>{
        alert('Email Sent');
        this.contactForm.reset();
        console.log(response);
      },
      error=>{
        alert('Email Sent');
        this.contactForm.reset();
        console.log(<any>error);
      }
    );
  }

}
