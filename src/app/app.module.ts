import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchWindowComponent } from './search-window/search-window.component';
import { ProgressWindowComponent } from './progress-window/progress-window.component';
import { BlockedWindowComponent } from './blocked-window/blocked-window.component';
import { SelectedComponent } from './selected/selected.component';
import { MainComponent } from './main/main.component';
import { CountryComponent } from './search-window/country/country.component';
import { FilterPipe } from 'src/system/pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchWindowComponent,
    ProgressWindowComponent,
    BlockedWindowComponent,
    SelectedComponent,
    MainComponent,
    CountryComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatIconModule,
    MatInputModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
