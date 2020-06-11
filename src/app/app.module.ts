import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { SearchComponent } from './search/search.component';
import { SearchService } from './search.service';

@NgModule({
  declarations: [AppComponent, PostComponent, SearchComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [SearchService],
  bootstrap: [AppComponent],
})
export class AppModule {}
