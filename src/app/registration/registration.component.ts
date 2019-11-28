import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../department';
import { Key } from 'protractor';
import { RegDataList } from '../reg-data-list';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  modalRef: BsModalRef;
public department:Department[]=[
  {id:1,name:'help Desk'},
  {id:2,name:'Hr'},
  {id:3,name:'IT'},
  {id:4,name:'Payroll'}

]

dataEmpty:RegDataList[]=[];
dataList :RegDataList[]=[];
tableDatalist:RegDataList[]=[];
selectedDataList:RegDataList[]=[];
TableData:boolean=false;
  mySubscription: any;
constructor(private route : ActivatedRoute,
  private router : Router,private modalService: BsModalService) {}

  ngOnInit() {
    this.getData();
  }

  getData(){

    this.tableDatalist = JSON.parse(localStorage.getItem('RegisterUser'));
    if(this.tableDatalist!=null){
      this.TableData=true;
      this.dataList=this.tableDatalist;
    }  
  }
  saveRegistrationForm(regForm){
    this.tableDatalist =JSON.parse(localStorage.getItem('RegisterUser'));
    this.TableData=true;
    const regdata = regForm;
    console.log(regForm);
    this.dataList.push(regForm.value);
    localStorage.setItem('RegisterUser', JSON.stringify(this.dataList));
    this.getData();
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };


    
    
    this.mySubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Trick the Router into believing it's last link wasn't previously loaded
        this.router.navigated = false;
      }
    }); 
    
}
public dataitem:RegDataList[]=[]
openModal(selectedreg:RegDataList[],template: TemplateRef<any>){
  this.selectedDataList=selectedreg;
  console.log(typeof(this.selectedDataList));
  // this.dataList.forEach(e=>{
  //   this.dataitem.push(e);
  // })
  console.log(this.selectedDataList);
  // this.modalRef = this.modalService.show(selectedreg);
  this.modalRef=this.modalService.show(template);
  
}

hide(){
  this.selectedDataList=[];
}
} 
