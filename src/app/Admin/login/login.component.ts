import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../shared/services/APILogin/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private LoginService:LoginService,private router: Router){}

  async login(data : any){
    const res:any = await this.LoginService.adminloign(data.value);
    //console.log(res)
    if(res.message=="Successful login"){
      localStorage.setItem('TCRG2024',res?.jwt)
      this.router.navigate(['/admin']);
    }
    else{
      alert("Username or password incorrect")
    }
  }
  
}
