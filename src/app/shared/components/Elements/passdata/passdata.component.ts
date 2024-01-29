import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-passdata',
  templateUrl: './passdata.component.html',
  styleUrls: ['./passdata.component.css'],
})
export class PassdataComponent implements OnInit {
  @Input() hero: any;
  constructor() {}

  ngOnInit(): void {
    console.warn(this.hero);
  }
}
