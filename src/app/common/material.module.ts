import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  imports: [
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
  ],
  exports: [
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
  ],
})
export class MaterialModule {}
