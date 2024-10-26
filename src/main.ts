// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));
// ./main.ts


import { platformBrowser } from '@angular/platform-browser';
import { AppModule } from './app/module/app.module';

platformBrowser().bootstrapModule(AppModule).catch(error => console.error('❌ error \n', error));
