import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppserviceService {
  path: string= 'http://localhost:3000/data';

  constructor(private svc: HttpClient) { }


  getUsersFromData(): Observable<any> {
   // return this.upersons;

   return this.svc.get<any>(this.path);
  }


  addUsersFromData(data:any): Observable<any> {
    // return this.upersons;
 let path = 'http://localhost:3000/createui';
    return this.svc.post<any>(path,data);
   }


   editUsersFromData(data:any,id:any): Observable<any> {
    // return this.upersons;
 let path = `http://localhost:3000/update/${id}`;
    return this.svc.put<any>(path,data);
   }

   deleteUsersFromData(data:any,id:any): Observable<any> {
    // return this.upersons;
 let path = `http://localhost:3000/delete/${id}`;
    return this.svc.delete<any>(path,data);
   }


  // addUser(user: User) {
  //   user.id = this.upersons.length + 1;
  //   this.upersons.push(user);

  // }
  // updateUser(user: User) {
  //   const index = this.upersons.findIndex(u => user.id === u.id);
  //   this.upersons[index] = user;
  // }
  // deleteUser(user: User) {
  //   this.upersons.splice(this.upersons.indexOf(user), 1);
  // }
}


