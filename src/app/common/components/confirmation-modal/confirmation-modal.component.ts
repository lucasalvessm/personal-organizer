import { DialogRef } from '@angular/cdk/dialog';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface ConfirmationModalData {
  text: string;
  confirmText: string;
  cancelText: string;
}

@Component({
  selector: 'app-confirmation-modal',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './confirmation-modal.component.html',
  styleUrl: './confirmation-modal.component.scss',
})
export class ConfirmationModalComponent {
  data: ConfirmationModalData = inject(MAT_DIALOG_DATA);
  dialogRef = inject(MatDialogRef<ConfirmationModalComponent>);

  // public confirm(): void {
  //   this.dialogRef.close(true);
  // }

  // public cancel(): void {
  //   this.dialogRef.close(false);
  // }

  public doAction(action: 'cancel' | 'confirm'): void {
    this.dialogRef.close(action);
  }
}
