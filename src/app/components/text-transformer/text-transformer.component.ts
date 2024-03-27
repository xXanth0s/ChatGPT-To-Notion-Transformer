import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-text-transformer',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
  ],
  templateUrl: './text-transformer.component.html',
  styleUrl: './text-transformer.component.scss'
})
export class TextTransformerComponent {
    public readonly leftText =  new FormControl('');
    public readonly rightText =  new FormControl({value: '', disabled: true});
  showToast: boolean = false; // Zustand für die Anzeige der Toast-Nachricht

  constructor() {
    // Reagiere auf Änderungen des linken Textfelds
    this.leftText.valueChanges.subscribe(value => {
      if(value) {
        this.transformAndCopyText(value);
      }
    });
  }

  transformAndCopyText(inputText: string): void {
    debugger
    const transformedText = inputText.replace(/\\\(/g, '').replace(/\\\)/g, '');
    this.rightText.setValue(transformedText);
    this.copyTextToClipboard(transformedText);
  }

  copyTextToClipboard(text: string): void {
    navigator.clipboard.writeText(text).then(() => {
      this.showSuccessToast();
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  }

  showSuccessToast(): void {
    this.showToast = true;
    setTimeout(() => {
      this.showToast = false;
    }, 3000); // Blendet die Toast-Nachricht nach 3 Sekunden aus
  }

  // Diese Funktion wird ausgelöst, wenn der rechte Button gedrückt wird
  copyRightTextToClipboard(): void {
    const text = this.rightText.value;
    debugger
    if(text) {
      this.copyTextToClipboard(text);
    }

  }
}
