import { Component, OnInit } from '@angular/core';
import { EventsService } from '../services/events.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-cards',
  templateUrl: './landing-cards.component.html',
  styleUrls: ['./landing-cards.component.css']
})

export class LandingCardsComponent implements OnInit {
  // instantiate posts to an empty array
  events: any = [];

  constructor(private eventsService: EventsService, private router: Router) { }

  ngOnInit() {
    // Retrieve posts from the API
    this.eventsService.getAllEvents().subscribe(events => {
      this.events = events;
    });
  }

  goToDetails() {
    this.router.navigateByUrl('/full');
  }

}
