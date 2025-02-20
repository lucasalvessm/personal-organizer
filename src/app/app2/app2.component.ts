import { Component } from '@angular/core';
import { HeaderComponent } from '../common/components/header/header.component';
import { FooterComponent } from '../common/components/footer/footer.component';
import { MoviesModule } from '../movies/movies.module';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-app2',
  imports: [HeaderComponent, FooterComponent, MoviesModule, RouterOutlet],
  standalone: true,
  templateUrl: './app2.component.html',
  styleUrl: './app2.component.scss',
})
export class App2Component {
  constructor() {}
}
