import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  jobs$!: Observable<any[]>;

  jobs: any[] = [];
  filteredJobs: any[] = [];
  selectedJobName: string = '';

  jobModel: any ={
    jobPostedBy: '',
    jobDescription: '',
    postedDate: '',
    companyName: '',
    jobName: ''
  }
  constructor(private jobService: UserService, private _router : Router) {}

 
  ngOnInit(): void {
    this.jobs$ = this.jobService.getAllJobs();
    this.jobs$.subscribe(data => {
      this.jobs = data;
      this.filteredJobs = data;
    })
    
  }
  onAddNewJob() {
    this._router.navigate(['/job']);
  }

  onDelete(deleteId: string) {
    const confirm = window.confirm("Are you sure you want to delete this job?");
    if(confirm){
     console.log("job data" ,deleteId);
     this.jobService.deleteJob(deleteId);
    }else{
      return;
    } 
   
  } 

  onUpdate(jobdata: any) {
    const confirm = window.confirm("Are you sure you want to edit this job?");
    if(confirm){
      this._router.navigate(['/job']);
      this.jobModel = jobdata;
      console.log("job data" ,this.jobModel);
      
    }else{
      return;
    }   
   
  }

  filterJobs() { 
    if (this.selectedJobName) {
      this.filteredJobs = this.jobs.filter(job => job.jobName === this.selectedJobName);
    } else {
      this.filteredJobs = this.jobs;
    }
  }

}
