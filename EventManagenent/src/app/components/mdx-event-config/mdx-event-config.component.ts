import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute,
         Params, NavigationEnd } from '@angular/router';
import { EventManagementService } from '../../services/event-management.service'
@Component({
  selector: 'app-mdx-event-config',
  templateUrl: './mdx-event-config.component.html',
  styleUrls: ['./mdx-event-config.component.sass']
})
export class MdxEventConfigComponent implements OnInit {

  eventsList:any = [];
  eventId: any
  constructor(private router: Router,
              private eventManagementService: EventManagementService) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }

  ngOnInit() {
    this.eventsList = this.eventManagementService.getEventsData();
  }

  DeleteEventModal(id) {
    this.eventId = id
  }

  DeleteEvent() {
    this.eventManagementService.deleteEvent(this.eventId)
  }
}
