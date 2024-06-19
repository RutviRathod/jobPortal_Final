import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 // users$!: Observable<users>;
  constructor(private userService: UserService,private _router : Router) { }
  onSubmit(form: NgForm) {
    
    console.log(form.value);
    this.userService.addUser(form.value);
    this._router.navigate(['/home']);
  }
  ngOnInit(): void {
  }

}
