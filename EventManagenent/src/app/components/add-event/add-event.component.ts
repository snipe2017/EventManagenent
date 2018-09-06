import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, NavigationEnd } from '@angular/router';
import { EventManagementService } from '../../services/event-management.service'

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  event: any;

  constructor(private router: Router,
    private routers: ActivatedRoute,
    private eventManagementService: EventManagementService) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }

  ngOnInit() {
    this.event = {
      title: '',
      description: '',
    };
  }

  // add event
  addEvent() {
    let data = {
      title: this.event.title,
      description: this.event.description
    }
    this.eventManagementService.addEvent(data)
    this.router.navigate(['/events'])
  }

}
