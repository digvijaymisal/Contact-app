import { contact } from '../contact-model';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class Data {
  public contactList: contact[]=[];
}
