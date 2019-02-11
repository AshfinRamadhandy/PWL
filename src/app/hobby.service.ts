import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HobbyService {

  constructor() { }
  getAshfin(){
    return [
      {id:1, hobby:"Bermain Bola", ket:"Pada sore hari"},
      {id:2, hobby:"Menonton Film", ket:"pada waktu senggang"},
      {id:3, hobby:"Mendengarkan Musik", ket:"pada waktu malam hari"}
    ]
  }
}
