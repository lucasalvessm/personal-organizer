import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieListComponent } from './movie-list.component';
import { movieServiceSpy } from '../../../common/testing/movie.service.spy';
import { MovieService } from '../../services/movie.service';
import { of } from 'rxjs';
import { moviesMock } from '../../../common/testing/movies';
import { MovieComponent } from '../movie/movie.component';
import { MaterialModule } from '../../../common/material.module';

describe('MovieListComponent', () => {
  let component: MovieListComponent;
  let fixture: ComponentFixture<MovieListComponent>;
  let service: jasmine.SpyObj<MovieService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [MovieListComponent, MovieComponent],
      providers: [{ provide: MovieService, useValue: movieServiceSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(MovieListComponent);
    service = TestBed.inject(MovieService) as jasmine.SpyObj<MovieService>;

    service.getMovies.and.returnValue(of(moviesMock));

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
