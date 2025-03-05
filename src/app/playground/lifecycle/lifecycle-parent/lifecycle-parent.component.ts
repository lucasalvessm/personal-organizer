import { Component } from '@angular/core';
import { LifecycleChildComponent } from '../lifecycle-child/lifecycle-child.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lifecycle-parent',
  standalone: true,
  imports: [LifecycleChildComponent, FormsModule],
  templateUrl: './lifecycle-parent.component.html',
  styleUrl: './lifecycle-parent.component.scss',
})
export class LifecycleParentComponent {
  frase = 'ola mundo';

  contentProjectionFrase = 'content projection';

  atualizaContentProjection() {
    this.contentProjectionFrase = this.frase;
  }
}
