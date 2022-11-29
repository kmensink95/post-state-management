import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from 'src/app/store/reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { PostsEffects } from 'src/app/store/effects';
import { EffectsModule } from '@ngrx/effects';
import { PostsService } from 'src/app/services/posts.service';



@NgModule({
  declarations: [PostsComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('posts', reducers),
    EffectsModule.forFeature([PostsEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
  ],
  providers: [PostsService],
  exports: [PostsComponent]
})
export class PostsModule { }
