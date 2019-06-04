import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GotNavBarComponent } from './got-nav-bar/got-nav-bar.component';
import { MemberListComponent } from './member-list/member-list.component';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { CardListItemComponent } from 'src/app/card-list-item/card-list-item.component';
import { CardListComponent } from 'src/app/card-list/card-list.component';
import { CardListService } from 'src/app/services/cardList.service';

import { LanguageSelectorComponent } from './language-selector/language-selector.component';
import { CollaboratorComponent } from './collaborator/collaborator.component';

import { AlertModule } from 'ngx-bootstrap';
import { AboutComponentComponent } from './about-component/about-component.component';
import { MainComponent } from './main/main.component';

import { FormsModule } from '@angular/forms';
import { FilterPipe} from './FilterPipe';
import { FooterComponent } from './footer/footer.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [AppComponent, GotNavBarComponent, MemberListComponent, FilterPipe,
    CardListItemComponent, CardListComponent, LanguageSelectorComponent, CollaboratorComponent, AboutComponentComponent, MainComponent, FooterComponent],

  imports: [BrowserModule, FormsModule, AppRoutingModule, MatInputModule, MatCardModule, HttpClientModule],
  bootstrap: [AppComponent],
  providers: [CardListService],
})
export class AppModule {}
