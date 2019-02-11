import { HobbyService } from './hobby.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nama = 'Ashfin Ramadhandy E';
  alamat = 'Pisang Kipas 72';

  hari = Date.now();

  Hobb: any[];
  constructor(private hobbyServ:HobbyService){}

  ngOnInit(){
    this.Hobb = this.hobbyServ.getAshfin();
  }
}
