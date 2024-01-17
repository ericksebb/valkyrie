import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeadComponent } from './head/head.component';
import { SummaryComponent } from './summary/summary.component';
import { BodyComponent } from './body/body.component';
import { LegsComponent } from './legs/legs.component';
import { MiscComponent } from './misc/misc.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeadComponent, SummaryComponent, BodyComponent, LegsComponent, MiscComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'valkyrie';
}
