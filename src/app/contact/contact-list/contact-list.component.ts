import { contact } from '../contact-model';
import { Data } from '../services/data';

import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddContactComponent } from '../add-contact/add-contact.component';
import { UtilityService } from '../services/utilityService';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  constructor(private data:Data,public dialog: MatDialog,private utilityService : UtilityService) { }
  contactList: contact[] = this.data.contactList;

  ngOnInit(): void {
    this.data.contactList = this.utilityService.getLocalStorageJson('contactlist')?this.utilityService.getLocalStorageJson('contactlist'):[];
    this.contactList = this.data.contactList;
  }

  statusChanged(contactData){
this.data.contactList[this.data.contactList.findIndex(item => item.id == contactData['id'])]['status'] = !contactData.status;
this.utilityService.setLocalStorageJson("contactlist",this.data.contactList);
  }

  deleteContact(contactData){
    this.data.contactList.splice(this.data.contactList.findIndex(item => item.id == contactData['id']),1);
    this.utilityService.setLocalStorageJson("contactlist",this.data.contactList);
  }

  openDialog(action,contactdata?): void {
    const dialogRef = this.dialog.open(AddContactComponent, {
      width: '350px',
      data: {contactDetails: contactdata?contactdata:{}, action: action}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed',result + "" + new Date());
      if(result){
        if(result['id'] != ""){
         this.data.contactList.splice(this.data.contactList.findIndex(item => item.id == result['id']),1,result);
        }else{
          result['id'] = result['id']?result['id']:new Date().getTime();
          this.data.contactList.push(result);
        }
      }
      this.utilityService.setLocalStorageJson("contactlist",this.data.contactList);
    });
  }

  

}
