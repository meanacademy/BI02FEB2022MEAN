import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './about/about.component';
import { AuthModule } from './modules/auth/auth.module';
import { FormsModule } from '@angular/forms';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { StructuraldircComponent } from './structuraldirc/structuraldirc.component';
import { PipeComponent } from './components/pipe/pipe.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    DatabindingComponent,
    StructuraldircComponent,
    PipeComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
