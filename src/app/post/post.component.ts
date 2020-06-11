import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  dataArray = [];
  username = '';
  constructor(
    private searchService: SearchService,
    private activatedRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params.id;
    this.username = localStorage.getItem('usenName');
    this.getAllPosts(id);
  }
  getAllPosts(id) {
    this.searchService.getUserPost(id).subscribe(
      (response: any) => {
        this.dataArray = response;
        console.log(this.dataArray);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
