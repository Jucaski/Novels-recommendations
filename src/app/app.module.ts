import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChineseNovelsComponent } from './views/chinese-novels/chinese-novels.component';
import { BookCoverComponent } from './components/book-cover/book-cover.component';

@NgModule({
  declarations: [
    AppComponent,
    ChineseNovelsComponent,
    BookCoverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
