import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { EventsService } from '../../app/services/events.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  public addEventForm: FormGroup;
  date = new FormControl(new Date());
  eventData: any = [];
  resourcesLoaded = true;

  constructor(private location: Location, private repository: EventsService) { }

  ngOnInit() {
    this.addEventForm = new FormGroup({
      event_name: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      event_date: new FormControl(new Date()),
      event_description: new FormControl('', [Validators.required, Validators.maxLength(300)]),
      event_location: new FormControl('', [Validators.required, Validators.maxLength(100)])
    });
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.addEventForm.controls[controlName].hasError(errorName);
  }

  public onCancel = () => {
    this.location.back();
  }

  public createEvent(addEventFormValue) {
    this.resourcesLoaded = false;
    if (this.addEventForm.valid) {
      this.executeEventCreation(addEventFormValue);
    }
  }

  private executeEventCreation(addEventFormValue) {
    let newEvent = {
      event_name: addEventFormValue.event_name,
      event_date: addEventFormValue.event_date,
      event_description: addEventFormValue.event_description,
      location: addEventFormValue.event_location
    };

    this.repository.add(newEvent)
      .subscribe(data => {
        this.resourcesLoaded = true;
        // this is temporary, until we create our dialogs
        this.eventData = data;
        this.location.back();
      },
        (error => {
          // temporary as well
          this.location.back();
        })
      );
  }

}
