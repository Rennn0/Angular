import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';

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
import { PopupComponent } from './selected/popup/popup.component';
import { ProgresscardComponent } from './progress-window/progresscard/progresscard.component';

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
    FilterPipe,
    PopupComponent,
    ProgresscardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCheckboxModule,
    MatProgressBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
