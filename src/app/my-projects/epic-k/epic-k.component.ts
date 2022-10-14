import { Component, OnInit } from '@angular/core';
import { Story } from 'src/app/story';


@Component({
  selector: 'app-epic-k',
  templateUrl: './epic-k.component.html',
  styleUrls: ['./epic-k.component.scss']
})
export class EpicKComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  arrayStorys!: Story[];

}
