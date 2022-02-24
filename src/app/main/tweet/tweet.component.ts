import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.scss']
})
export class TweetComponent implements OnInit {

  @Input() name?:string;
  @Input() user?:string;
  @Input() date?:string;
  @Input() text?:string;
  @Input() url?:string;
  @Input() description?:string;

  constructor() { }

  ngOnInit(): void {
  }

}
