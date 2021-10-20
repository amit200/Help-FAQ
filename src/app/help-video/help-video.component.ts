import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help-video',
  templateUrl: './help-video.component.html',
  styleUrls: ['./help-video.component.scss']
})
export class HelpVideoComponent implements OnInit {
  panelOpenState = false;
  currentItem = '';
  items = [
    {
      tab: 'Installation',
    },
    {
      tab: 'Profile',
    },
    {
      tab: 'Profile',
    },
    {
      tab: 'Dashboard',
    },
    {
      tab: 'LRPA',
    },
    {
      tab: 'Miscellaneous',
    },
    {
      tab: 'Screen Time',
    },
    {
      tab: 'Troubleshooting',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
  openCity(tab: string) {
    this.currentItem = tab;
    console.log(this.currentItem)
  }
}

 
