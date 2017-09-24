import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Article } from '../article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input('data')
  item: Article;

  @Output()
  showTitleEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

}
