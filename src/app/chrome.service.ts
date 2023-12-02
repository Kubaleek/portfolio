import { Injectable } from '@angular/core';

// Deklaracja Obiektu Chrome
declare const chrome: any;

@Injectable({
  providedIn: 'root'
})
export class ChromeService {
  constructor() {
    chrome.runtime.onMessage.addListener(
      (_request: any, _sender: chrome.runtime.MessageSender, sendResponse: (response: any) => void) => {
        setTimeout(() => { // Timeout Wiadomości
          sendResponse({ message: 'Odpowiedź asynchroniczna' }); // Wysyła Wiadomość
        }, 1000);
      }
    );
  }
}
