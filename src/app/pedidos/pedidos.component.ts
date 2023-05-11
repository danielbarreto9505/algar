import { Component,EventEmitter,Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent {
  orden = {
    id: 0,
    numeroOrden: 0,
    cedula: '',
    direccion: '',
    total: 0
  };
  constructor(private http: HttpClient) { }
  @Output() ordenCreada = new EventEmitter<any>();

  onSubmit() {
    this.ordenCreada.emit(this.orden);
    this.orden = {
      id: 0,
      numeroOrden: 0,
      cedula: '',
      direccion: '',
      total: 0
    };
  }
  putpedido() {
    this.http.put('https://localhost:7000/orden/crear',this.orden).subscribe(data => {

    });
  }
}
