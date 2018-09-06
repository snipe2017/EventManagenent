import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute,
         Params, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-mdx-footer',
  templateUrl: './mdx-footer.component.html',
  styleUrls: ['./mdx-footer.component.sass']
})
export class MdxFooterComponent implements OnInit {

  constructor(private router: Router) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }

  ngOnInit() {
  }

}
