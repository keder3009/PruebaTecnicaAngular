import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { PubService } from '../services/pub.service';
import { NgToastService } from 'ng-angular-popup';
@Component({
  selector: 'app-muro',
  templateUrl: './muro.component.html',
  styleUrls: ['./muro.component.scss'],
})
export class MuroComponent implements OnInit {
  public publication: FormGroup;
  public pubs:any = [];
  public showButton: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private pubService: PubService,
    private toastr: NgToastService
  ) {
    this.publication = this.formBuilder.group({
      titulo: [''],
      texto: [''],
      tipo: ['normal'],
      tags: this.formBuilder.array([this.formBuilder.control('')]),
      images: this.formBuilder.array([this.formBuilder.control('')]),
    });
  }

  get images() {
    return this.publication.get('images') as FormArray;
  }

  get tags() {
    return this.publication.get('tags') as FormArray;
  }

  ngOnInit(): void {
    this.getPublication();
  }

  addImages() {
    this.images.push(this.formBuilder.control(''));
  }

  addTag() {
    this.tags.push(this.formBuilder.control(''));
  }

  showButtonAction(){
    this.showButton = this.publication.value.tipo == 'normal' ? false : true;
  }

  getPublication(){
    this.pubService.getPublications().subscribe((resp: any) =>{
      this.pubs = resp
    })
  }

  addPublication(){
    this.pubService.addPublications(this.publication.value).subscribe((resp: any) =>{
      this.publication.reset();
      console.log(resp.message);
      
      this.toast(resp.message, true);
      this.getPublication();
    })
  }

  toast(mensaje:string, status:boolean) {
    status != true ? this.toastr.error({detail: 'Error', summary: mensaje, duration: 5000}) : this.toastr.success({detail: 'Success', summary: mensaje, duration: 5000});
  }


}
