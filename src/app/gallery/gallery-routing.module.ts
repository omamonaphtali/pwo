import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GalleryComponent } from './gallery.component';
import { GalleryAllComponent } from './gallery-all/gallery-all.component';
import { GalleryMentorshipComponent } from './gallery-mentorship/gallery-mentorship.component';
import { GalleryKianyagaComponent } from './gallery-kianyaga/gallery-kianyaga.component';
import { GalleryPeaceDinnerComponent } from './gallery-peace-dinner/gallery-peace-dinner.component';
import { ChebilatTownComponent } from './chebilat-town/chebilat-town.component';

const galleryRoutes: Routes = [
  {path: 'gallery', component: GalleryComponent,
  children: [
    {path: 'all', component: GalleryAllComponent},
    {path: 'chebilat', component: ChebilatTownComponent},
    {path: 'kianyaga', component: GalleryKianyagaComponent},
    {path: 'mentorship', component: GalleryMentorshipComponent},
    {path: 'peace-dinner', component: GalleryPeaceDinnerComponent},
    {path: '', redirectTo: 'all', pathMatch: 'full'},
  ]},
];
@NgModule({
  imports: [
    RouterModule.forChild(galleryRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class GalleryRoutingModule { }