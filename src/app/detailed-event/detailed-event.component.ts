import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detailed-event',
  templateUrl: './detailed-event.component.html',
  styleUrls: ['./detailed-event.component.css']
})
export class DetailedEventComponent implements OnInit {

  attendeeList = ["Solkhan, Sachin", "Chaudhari, Abhijeet","Glover, Ashley","Rackliffe, Justin"];

  constructor() { }

  ngOnInit() {
  }

  addToAttending(){
    this.attendeeList.push("Micek, Laura");
  }

}
