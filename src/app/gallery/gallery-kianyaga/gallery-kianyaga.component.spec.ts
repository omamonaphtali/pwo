import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryKianyagaComponent } from './gallery-kianyaga.component';

describe('GalleryKianyagaComponent', () => {
  let component: GalleryKianyagaComponent;
  let fixture: ComponentFixture<GalleryKianyagaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryKianyagaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryKianyagaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
