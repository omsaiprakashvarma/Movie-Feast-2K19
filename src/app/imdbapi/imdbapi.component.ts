import { Component, OnInit, IterableDiffers } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-imdbapi',
  templateUrl: './imdbapi.component.html',
  styleUrls: ['./imdbapi.component.css']
})
export class ImdbapiComponent implements OnInit {
  configu:string;
  apikey:string="c70757fda2e975aa745ad94c07e9cd05";
  data=[
    {title: 'Batman'},
    {title: 'pokemon'},
    {poster_path: 'dummy'}
  ]
  image_urls=[]

  constructor(private myservice:MyserviceService) { }

  ngOnInit() {
    fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=c70757fda2e975aa745ad94c07e9cd05')
    .then(response => console.log(response))
    // fetch('https://api.themoviedb.org/3/configuration?api_key=c70757fda2e975aa745ad94c07e9cd05')
    // .then(response => response.json())
    // .then(res=> this.data=res.Search);

    // fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=c70757fda2e975aa745ad94c07e9cd05')
    // .then(response => response.json())
    // .then(res => this.data=res.results);
    this.getdata();
    console.log(this.image_urls,"Hello");
    console.log(this.data,"hey");
  }

  //////////////////////////////////////////////////////////// API request functions//////////////////////////////////////////////////////////////////
  getdata(){
    fetch('https://api.themoviedb.org/3/trending/movie/day?api_key='+this.apikey)
    .then(response => response.json())
    .then(res => this.data=res.results);
  }

  // getimagesurls(){
  //   let iteration=0;
  //   for (const title of this.data) {
      
  //     this.image_urls[iteration]=this.data[iteration].poster_path;

  //   }
  // }


  

}
