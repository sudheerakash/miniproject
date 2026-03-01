import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './search.html',
  styleUrls: ['./search.css']
})
export class SearchComponent {

  blood = '';
  city = '';
  results: any[] = [];
  totalInCity = 0;

  search() {

    const donors = JSON.parse(localStorage.getItem('donorList') || '[]');

    // Total donors in that city
    this.totalInCity = donors.filter((d: any) =>
      d.city.toLowerCase() === this.city.toLowerCase()
    ).length;

    // Exact blood + city match
    this.results = donors.filter((d: any) =>
      d.blood === this.blood &&
      d.city.toLowerCase() === this.city.toLowerCase()
    );
  }
}
