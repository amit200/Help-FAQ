import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})

export class FAQComponent implements OnInit {
  panelOpenState = false;
  currentItem = 'Installation';
  tabs = [
    {
      tab: 'Installation',
      name:'installation'
    },
    {
      tab: 'Profile',
      name:'profile'
    },
    {
      tab: 'Dashboard',
      name:'dashboard'
    },
    {
      tab: 'LRPA',
      name:'lrpa'
    },
    {
      tab: 'Miscellaneous',
      name:'Miscellaneous',
    },
    {
      tab: 'ScreenTime',
      name:'ScreenTime'
    },
    {
      tab: 'Troubleshooting',
      name:'troubleshooting'
    },
  ];

  constructor() {}

  ngOnInit(): void {}
  openCity(tab: any) {
    this.currentItem = tab;
    console.log(this.currentItem)
  }
}
