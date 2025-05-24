import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  standalone: false,
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css'
})
export class ServerElementComponent {
  @Input() element!: { type: string; name: string; content: string; };
}
