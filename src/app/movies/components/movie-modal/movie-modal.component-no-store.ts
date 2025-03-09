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

// @Component({
//   selector: 'app-movie-modal',
//   templateUrl: './movie-modal.component.html',
//   styleUrl: './movie-modal.component.scss',
// })
export class MovieModalComponent {
  movie: Movie = inject(MAT_DIALOG_DATA);
  dialog = inject(MatDialog);
  dialogRef = inject(MatDialogRef<ConfirmationModalComponent>);

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

        this.movieService.delete(this.movie).subscribe(() => {
          this.dialogRef.close();
        });
      });
  }
}
