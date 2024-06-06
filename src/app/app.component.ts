import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private firestore: AngularFirestore) { }

  ngOnInit(): void {
    //GET
    //this.firestore.collection('blogs').valueChanges().subscribe(console.log)
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
  showNotification = false;
  handleButtonClick(value: boolean) {
    this.showNotification = !value
  }
}
