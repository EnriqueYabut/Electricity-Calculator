import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
public PC: number;
public HOU: number; 
public CO: number;
public ED: number;
public ECPD: number;
public EC: number;
public CPD: number;
public KWH: number;
  constructor(public navCtrl: NavController) {


  
  }
    compute(){
  this.ED=this.PC* this.HOU/1000;
  this.ECPD=this.ED*this.CO;
  
  }

}