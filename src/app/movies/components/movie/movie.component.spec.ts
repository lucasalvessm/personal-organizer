import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieComponent } from './movie.component';
import { MaterialModule } from '../../../common/material.module';

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
});
