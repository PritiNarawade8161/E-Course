import { Injectable } from '@angular/core';
import { Client, init } from 'filestack-js';

@Injectable({
  providedIn: 'root'
})
export class FilestackService {
  client: Client;
  constructor() {
    this.client = init('AyxwpIIJwTYS7tIYCb2Arz');
    
  }
}
