import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { EntryListComponent } from './entry-list/entry-list.component';

import routes from './routes';

import { SingleEntryComponent } from './single-entry/single-entry.component';
import { RetrieveJournalsService } from './retrieve-journals.service';

@NgModule({
  declarations: [
    AppComponent,
    EntryListComponent,
    SingleEntryComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgModule,
   RouterModule.forRoot(routes)
  ],
  providers: [RetrieveJournalsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
