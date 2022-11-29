import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, pipe } from 'rxjs';
import { PostInterface } from '../models/post.interface';
import { postsSelector } from '../store/selectors';
import { AppStateInterface } from '../types/appState.interface';

@Component({
  selector: 'app-read-post',
  templateUrl: './read-post.component.html',
  styleUrls: ['./read-post.component.scss']
})
export class ReadPostComponent implements OnInit {
  posts$: Observable<PostInterface[]>
  constructor(private store: Store<AppStateInterface>) {
    this.posts$ = store.select(pipe(postsSelector));
  }

  ngOnInit(): void {
  }

}
