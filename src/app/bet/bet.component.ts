import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { Options } from 'src/app/options.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bet',
  templateUrl: './bet.component.html',
  styleUrls: ['./bet.component.css']
})
export class BetComponent implements OnInit {
  apikey:string="c70757fda2e975aa745ad94c07e9cd05";
  data:any;
  selected_obj:object;
  obj=[];
  options:Options[];
  op_list=[];
  bid:number;
  total_bid:number=0;
  credits:number=1000;
  bid_temp:number;
  // bid:number[]=[];
  
  constructor(
    private db:MyserviceService,
    private firestore:AngularFirestore,
    private router:Router,
    ) {

    this.getdata();

    //recieves the database from options[collection] and store it in a {op_list} array
    this.db.getoptions().subscribe(actionArray => {
      this.op_list = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as Options;
      })
      console.log("recieve data");
      this.compute_bid();
      this.credits-=this.total_bid;
      console.log("list:",this.op_list,this.total_bid);
    });

    ///////console log view
    console.log("list:",this.op_list)
    
    this.compute_bid()
   }

  ngOnInit() {

  }

  //get the data from tmdb api and store it ina a {data} array
  getdata(){
    fetch('https://api.themoviedb.org/3/trending/movie/day?api_key='+this.apikey)
    .then(response => response.json())
    .then(res => this.data=res.results);
  }

  //when option is selected in html page this fuction will be called
  select_op(movie_id:any,movie_pic:any){
    if(this.credits>=1){
      this.bid=parseInt(prompt("Enter your bid:"));
      this.bid_temp=this.total_bid;
      this.bid_temp=this.bid_temp+this.bid;
      // this.total_bid=this.total_bid+this.bid;
      // this.compute_bid()
      // this.credits=this.credits-this.total_bid;
      if(this.bid_temp<=1000){
        this.total_bid=this.total_bid+this.bid;
        
        // this.credits=1000-this.total_bid;
        console.log("typeof",typeof this.bid);
        this.selected_obj={mid: movie_id,pic: movie_pic,bid :this.bid};
        this.op_list.push(this.selected_obj);
        console.log("select_op_compute")
        // this.compute_bid();
        this.credits-=this.bid;

    
        console.log(this.total_bid,"bye");
        // this.obj={id: movie_id,pic: movie_pic};
        // this.selected_obj.extend(this.obj);

        console.log("Check this:",this.selected_obj);
      }
    }
    else{
      alert("Not Enough credits");
    }
  }

  //when the already selected option in seleceted option grid is clicked this function will be called
  deselect_op(id:any,movie_id:any,index:any,bid:number){
   this.op_list.splice(index, 1);
   this.firestore.doc('options/' + id).delete();
   this.compute_bid();
   this.credits=this.credits+bid;
   console.log("deselet:",id,movie_id,index)
  }

  save_op(){
    if(this.credits<=0){
      alert("You have negative credits | re-check and submit again")
    }
    else{
    this.db.updateoptions(this.op_list,this.credits);
    console.log("submit:",this.credits);
    // alert("Bet confirmed")
    this.db.visible=true;
    this.router.navigate(['home']);
    
    // window.location.reload();

    }
    // let op = Object.assign({},this.obj);
    // this.firestore.collection('options').add(op);
  }

  compute_bid(){
    this.total_bid=0;
    this.op_list.forEach(element => {
      this.total_bid=this.total_bid+element.bid;
      console.log("compute:",element.bid);
    });
  }


}
