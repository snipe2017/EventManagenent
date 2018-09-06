import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class EventManagementService {

  id: any = 10;
  eventsData: any = [{
    "id": 1,
    "title": "Event 1",
    "description": "This is a wider card with supporting text below as a natural lead-in to additional content."
  }, {
    "id": 2,
    "title": "Event 2",
    "description": "This is a wider card with supporting text below as a natural lead-in to additional content."
  }, {
    "id": 3,
    "title": "Event 3",
    "description": "This is a wider card with supporting text below as a natural lead-in to additional content."
  }, {
    "id": 4,
    "title": "Event 4",
    "description": "This is a wider card with supporting text below as a natural lead-in to additional content."
  }, {
    "id": 5,
    "title": "Event 5",
    "description": "This is a wider card with supporting text below as a natural lead-in to additional content."
  }, {
    "id": 6,
    "title": "Event 6",
    "description": "This is a wider card with supporting text below as a natural lead-in to additional content."
  }, {
    "id": 7,
    "title": "Event 7",
    "description": "This is a wider card with supporting text below as a natural lead-in to additional content."
  }, {
    "id": 8,
    "title": "Event 8",
    "description": "This is a wider card with supporting text below as a natural lead-in to additional content."
  }, {
    "id": 9,
    "title": "Event 9",
    "description": "This is a wider card with supporting text below as a natural lead-in to additional content."
  }, {
    "id": 10,
    "title": "Event 10",
    "description": "This is a wider card with supporting text below as a natural lead-in to additional content."
  }]

  constructor() { }

  getEventsData() {
    return this.eventsData;
  }

  getEventDetails(id) {
    for(let i=0;i< this.eventsData.length;i++) {
      if(this.eventsData[i].id == id) {
        return this.eventsData[i]
      }
    }
  }

  deleteEvent(id) {
    for(let i=0;i< this.eventsData.length;i++) {
      if(this.eventsData[i].id == id) {
         this.eventsData.splice(i, 1);
      }
    }
  }

  updateEvent(id,data) {
    for(let i=0;i< this.eventsData.length;i++) {
      if(this.eventsData[i].id == id) {
        this.eventsData[i].title = data.title;
        this.eventsData[i].description = data.description;
      }
    }
  }

  addEvent(data) {
    data['id'] = ++this.id;
    this.eventsData.push(data)
  }

}
