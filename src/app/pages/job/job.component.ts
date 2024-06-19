import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {

 jobs$!: Observable<any[]>;

  constructor(private userService: UserService,private _router : Router){}

  

  ngOnInit(): void {
  }

  onSubmit(jobForm: NgForm) {
    // console.log(jobForm.value); 
    

    if(jobForm.valid){

      alert("Job added successfullly");
      this._router.navigate(['/home']);
      this.userService.addJob(jobForm.value);
      jobForm.reset();
      
      console.log('Form Submitted', jobForm.value);
    }else{
      alert("Pls try again");
      console.log('Form is invalid');
    }
  }

  onReset(jobForm: NgForm) {
    jobForm.reset();
  }


   
}





