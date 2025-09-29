import { Component, HostListener,  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { PdfComponent } from '../pdf/pdf.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    NgxExtendedPdfViewerModule,
    PdfComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  menuOpen = false

  showButton = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showButton = window.scrollY > 300; // mostra após 300px de rolagem
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  toggleMenu(){
    this.menuOpen = !this.menuOpen;
  }

  scrollToSection(event: Event, sectionId: string): void {
    event.preventDefault();    
    const element = document.getElementById(sectionId);

    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }

    
    if (window.innerWidth <= 768) {
      this.menuOpen = false;
    }
  }
}
