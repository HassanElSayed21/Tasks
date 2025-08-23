import { Routes } from "@angular/router";
import { PostsListComponent } from "./posts/post-list/post-list.component";
import { AddPostComponent } from "./posts/add-post/add-post.component";
import { EditPostComponent } from "./posts/edit-post/edit-post.component";
import { DeletePostComponent } from "./posts/delete-post/delete-post.component";

export const routes: Routes = [
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
  { path: 'posts', component: PostsListComponent },
  { path: 'create', component: AddPostComponent },
  { path: 'update/:id', component: EditPostComponent },
  { path: 'delete/:id', component: DeletePostComponent },
];
