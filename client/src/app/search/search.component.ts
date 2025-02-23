import { Component, OnInit, Output,EventEmitter} from '@angular/core';
import {ProductService} from '../services/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})


export class SearchComponent implements OnInit {
  data: any=[];
  searchedString:string="";
  
  constructor(private pdService:ProductService) { }
  getprod(){
    this.pdService.getProduct().subscribe((data)=>{
      this.data = data
      console.log(data,"pxamachekl")
     
    })
  }
  transform(): any{     
    if(!this.data) {
        return  [];
    }
    this.pdService.searchString=this.searchedString.toLowerCase()
   this.pdService.searchResult = this.data.filter((x:any) =>x.name.toLowerCase().includes(this.searchedString.toLowerCase()) )
   console.log("xxx",this.pdService.searchResult )
 }

  ngOnInit(): void {
    this.getprod()
    
  }

}

