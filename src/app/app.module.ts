import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { MainComponent } from './main/main.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ProfilePageComponent } from './main/profile-page/profile-page.component';
import { ButtonComponent } from './button/button.component';
import { FeedComponent } from './main/feed/feed.component';
import { TweetComponent } from './main/tweet/tweet.component';
import { ListComponent } from './side-bar/list/list.component';
import { ListItemComponent } from './side-bar/list/list-item/list-item.component';
import { NewsItemComponent } from './side-bar/list/news-list/news-item/news-item.component';
import { NewsListComponent } from './side-bar/list/news-list/news-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    MainComponent,
    MenuBarComponent,
    SideBarComponent,
    ProfilePageComponent,
    ButtonComponent,
    FeedComponent,
    TweetComponent,
    ListComponent,
    ListItemComponent,
    NewsItemComponent,
    NewsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
