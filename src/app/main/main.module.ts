import { MatIconModule } from '@angular/material/icon';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TutorialComponent } from './tutorial/tutorial.component';



@NgModule({
  declarations: [
    HeaderComponent,
    TutorialComponent,
    FooterComponent,
    ContactComponent,
    AboutComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent
  ]
})
export class MainModule { }
