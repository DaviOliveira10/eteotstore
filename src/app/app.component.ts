import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VisualizarComponent } from './visualizar/visualizar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, VisualizarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'eteotstore';
}
