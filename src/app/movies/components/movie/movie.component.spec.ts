import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieComponent } from './movie.component';
import { MaterialModule } from '../../../common/material.module';
import { moviesMock } from '../../../common/testing/movies';

describe('MovieComponent', () => {
  let component: MovieComponent;
  let fixture: ComponentFixture<MovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [MovieComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('when no movie is provided', () => {
    it('should render the 404 element when no movie is provided', () => {
      const notFoundElement: HTMLElement =
        fixture.nativeElement.querySelector('p.not-found');

      expect(notFoundElement).toBeDefined();
    });

    it("the 404 element should have the text '404 not found'", () => {
      const notFoundElement: HTMLElement =
        fixture.nativeElement.querySelector('p.not-found');

      expect(notFoundElement.textContent).toBe('404 not found');
    });
  });

  describe('when movie is provided', () => {
    beforeEach(() => {
      component.movie = moviesMock[0];
      fixture.detectChanges();
    });

    it('should not render the 404 element when movie is provided', () => {
      const notFoundElement: HTMLElement =
        fixture.nativeElement.querySelector('p.not-found');

      expect(notFoundElement).toBeNull();
    });

    it('should render the movie details', () => {
      const movieInfoElement: HTMLElement =
        fixture.nativeElement.querySelector('div.movie-info');
      console.log(movieInfoElement);
      expect(movieInfoElement).toBeDefined();
    });

    it('should emit an event when movie is clicked', () => {
      const movieElement: HTMLElement =
        fixture.nativeElement.querySelector('div.movie-info');

      const spyOnMovieClick = spyOn(component.onMovieClick, 'emit');

      movieElement.click();
      expect(spyOnMovieClick).toHaveBeenCalled();
    });
  });
});
