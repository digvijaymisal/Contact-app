import { NgModule,CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactListComponent } from '../contact/contact-list/contact-list.component';
import { AddContactComponent } from '../contact/add-contact/add-contact.component';
import { SharedModule } from '../shared/shared.module';
import { Data } from './services/data';
import { UtilityService } from './services/utilityService';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ContactListComponent,AddContactComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    SharedModule,
    FormsModule
  ],
  providers:[Data,UtilityService],
  entryComponents: [
    AddContactComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ContactModule { }
