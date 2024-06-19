import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users$!: Observable<any>;
  constructor(private firestore: AngularFirestore) { }

  ngOnInit(): void {
    // GET
    //this.users$ = this.firestore.collection('users').valueChanges();
    // POST
    // this.firestore.collection('blogs').add({
    //   blogTitle: 'from app',
    //   publishedDate: new Date()
    // })
    //PUT
    // this.firestore.doc('blogs/GEzUmz52TqoYbEmCWoeT').update({
    //   blogTitle: 'from edited app again',
    // })
    //
    //this.firestore.doc('blogs/E6mlsMQYmLPRREiAUHhS').delete()


  }
  
  
}
