import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  homeIcon() {
    this.router.navigateByUrl('');
  }

  detailsIcon() {
    this.router.navigateByUrl('details');
  }

  addIcon() {
    this.router.navigateByUrl('add');
  }

}
