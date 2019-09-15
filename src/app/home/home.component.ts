import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  visible:boolean=this.service.visible;

  constructor(private service:MyserviceService) { }

  ngOnInit() {
  }



  close(){
    this.visible=false;
    this.service.visible=false;
  }
}
