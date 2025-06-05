import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prod',
  templateUrl: './prod.component.html',
  styleUrls: ['./prod.component.scss']
})
export class ProdComponent implements OnInit {

  isLoggedIn = false;
  status = 'inactive';
  items = ['Angular', 'React', 'Vue'];
  isActive = false;

  toggleClass() {
    this.isActive = !this.isActive;
  }

  public productName : string = "Apple 16";
  public productId : number = 123;
  isProductAav !: boolean;
  color !:string;
  constructor() { }

  ngOnInit(): void {
    // this.isProductAav = Math.random() >= .5 ? true : false;
    this.setcolor()
  }

  setcolor(){
    let flag = Math.random()

    if(flag >= .7){
      this.color = "success"
    }else if(flag >= .5 && flag <= .7){
      this.color = "warning"
    }else{
      this.color = "error"
    }
  }

}
