import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localeDE from '@angular/common/locales/de';
import localeDeExtra from '@angular/common/locales/extra/de';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
	LuxActionModule,
	LuxCommonModule,
	LuxComponentsConfigModule,
	LuxComponentsConfigParameters,
	LuxDirectivesModule,
	LuxErrorModule,
	LuxFormModule,
	LuxIconModule,
	LuxLayoutModule,
	LuxMarkdownModule,
	LuxPipesModule,
	LuxPopupsModule,
} from '@ihk-gfi/lux-components';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LicenseHintComponent } from './base/license-hint/license-hint.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { ProfilComponent } from './profil/profil.component';
import { RatingFormComponent } from './rating-form/rating-form.component';
import { RatingListComponent } from './rating-list/rating-list.component';

registerLocaleData(localeDE, localeDeExtra);

const luxComponentsConfig: LuxComponentsConfigParameters = {
    generateLuxTagIds: environment.generateLuxTagIds,
    viewConfiguration: {
        centeredView: true,
        centeredWidth: '1024px',
    },
};

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ErrorComponent,
        ProfilComponent,
        LicenseHintComponent,
        RatingListComponent,
        RatingFormComponent,
        RatingFormComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule,
        LuxDirectivesModule,
        LuxIconModule,
        LuxLayoutModule,
        LuxActionModule,
        LuxFormModule,
        LuxCommonModule,
        LuxPipesModule,
        LuxPopupsModule,
        LuxErrorModule,
        LuxMarkdownModule,
        LuxComponentsConfigModule.forRoot(luxComponentsConfig),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
