import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute,
         Params, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-mdx-header',
  templateUrl: './mdx-header.component.html',
  styleUrls: ['./mdx-header.component.css']
})
export class MdxHeaderComponent implements OnInit {

  constructor(private router: Router) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }

  ngOnInit() { }
}
