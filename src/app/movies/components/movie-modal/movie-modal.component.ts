import { Component, inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { Movie } from '../../models/movie';

import {
  ConfirmationModalComponent,
  ConfirmationModalData,
} from '../../../common/components/confirmation-modal/confirmation-modal.component';
import { MovieService } from '../../services/movie.service';
import { Store } from '@ngrx/store';
import { deleteMovie } from '../../store/movie.actions';

@Component({
  selector: 'app-movie-modal',
  templateUrl: './movie-modal.component.html',
  styleUrl: './movie-modal.component.scss',
})
export class MovieModalComponent {
  movie: Movie = inject(MAT_DIALOG_DATA);
  dialog = inject(MatDialog);
  dialogRef = inject(MatDialogRef<ConfirmationModalComponent>);
  store = inject(Store);

  constructor(private movieService: MovieService) {}

  public edit(): void {
    console.log('edit');
  }

  public delete(): void {
    this.dialog
      .open(ConfirmationModalComponent, {
        data: {
          text: 'Deseja Excluir?',
          confirmText: 'Sim',
          cancelText: 'Não',
        } as ConfirmationModalData,
      })
      .afterClosed()
      .subscribe((result) => {
        if (!result || result === 'cancel') {
          return;
        }

        this.store.dispatch(deleteMovie({ movie: this.movie }));
        this.dialogRef.close();
      });
  }
}
