import { Component, OnInit ,ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { log } from 'console';
import { Observable } from 'rxjs/internal/Observable';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {

  @ViewChild('f') form: NgForm;

 jobs$!: Observable<any[]>;

  constructor(private userService: UserService,private _router : Router, private route:ActivatedRoute){
    this.form = new NgForm([],[]);
  }

  

  ngOnInit(): void {
   const subscription = this.route.params.subscribe(params => {
      this.userService.getJobById(params['id']).subscribe(data => {
        if (data.id.length > 0) {
          console.log("job cdcsdcdata" ,data);
          this.form.form.patchValue({
            jobPostedBy: data.jobPostedBy,
            jobDescription: data.jobDescription,
            postedDate: data.postedDate,
            companyName: data.companyName,
            jobName: data.jobName
          });
        }
      })
      
    });
  }

  // this.route.queryParams.subscribe(params => {
      //   console.log("paramsssssssss",params);
      // })

  onSubmit(jobForm: NgForm) {
    
    

    if(jobForm.valid){

      if (this.route.snapshot.paramMap.get('id')) {
        // Route is job/:id, use updateJob service
        const id = this.route.snapshot.paramMap.get('id');
        if (id !== null) {
          alert("Job updated successfullly");
          this.userService.updateJob(id, jobForm.value);
          jobForm.reset();
          this._router.navigate(['/home']);
        }
        
      } else {
        // Route is not job/:id, use addJob service
      
      alert("Job added successfullly");
      this._router.navigate(['/home']);
      this.userService.addJob(jobForm.value);
      jobForm.reset();
      
      console.log('Form Submitted', jobForm.value);}
    }else{
      alert("Pls try again");
      console.log('Form is invalid');
    }
  }

  
  onReset(jobForm: NgForm) {
    jobForm.reset();
  }


   
}





