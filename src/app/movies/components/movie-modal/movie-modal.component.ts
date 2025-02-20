import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Movie } from '../../models/movie';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-movie-modal',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatButtonModule, MatDividerModule],
  templateUrl: './movie-modal.component.html',
  styleUrl: './movie-modal.component.scss',
})
export class MovieModalComponent {
  movie: Movie = inject(MAT_DIALOG_DATA);
}
