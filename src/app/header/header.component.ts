import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  headerName: string;
  constructor(private activatedroute: ActivatedRoute) {
    this.headerName = '';
  }
  ngOnInit() {
    this.activatedroute.data.subscribe((data) => {
      this.headerName = data.name;
    });
  }
}
