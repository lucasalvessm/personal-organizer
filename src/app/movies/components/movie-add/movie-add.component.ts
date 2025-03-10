import { Component, inject } from '@angular/core';

import { Movie } from '../../models/movie';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MovieService } from '../../services/movie.service-store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-add',

  templateUrl: './movie-add.component.html',
  styleUrl: './movie-add.component.scss',
})
export class MovieAddComponent {
  // movie: Movie = {
  //   image: 'httpsdfsdf',
  //   title: '',
  //   synopsis: '',
  //   genre: '',
  // };

  //import ReactiveFormsModule
  // image = new FormControl('', [Validators.required]);
  fb = inject(FormBuilder);
  form = this.fb.group({
    image: ['', [Validators.required]],
    title: ['', [Validators.required]],
    year: ['', [Validators.required, Validators.pattern('[0-9].*')]],
    score: ['', [Validators.required, Validators.pattern('[0-9].*')]],
    genre: [''],
    duration: [''],
    synopsis: [''],
  });
  movieService = inject(MovieService);
  router = inject(Router);

  save(): void {
    if (this.form.invalid) {
      return;
    }

    this.movieService
      .save({
        ...this.form.value,
      } as Movie)
      .subscribe((res) => {
        this.router.navigate(['']);
      });
  }

  back(): void {
    this.router.navigate(['']);
  }

  isFieldInvalid(control: AbstractControl): boolean {
    return !!control.invalid;
  }
}
