import { Component, inject, OnInit } from '@angular/core';

import { Movie } from '../../models/movie.model';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { MovieService } from '../../services/movie.service-store';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { createMovie } from '../../store/movie.actions';
import { saveMovieLoadingSelect } from '../../store/movie.selectors';

@Component({
  selector: 'app-movie-add',

  templateUrl: './movie-add.component.html',
  styleUrl: './movie-add.component.scss',
})
export class MovieAddComponent {
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
  store = inject(Store);
  loading$ = this.store.select(saveMovieLoadingSelect);

  save(): void {
    if (this.form.invalid) {
      return;
    }

    this.store.dispatch(createMovie({ movie: this.form.value as Movie }));

    // this.movieService
    //   .save({
    //     ...this.form.value,
    //   } as Movie)
    //   .subscribe((res) => {
    //     this.router.navigate(['']);
    //   });
  }

  back(): void {
    this.router.navigate(['']);
  }

  isFieldInvalid(control: AbstractControl): boolean {
    return !!control.invalid;
  }
}
