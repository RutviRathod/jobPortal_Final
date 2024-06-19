import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, map } from 'rxjs';
import users from 'src/model/users.model';

@Injectable({ providedIn: 'root' })
export class UserService {

  constructor(private firestore: AngularFirestore) { }

  getJobs() {
    // GET
    return this.firestore.collection('Jobs').valueChanges();
  }

    getAllJobs(): Observable<any[]> {
    return this.firestore.collection('jobs').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as any;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  addJob(data: any) {
    // POST
    return this.firestore.collection('jobs').add({
    jobPostedBy: data.jobPostedBy,
    jobDescription: data.jobDescription, 
    postedDate: data.postedDate, 
    companyName: data.companyName, 
    jobName: data.jobName});
  }

  getJobById(id: string) {
    return this.firestore.collection('jobs').doc(id).snapshotChanges().pipe(
      map(action => {
        const data = action.payload.data() as any;
        const id = action.payload.id;
        return { id, ...data };
      })
    );
  }

  updateJob(id: string, job: any) {
    return this.firestore.collection('jobs').doc(id).update(job);
  }

  deleteJob(id: string) {
    return this.firestore.collection('jobs').doc(id).delete();
  }

  addUser(data: users) {
    // POST
    return this.firestore.collection('users').add({
     name: data.name,
      email: data.email,
      password: data.password });
  }
}

