import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PostInterface } from 'src/app/models/post.interface';
import { isLoadingSelector, postsSelector } from 'src/app/store/selectors';
import { AppStateInterface } from 'src/app/types/appState.interface';
import * as PostsActions from '../../store/action';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  isLoading$: Observable<boolean>;
  posts$: Observable<PostInterface[]>

  constructor(private store: Store<AppStateInterface>) {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.posts$ = this.store.pipe(select(postsSelector));
  }

  ngOnInit(): void {
    this.store.dispatch(PostsActions.getPosts());
  }

  addNewPost(title: string): any {
    this.store.dispatch(PostsActions.addPost({post: {id: '1', title: title}}));
  }

}
