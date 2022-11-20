import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-publication-slide',
  templateUrl: './publication-slide.component.html',
  styleUrls: ['./publication-slide.component.scss']
})
export class PublicationSlideComponent {
  @Input() publication: any;
}
