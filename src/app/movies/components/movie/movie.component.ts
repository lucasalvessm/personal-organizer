import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.scss',
})
export class MovieComponent {
  @Input() movie?: Movie;
  @Output() onMovieClick = new EventEmitter();

  selectMovie(): void {
    this.onMovieClick.emit(this.movie);
  }
}
