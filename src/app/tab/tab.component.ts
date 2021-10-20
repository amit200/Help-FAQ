import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {
  // @Input() item:string='';
  categoryTab: string='';

 constructor(){}
 changeSelected(event: any): void {
  // console.log(event.target.innerText);
  this.categoryTab = event.target.innerText;
  console.log(this.categoryTab)
 }
  ngOnInit(): void {
  }

}


