import { NgModule } from '@angular/core';
import { DetailsComponent } from './details/details.component';
import { Routes, RouterModule } from '@angular/router';
import { LandingCardsComponent } from './landing-cards/landing-cards.component';
import { AddEventComponent } from './add-event/add-event.component';
import { DetailedEventComponent } from './detailed-event/detailed-event.component';

const routes: Routes = [
    { path: '', component: LandingCardsComponent },
    { path: 'details', component: DetailsComponent },
    { path: 'add', component: AddEventComponent },
    { path: 'full', component: DetailedEventComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
