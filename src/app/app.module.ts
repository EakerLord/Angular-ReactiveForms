import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';
import { CuilComponent } from './cuilValidator/cuil.component';
import { EmailComponent } from './emailValidator/email.component';
import { AgeComponent } from './ageValidator/age.component';
import { BooleanComponent } from './booleanValidator/boolean.component';
import { DateComponent } from './dateValidator/date.component';
import { NameComponent } from './nameValidator/name.component';
import { SelectComponent } from './selectValidator/select.component';
import { PsswordComponent } from './passwordValidator/pssword.component';

@NgModule({
  declarations: [
    AppComponent,
    CuilComponent,
    EmailComponent,
    AgeComponent,
    BooleanComponent,
    DateComponent,
    NameComponent,
    SelectComponent,
    PsswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
