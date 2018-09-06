import {Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, NavigationEnd } from '@angular/router';
import { EventManagementService } from '../../services/event-management.service'


@Component({
  selector: 'app-view-event',
  templateUrl: './view-event.component.html',
  styleUrls: ['./view-event.component.css']
})
export class ViewEventComponent implements OnInit {

  event: any;
  id: any;

  constructor(private router: Router,
    private routers: ActivatedRoute,
    private eventManagementService: EventManagementService) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });

    this.id = this.routers.snapshot.paramMap.get('id')
  }

  ngOnInit() {
    this.event = {
      title: '',
      description: '',
    };

    let eventDetails = this.eventManagementService.getEventDetails(this.id);
    this.event.title = eventDetails.title;
    this.event.description = eventDetails.description;
  }


}
