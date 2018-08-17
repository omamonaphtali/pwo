import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryMentorshipComponent } from './gallery-mentorship.component';

describe('GalleryMentorshipComponent', () => {
  let component: GalleryMentorshipComponent;
  let fixture: ComponentFixture<GalleryMentorshipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryMentorshipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryMentorshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
