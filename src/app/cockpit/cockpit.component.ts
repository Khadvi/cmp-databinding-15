import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  standalone: false,
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css'
})
export class CockpitComponent {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() bluePrintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  // newServerName = '';
  // newServerContent = '';

  @ViewChild('serverContentInput') serverContentInput!: ElementRef;

  onAddServer(inputServerName: HTMLInputElement) {
    this.serverCreated.emit({serverName: inputServerName.value, serverContent: this.serverContentInput.nativeElement.value})
  }

  onAddBlueprint(inputServerName: HTMLInputElement) {
    this.bluePrintCreated.emit({serverName: inputServerName.value, serverContent: this.serverContentInput.nativeElement.value})
  }

}
