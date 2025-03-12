import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';

import { MovieListComponent } from './movie-list.component';
import { movieServiceSpy } from '../../../common/testing/movie.service.spy';
import { MovieService } from '../../services/movie.service';
import { BehaviorSubject, of } from 'rxjs';
import { moviesMock } from '../../../common/testing/movies';
import { MovieComponent } from '../movie/movie.component';
import { MaterialModule } from '../../../common/material.module';
import { MatSnackBar } from '@angular/material/snack-bar';

describe('MovieListComponent', () => {
  let component: MovieListComponent;
  let fixture: ComponentFixture<MovieListComponent>;
  let service: jasmine.SpyObj<MovieService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [MovieListComponent, MovieComponent],
      providers: [
        { provide: MovieService, useValue: movieServiceSpy },
        {
          provide: MatSnackBar,
          useValue: {
            open: () => {},
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(MovieListComponent);
    service = TestBed.inject(MovieService) as jasmine.SpyObj<MovieService>;

    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should retrieve the list of movies when movieService is called successfully', fakeAsync(() => {
    service.getMovies.and.returnValue(of(moviesMock));
    fixture.detectChanges();
    tick();

    expect(component.loading).toBeFalsy();
    expect(component.movies).toBe(moviesMock);
  }));

  it('should handle error when the api call fail', () => {
    const subject = new BehaviorSubject<any>(null);

    const consoleErrorSpy = spyOn(console, 'error');
    service.getMovies.and.returnValue(subject);

    fixture.detectChanges();
    subject.error('error');
    // tick();

    expect(component.loading).toBeFalsy();
    expect(consoleErrorSpy).toHaveBeenCalledWith('error');
  });
});
