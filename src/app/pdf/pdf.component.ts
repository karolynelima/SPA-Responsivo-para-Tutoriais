// advanced-pdf-viewer.component.ts
import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

@Component({
  selector: 'app-pdf',
  standalone: true,
  imports: [CommonModule, NgxExtendedPdfViewerModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="pdf-container">
      <div class="pdf-header">
        <h3 class="pdf-title">{{ title }}</h3>
      </div>

      <ngx-extended-pdf-viewer
        [src]="pdfUrl"
        [height]="height"
        [useBrowserLocale]="true"
        [showToolbar]="true"
        [showSidebarButton]="false"
        [showFindButton]="false"
        [showPagingButtons]="true"
        [showZoomButtons]="false"
        [showPresentationModeButton]="true"
        [showOpenFileButton]="false"
        [showPrintButton]="true"
        [showDownloadButton]="true"
        [showBookmarkButton]="false"
        [showSecondaryToolbarButton]="true"
        [showRotateButton]="true"
        [showHandToolButton]="false"
        [showScrollingButton]="true"
        [showSpreadButton]="false"
        [showPropertiesButton]="true"
        [zoom]="'auto'"
        [filenameForDownload]="'tutorial_alvara_coletivo.pdf'"
        delayFirstView="1000"
        [backgroundColor]="'#ffffff'">
      </ngx-extended-pdf-viewer>
    </div>
  `,
  styles: [`
    .pdf-container {
      //max-width: 1200px;
      width: 100%;
      height: 90vh;
      margin: 30px auto;
      background-color: white;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      overflow: hidden;
    }

    .pdf-header {
      padding: 16px 20px;
      background-color: #f5f7ff;
      border-bottom: 1px solid #e0e0e0;
    }

    .pdf-title {
      font-size: 18px;
      margin: 0;
      color: #0a2e8a;
    }

    ::ng-deep .toolbar {
      background-color: #f5f7ff !important;
    }
  `]
})
export class PdfComponent {
  @Input() pdfUrl: string = 'assets/tutorial_alvara_coletivo.pdf';
  @Input() title: string = 'Tutorial de Alvará Coletivo';
  @Input() height: string = '90vh';
  @Input() downloadFilename: string = 'documento.pdf';
}
