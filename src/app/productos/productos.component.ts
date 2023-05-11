import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  constructor(private http: HttpClient) { }
  producto: any;
  ngOnInit() {
    this.getProductos();
  }

  getProductos() {
    this.http.get('https://localhost:7000/productos').subscribe(data => {
      this.producto = data;
      console.log(this.producto);
    });
  }
}
