import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationNormalComponent } from './publication-normal.component';

describe('PublicationNormalComponent', () => {
  let component: PublicationNormalComponent;
  let fixture: ComponentFixture<PublicationNormalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicationNormalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicationNormalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
