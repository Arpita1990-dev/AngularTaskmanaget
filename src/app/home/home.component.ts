
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AppserviceService } from '../appservice.service';
import { FormGroup, FormControl, FormArray, NgForm } from '@angular/forms'



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  total = 0;
  url = 'https://nagia-app.tk/Home/Post/';
  
  isedit:boolean =false
  value:any;
  data:any;
  errorMessage: any;
  totalListData: any = [];
  courseid:string='';
  category:string='';

  coursename:string='';

  description:string='';
  response: any;
  selectedRow: boolean = false;

  constructor(private http: HttpClient,private appservice :AppserviceService ) {}

  ngOnInit() {
  this.fetchAlldata();
  }


  fetchAlldata(){

    this.appservice.getUsersFromData().subscribe({
      next: data => {
          this.totalListData = data;

          console.log(this.totalListData);
      },
      error: error => {
          this.errorMessage = error.message;
          console.error('There was an error!', error);
      }
  })
  }

  editing(event : any){


  }

  editRow(item:any){
    this.selectedRow = true;
    this.courseid = item.courseid;
    this.category = item.category;
    this.coursename = item.coursename;
    this.description = item.description;
  }

  save(event:any){


  }

  submit(value:any){
let datain = {
  "courseid": value.form.value.courseid,
  "coursename": value.form.value.coursename,
  "category": value.form.value.category,
  "description": value.form.value.description
}

if(this.selectedRow == true){
  this.appservice.editUsersFromData(datain,datain.courseid).subscribe({
    next: data => {
        this.response = data;
        this.selectedRow = false;
         alert('data edited successfully');
        this.fetchAlldata();
    },
    error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', error);
    }
  }
  );

}else{
  this.appservice.addUsersFromData(datain).subscribe({
    next: data => {
        this.response = data;

     alert('data added successfully');
    },
    error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', error);
    }
  }
  );
}

this.courseid = '';
this.category = '';
this.coursename = '';
this.description = '';
this.selectedRow = false;

 }
  

  deleteRow(item:any) {

    let datain = {
      "courseid": item.courseid,
      "coursename": item.coursename,
      "category": item.category,
      "description": item.description
    }

    var delBtn = confirm(' Do you want to delete ?');
    if (delBtn == true) {
      this.totalListData.splice(item, 1);

      this.appservice.deleteUsersFromData(datain,item.courseid).subscribe({
        next: data => {
            this.response = data;
        },
        error: error => {
            this.errorMessage = error.message;
            console.error('There was an error!', error);
        }
      }
      );
      
    }
  }


  addOrder() {
    const resp = this.http.post(this.url, this.totalListData).subscribe(
      (response) => {
        console.log(response);
      },
      (response) => {
        console.log(response);
      }
    );
  }
  
}

