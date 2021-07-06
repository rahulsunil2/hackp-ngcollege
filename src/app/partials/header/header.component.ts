import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit{
  headerName: string;
  opened = false;
  constructor(private activatedroute: ActivatedRoute) {
    this.headerName = '';
  }
  ngOnInit() {
      console.log(this.activatedroute.snapshot.params.myParam)
    this.activatedroute.data.subscribe((data) => {
      this.headerName = data.name;
      console.log(this.headerName);
    });
  }
  @Output() toggle = new EventEmitter();
  toggleSidenav(){
      this.toggle.emit(this.opened);
  }
}
