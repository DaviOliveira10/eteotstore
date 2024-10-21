import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VisualizarComponent } from './visualizar/visualizar.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { DiretivasComponent } from './diretivas/diretivas.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, VisualizarComponent, DatabindingComponent, DiretivasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'eteotstore';
}
