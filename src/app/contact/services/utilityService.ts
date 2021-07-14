import { Injectable } from '@angular/core';
@Injectable()
export class UtilityService {

  public setLocalStorageJson(key,json){
    localStorage.setItem(key,JSON.stringify(json));
  }

  public getLocalStorageJson(key){
    return JSON.parse(localStorage.getItem(key));
  }

}
