import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryAllComponent } from './gallery-all/gallery-all.component';
import { GalleryMentorshipComponent } from './gallery-mentorship/gallery-mentorship.component';
import { GalleryKianyagaComponent } from './gallery-kianyaga/gallery-kianyaga.component';
import { GalleryPeaceDinnerComponent } from './gallery-peace-dinner/gallery-peace-dinner.component';
import { ChebilatTownComponent } from './chebilat-town/chebilat-town.component';

@NgModule({
  declarations: [
    GalleryAllComponent,
    GalleryMentorshipComponent,
    GalleryKianyagaComponent,
    GalleryPeaceDinnerComponent,
    ChebilatTownComponent
  ],
  imports: [
    CommonModule,
    GalleryRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: []
})
export class GalleryModule { }
