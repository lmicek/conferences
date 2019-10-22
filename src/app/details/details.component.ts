import { Component, OnInit } from '@angular/core';
import { EventsService } from '../services/events.service';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-event-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnInit {

  events: any = [];

  constructor(private eventsService: EventsService) { }

  ngOnInit() {
    // Retrieve posts from the API
    this.eventsService.getAllEvents().subscribe(events => {
      this.events = events;
    });
  }

}