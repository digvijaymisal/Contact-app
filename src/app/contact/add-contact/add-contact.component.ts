import {Component, forwardRef, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormBuilder, FormGroup, NG_VALUE_ACCESSOR, Validators} from '@angular/forms';
import { contact } from '../contact-model';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss'],
})
export class AddContactComponent implements OnInit {

  formGroup: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddContactComponent>,
    @Inject(MAT_DIALOG_DATA) public data: contact,public formBuilder: FormBuilder) {
      this.formGroup = this.formBuilder.group({
        first_name: [{value:"", disabled: this.data['action'] == 'View'}, Validators.required],
        last_name: [{value:"", disabled: this.data['action'] == 'View'}, Validators.required],
        email: [{value:"", disabled: this.data['action'] == 'View'}, [Validators.required,Validators.email]],
        mobile: [{value:"", disabled: this.data['action'] == 'View'}, [Validators.required,Validators.pattern("^[0-9]*$"),Validators.minLength(10),Validators.maxLength(10)]],
        status: [{value:false, disabled: this.data['action'] == 'View'}],
        id: [{value:"", disabled: this.data['action'] == 'View'}],
      });
    }


    ngOnInit(): void {
      // this.formGroup = this.formBuilder.group({
      //   // first_name: ['', Validators.required],
      //   // last_name: ['', Validators.required],
      //   // email: ['', Validators.required],
      //   // mobile: ['', Validators.required],
      //   // status: [''],
      //  status: [{value: this.data['action'] == "Add"? " " : this.data['contactDetails']['status'], disabled: this.data['action'] == 'View'}] ,
      //  id:[{value: this.data['action'] == "Add"? "" : this.data['contactDetails']['id'], disabled: this.data['action'] == 'View'}],
      //  first_name: [{value: this.data['action'] == "Add"? "" : this.data['contactDetails']['first_name'], disabled: this.data['action'] == 'View'}, Validators.required],
      //   last_name: [{value:this.data['action'] == "Add"? "" : this.data['contactDetails']['last_name'], disabled: this.data['action'] == 'View'}, Validators.required],
      //   email: [{value:this.data['action'] == "Add"? "" : this.data['contactDetails']['email'], disabled: this.data['action'] == 'View'}, [Validators.required,Validators.email]],
      //   mobile: [{value:this.data['action'] == "Add"? "" : this.data['contactDetails']['mobile'], disabled: this.data['action'] == 'View'}, [Validators.required,Validators.pattern("^[0-9]*$"),Validators.minLength(10),Validators.maxLength(10)]]
      // });

      if(this.data['action'] != 'Add'){
        this.formGroup.setValue(this.data['contactDetails']);
      }
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
