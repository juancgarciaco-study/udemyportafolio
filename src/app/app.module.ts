import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Routes
import { app_routing } from './app.routes';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeMainComponent } from './components/home-main/home-main.component';
import { AboutComponent } from './components/about/about.component';
import { ProductoComponent } from './components/producto/producto.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeMainComponent,
    AboutComponent,
    ProductoComponent,
  ],
  imports: [
    BrowserModule,
    app_routing,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
