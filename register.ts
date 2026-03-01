import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';  // ✅ MUST



@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],   
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})
export class RegisterComponent {

  name = '';
  blood = '';
  city = '';
  phone = '';

  constructor(private router: Router) {}

  register() {
    const donors = JSON.parse(localStorage.getItem('donorList') || '[]');

    donors.push({
      name: this.name,
      blood: this.blood,
      city: this.city.toLowerCase(),
      phone: this.phone
    });

    localStorage.setItem('donorList', JSON.stringify(donors));

    alert("Registration Successful!");
    this.router.navigate(['/']);
  }
}


