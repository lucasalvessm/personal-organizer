import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieModalComponent } from './movie-modal.component';
import { movieServiceSpy } from '../../../common/testing/movie.service.spy';
import { MovieService } from '../../services/movie.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { matDialogRefProvider } from '../../../common/testing/shared.providers';
import { MaterialModule } from '../../../common/material.module';

describe('MovieModalComponent', () => {
  let component: MovieModalComponent;
  let fixture: ComponentFixture<MovieModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [MovieModalComponent],
      providers: [
        { provide: MovieService, useValue: movieServiceSpy },
        {
          provide: MAT_DIALOG_DATA,
          useValue: {},
        },
        matDialogRefProvider,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(MovieModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
