import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  
   username:any;
   usernamedisplay: boolean = false; 
  
 
  constructor( private route: ActivatedRoute,
    private router: Router,) { }

  ngOnInit() {
    this.usernamedisplay  = false
    console.log(localStorage.getItem('data'));
    this.username = localStorage.getItem('data');
    console.log("++++++++++++++++++", this.username);
    console.log('amit', this.usernamedisplay);
    if(this.username!=''){
      this.usernamedisplay =  true;
    }
    //console.log("+++++++++++", this.username)
  }

  logout(){
    this.usernamedisplay 
    window.location.reload();
    debugger
    this.router.navigate(['/index']);
    localStorage.removeItem('data');
    this.username = localStorage.getItem('data');
    if(this.username=''){
      this.usernamedisplay =  false;
    }
    console.log('logout', this.usernamedisplay);
  }

}
