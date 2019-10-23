import { Component, OnInit, Injectable } from '@angular/core';
import { Students} from '../app/module/students';
import{KuepaService} from '../app/kuepa.service'
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  //obtebner registros

  formularioKuepa: Students = new Students();
  listStudents:Students[] = [];
  listLoadTable:Students[] = [];
  listCategory:Students[] = [];
  listSedes:Students[] = [];

  p: number = 1;
  colection:Students[] = [];
  constructor(private kuepaService: KuepaService, private client:HttpClientModule ) {

    this.obtenerRegistros();
   }

  ngOnInit() {
    this.obtenerRegistros();
  }

  obtenerRegistros() {
    this.kuepaService.obtenerRegistros().then(r => {
      this.listStudents = r['alumnos'];
      this.listLoadTable = this.listStudents;
      this.listCategory = r['categorias'];
      this.listSedes = r ['sedes'];
    });
  }

  getCategory(id){
    let categ = this.listCategory.find(x => x.id == id);

    return (typeof categ !== 'undefined' && categ != null) ?  categ.categoria : 'NO SE ENCONTRO LA CATEGORIA';
  }

  filterStudentByCategory(){
    let id = $('#filterCategory').val();
    this.listLoadTable =  (id != '0') ? this.listStudents.filter(x => x.categoria.includes(id)) : this.listStudents;
  }


  getSedes(id){
    let categ = this.listSedes.find(x => x.id == id);

    return (typeof categ !== 'undefined' && categ != null) ?  categ.sede : 'NO SE ENCONTRO LA CATEGORIA';
  }


  filterStudentBySedes(){
    let id = $('#filterSedes').val();
    this.listLoadTable =  (id != '0') ? this.listStudents.filter(x => x.sede.includes(id)) : this.listStudents;
  }

}
