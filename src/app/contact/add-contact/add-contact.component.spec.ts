import { NO_ERRORS_SCHEMA } from '@angular/core';
import {
  inject,
  TestBed,
  getTestBed,
  async,
  fakeAsync,
  ComponentFixture
} from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from 'src/app/shared/shared.module';

import { AddContactComponent } from './add-contact.component';

let comp: AddContactComponent;
let fixture: ComponentFixture<AddContactComponent>;
const matDialogRefStub = {};
const mockDialogRef = {
  close: jasmine.createSpy('close')
};
const validContact = {
  first_name:"sam",
  last_name:"k",
  mobile:9090909090,
  email:"sam@g.com",
  status:false,
  id:"12"
};

const invalidContact = {
  first_name:"sam",
  last_name:"k",
  mobile:909090909078,
  email:"samg.com",
  status:false,
  id:""
};

describe('add-contact', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddContactComponent],
      imports: [MatDialogModule,BrowserModule, 
        FormsModule, ReactiveFormsModule,SharedModule,BrowserAnimationsModule],
      providers: [
        FormBuilder,
        {
          provide: MatDialogRef,
          useValue: mockDialogRef
        },
        { provide: MAT_DIALOG_DATA, useValue: matDialogRefStub },
        MatDialog,
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .overrideComponent(AddContactComponent, {
      set: {
        providers: [
        ]
      }
    })
    .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(AddContactComponent);
        comp = fixture.componentInstance;
      });
  }));
    
  function updateForm(first_name,last_name,email,mobile,status,id) {
    comp.formGroup.controls['first_name'].setValue(first_name);
    comp.formGroup.controls['last_name'].setValue(last_name);
    comp.formGroup.controls['email'].setValue(email);
    comp.formGroup.controls['mobile'].setValue(mobile);
    comp.formGroup.controls['status'].setValue(status);
    comp.formGroup.controls['id'].setValue(id);
  }

  it('should create', () => {
    expect(comp).toBeTruthy();
  });

  
  it('form value should update from form changes', fakeAsync(() => {
    updateForm(validContact.first_name, validContact.last_name,validContact.email,validContact.mobile,validContact.status,validContact.id);
    expect(comp.formGroup.value).toEqual(validContact);
  }));

  it('form isValid should be false when form is invalid', fakeAsync(() => {
    updateForm(invalidContact.first_name, invalidContact.last_name,invalidContact.email,invalidContact.mobile,invalidContact.status,invalidContact.id);
    expect(comp.formGroup.valid).toBeFalsy();
  }));

  it('form isValid should be true when form is valid', fakeAsync(() => {
    updateForm(validContact.first_name, validContact.last_name,validContact.email,validContact.mobile,validContact.status,validContact.id);
    expect(comp.formGroup.valid).toBeTruthy();
  }));

  it('should call init method', () => {
    spyOn(comp, 'ngOnInit');
    comp.ngOnInit();
    expect(comp.ngOnInit).toHaveBeenCalledTimes(1);
  });

});