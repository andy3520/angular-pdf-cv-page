import { Component, OnInit } from '@angular/core';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-pdf-view',
  templateUrl: './pdf-view.component.html',
  styleUrls: ['./pdf-view.component.scss']
})
export class PdfViewComponent implements OnInit {
  pdfSrc = 'assets/cv.pdf';
  pageVariable: number = 1;
  totalPage: number = 0;
  renderArrayPaginate: number[] = [];

  constructor() { }

  ngOnInit() {
  }

  callBackFn($event) {
    Promise.all([
      this.totalPage = $event.numPages
    ]).then(() => {
      for (let i = 1; i <= this.totalPage; i++) {
        this.renderArrayPaginate.push(i);
      }
    });
    // console.log($event);
  }

  savePDF() {
    saveAs("assets/cv.pdf", "cv.pdf");
  }
}
