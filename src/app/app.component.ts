import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TextTransformerComponent } from './components/text-transformer/text-transformer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TextTransformerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'chatgptToNotion';
}
