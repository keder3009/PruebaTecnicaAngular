import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationSlideComponent } from './publication-slide.component';

describe('PublicationSlideComponent', () => {
  let component: PublicationSlideComponent;
  let fixture: ComponentFixture<PublicationSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicationSlideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicationSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
