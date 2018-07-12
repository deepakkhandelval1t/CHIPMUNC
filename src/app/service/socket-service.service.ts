import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private socket;
  public initSocket(): void {
    this.socket = io('http://localhost:4000');
    this.socket.on('connect', function (){
      console.log("Connected");
  });
}

public onMessage(): Observable<any> {
    return new Observable<any>(observer => {
        // this.socket.on('message', (data: any) => observer.next(data));
        this.socket.on('question',(data:any)=>observer.next(data));
    });
}
}

