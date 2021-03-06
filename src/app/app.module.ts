import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from "@angular/material";
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes} from "@angular/router";
 
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PlanetchoiceComponent } from './planetchoice/planetchoice.component';
import { ShipchoiceComponent } from './shipchoice/shipchoice.component';
import { SummaryComponent } from './summary/summary.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ResearchFormComponent } from './research-form/research-form.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { FooterComponent } from './footer/footer.component';
import { PlanetListComponent } from './planet-list/planet-list.component';

const appRoutes: Routes = [
  {path:"homepage", component:HomepageComponent},
  {path:"shipchoice", component:ShipchoiceComponent},
  {path:"planetchoice", component:PlanetchoiceComponent}
]



@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    PlanetchoiceComponent,
    ShipchoiceComponent,
    SummaryComponent,
    NavbarComponent,
    ResearchFormComponent,
    DatepickerComponent,
    FooterComponent,
    PlanetListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RouterModule.forRoot(
      appRoutes, 
      {enableTracing:true}
    )
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
