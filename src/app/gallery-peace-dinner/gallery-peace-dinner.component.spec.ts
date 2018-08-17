import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryPeaceDinnerComponent } from './gallery-peace-dinner.component';

describe('GalleryPeaceDinnerComponent', () => {
  let component: GalleryPeaceDinnerComponent;
  let fixture: ComponentFixture<GalleryPeaceDinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryPeaceDinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryPeaceDinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
