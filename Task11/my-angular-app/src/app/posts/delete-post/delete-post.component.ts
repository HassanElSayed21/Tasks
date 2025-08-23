import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { PostsService } from '../services/posts.services';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-delete-post',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule],
  templateUrl: './delete-post.component.html',
  styleUrls: ['./delete-post.component.scss'],
  providers: [PostsService]
})
export class DeletePostComponent implements OnInit {
  postId: number = 0;
  post: any;

  constructor(
    private postsService: PostsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.postId = +params['id'];
      this.getPost(this.postId);
    });
  }

  getPost(id: number) {
    this.postsService.getPost(id).subscribe((data) => {
      this.post = data;
    });
  }

  confirmDelete() {
    this.postsService.deletePost(this.postId).subscribe(() => {
      alert('Post deleted successfully!');
      this.router.navigate(['/posts']); // go back after delete
    });
  }

  cancelDelete() {
    this.router.navigate(['/posts']); // go back without deleting
  }
}
