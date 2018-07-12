import { Component } from '@angular/core';
import { ServiceService } from '../app/service/socket-service.service';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [ServiceService]
})
export class AppComponent {
  title = 'Website';
  constructor(private SocketService: ServiceService){
   // this.SocketService.initSocket();
    //this.onMessage();
  }
  
  onMessage(){
    this.SocketService.onMessage().subscribe( 
       (onmessage) =>{ 
        this.onMessage = onmessage; 
        console.log(this.onMessage);
      }
    );
  }
  
}
