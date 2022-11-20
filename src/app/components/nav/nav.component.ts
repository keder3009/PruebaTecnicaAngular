import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PubService } from '../../services/pub.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  public data: FormGroup;
  public added: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private pubService: PubService
  ) {
    this.data = this.formBuilder.group({
      correo: [''],
    });
  }

  addEmail() {
    this.pubService.addEmail(this.data.value.correo).subscribe((resp: any) => {
      this.added = true;
      setTimeout(() => {
        this.added = false;
      }, 2000);
      console.log(resp);
    });
  }
}
