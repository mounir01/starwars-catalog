import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CategoriesComponent } from './categories/categories.component';
import { StarshipsComponent } from './starships/starships.component';
import { StarshipCardComponent } from './starship-card/starship-card.component';
import { StarWarsService } from './star-wars.service';


@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    AboutComponent,
    CategoriesComponent,
    StarshipCardComponent,
    StarshipsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbDropdownModule,
    HttpClientModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
