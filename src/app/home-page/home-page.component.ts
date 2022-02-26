import { Component, OnInit } from '@angular/core';
import { BarberShopModel } from '../class/barber-shop-model';
import { NgserviceService } from '../services/ngservice.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  _barbershopList! : BarberShopModel[];

  keyword = 'name'

  //Pagination field
  currentSelectedPage: number = 0; //หน้าที่กำลังเปิด
  pageSize: number = 10; //ขนาดข้อมูลในหน้า
  totalPages!: number; //จำนวนหน้าทั้งหมดของข้อมูล
  indexpagingstart!: number; //index เริ่มต้นของหน้า
  pageIndexes: Array<number> = []; //ลำดับ index ของหน้า

  constructor(private _service : NgserviceService) { }

  ngOnInit(): void {

    this.getData();

  }

  getData() {
    this._service.fetchBarberShopList().subscribe(
      data => {
        console.log("respone recieved"),
        
        
        this._barbershopList = data.content;
        this.indexpagingstart = data.pageable.offset;
        this.totalPages = data.totalPages;

        console.log('content: ')
        console.log(this._barbershopList)
        console.log('totalPages: ' + this.totalPages)

        this.pageIndexes = [];
        console.log('init totalPages: ' + this.totalPages)
        for (let i = 0; i < this.totalPages; i++) {
          this.pageIndexes.push(i);
        }
        
      }
    )
  }

  

  onChangeSearch(val: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }
  
  

}
