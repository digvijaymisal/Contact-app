import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactListComponent } from './contact-list.component';
import { MatDialog, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UtilityService } from '../services/utilityService';
import { FormBuilder } from '@angular/forms';
import { Data } from '../services/data';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ContactListComponent', () => {
  let component: ContactListComponent;
  let fixture: ComponentFixture<ContactListComponent>;
  const matDialogRefStub = {};
  const validContact = {
    first_name:"sam",
    last_name:"k",
    mobile:9090909090,
    email:"sam@g.com",
    status:false,
    id:"12"
  };
  let service;

  const mockDialogRef = {
    close: jasmine.createSpy('close')
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContactListComponent],
      imports: [MatDialogModule,BrowserAnimationsModule],
      providers: [
        FormBuilder,
        {
          provide: MatDialogRef,
          useValue: mockDialogRef
        },
        { provide: MAT_DIALOG_DATA, useValue: matDialogRefStub },
        MatDialog,
        Data,
        UtilityService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactListComponent);
    component = fixture.componentInstance;
    service = UtilityService;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('contact list should be empty at initial', () => {
    expect(component.contactList).toEqual([]);
  });

  it('should call openDialog method', () => {
    spyOn(component, 'openDialog');
    component.openDialog("View",validContact);
    expect(component.openDialog).toHaveBeenCalledTimes(1);
  });

  it('Dailog title ahould be View Contact', () => {
    const expected_header = "View Contact";
    component.openDialog("View",validContact);
    fixture.detectChanges();
    const popUpHeader = document.getElementsByTagName('h1')[0] as HTMLHeadElement;
    expect(popUpHeader.innerText).toEqual(expected_header);
  });

  it('Dailog title should be Edit Contact', () => {
    const expected_header = "Edit Contact";
    component.openDialog("Edit",validContact);
    fixture.detectChanges();
    const popUpHeader = document.getElementsByTagName('h1')[0] as HTMLHeadElement;
    expect(popUpHeader.innerText).toEqual(expected_header);
  });

  it('should call statusChanged method', () => {
    spyOn(component, 'statusChanged');
    component.statusChanged(validContact);
    expect(component.statusChanged).toHaveBeenCalledTimes(1);
  });

  it('should call statusChanged method', () => {
    spyOn(component, 'deleteContact');
    component.deleteContact(validContact);
    expect(component.deleteContact).toHaveBeenCalledTimes(1);
  });

});
