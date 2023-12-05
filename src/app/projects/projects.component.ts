import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { NgxSplideModule } from 'ngx-splide';
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, NgxSplideModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent{
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
