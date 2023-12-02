import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgxSplideModule } from 'ngx-splide';
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, NgxSplideModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {
    ngOnInit(): void {
      
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
