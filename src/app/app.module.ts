import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeaderBellowComponent } from './header-bellow/header-bellow.component';
import { FoodComponent } from './food/food.component';
import { SettingsComponent } from './settings/settings.component';
import { StatusComponent } from './status/status.component';
import { HistoryComponent } from './history/history.component';
import { ActionsComponent } from './actions/actions.component';
import { ErrorComponent } from './error/error.component';
import { ActionFormComponent } from './action-form/action-form.component';
import { CardFormComponent } from './card-form/card-form.component';
import { FormComponent } from './form/form.component';
import { EditformComponent } from './editform/editform.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { HttpClientModule} from '@angular/common/http'
import { IsLoadingComponent } from './isLoading/isLoading.component';
import { DetailsComponent } from './isLoading/details/details.component';
import { DetailsFormComponent } from './form/details-form/details-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderBellowComponent,
    FoodComponent,
    SettingsComponent,
    StatusComponent,
    HistoryComponent,
    ActionsComponent,
    ErrorComponent,
    ActionFormComponent,
    CardFormComponent,
    FormComponent,
    EditformComponent,
    StatisticsComponent,
    IsLoadingComponent,
    DetailsComponent,
    DetailsFormComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
