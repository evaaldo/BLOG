import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderComponent, AboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'blog';
}
