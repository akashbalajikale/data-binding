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
  constructor() { }

  ngOnInit(): void {
  }

}
