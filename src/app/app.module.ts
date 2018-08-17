import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import {} from '@ang'
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryAllComponent } from './gallery-all/gallery-all.component';
import { GalleryMentorshipComponent } from './gallery-mentorship/gallery-mentorship.component';
import { GalleryKianyagaComponent } from './gallery-kianyaga/gallery-kianyaga.component';
import { GalleryPeaceDinnerComponent } from './gallery-peace-dinner/gallery-peace-dinner.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GalleryComponent,
    AboutComponent,
    ContactComponent,
    GalleryAllComponent,
    GalleryMentorshipComponent,
    GalleryKianyagaComponent,
    GalleryPeaceDinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
