import { SettingsService } from './settings.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';


import { AppComponent } from './app.component';
import { ExemplosPipesComponent } from './exemplos-pipes/exemplos-pipes.component';
import { CamelCasePipe } from './camel-case.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ExemplosPipesComponent,
    CamelCasePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    // SettingsService,
    // {
    //   provide: LOCALE_ID,
    //   deps: [SettingsService],
    //   useFactory: (settingsService) => settingsService.getLocale()
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
