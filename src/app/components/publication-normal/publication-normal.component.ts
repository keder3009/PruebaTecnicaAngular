import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-publication-normal',
  templateUrl: './publication-normal.component.html',
  styleUrls: ['./publication-normal.component.scss']
})
export class PublicationNormalComponent {
  @Input() publication: any;
}
