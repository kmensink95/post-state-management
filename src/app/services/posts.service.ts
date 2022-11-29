import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { PostInterface } from '../models/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor() { }

  getPosts(): Observable<PostInterface[]> {
    const posts = [
      {id: '1', title: 'First Post'},
      {id: '2', title: 'Second Post'},
    ];
    return of(posts).pipe(delay(2000));
  }
}
