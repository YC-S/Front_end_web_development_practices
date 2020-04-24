import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesComponent } from './components/courses/courses.component';
import { CoursesServiceService } from './services/courses-service.service';
import { SummaryPipePipe } from './pipes/summary-pipe.pipe';

@NgModule({
  declarations: [AppComponent, CoursesComponent, SummaryPipePipe],
  imports: [BrowserModule],
  providers: [CoursesServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
