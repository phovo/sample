import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringUtilsService {

  constructor() { }

  static removeSpaceAtBeginAndEnd(str : string) : string {
    if (str)  return str.trim()
    return str
  }

  static removeSpace(str : string) : string {
    if (str)  return str.replace(" " , "")
    return str
  }

  convertStringToNumber(str : string) : number {
    if (str) return parseInt(str)
    return 0
  }
}
