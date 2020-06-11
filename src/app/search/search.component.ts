import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  searchInput: string = '';
  constructor(
    private searchService: SearchService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit() {}
  getUser() {
    this.searchService.getUserName(this.searchInput).subscribe(
      (response: any) => {
        if (response.length) {
          localStorage.setItem('usenName', response[0]['name']);
          this.router.navigate(['/posts', response[0]['id']]);
        } else {
          Swal.fire('Oops...', "We couldn't find the user!", 'error');
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
