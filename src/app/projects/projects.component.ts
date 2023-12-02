import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Splide }from '@splidejs/splide';
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {
    ngOnInit(){
      new Splide('.splide').mount();
    }
    // Zmienna ViewProject jest początku ustawiona na null,
    // ponieważ jeszcze nie przypisano żadnego projektu do wyświetlenia.
    ViewProject: string | null = null;
    // Funkcja Pokażania Szczegołówych informacji o projekcie
    ViewOnProject(project: string): void {
      this.ViewProject = project;
    }
    // Funkcja Ukrycia Szczegołówych informacji o projekcie
    ViewOffProject(): void{
      this.ViewProject = null;
    }
}
