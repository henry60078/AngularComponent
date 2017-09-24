import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from './article';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  searchText = '123';

  clickedTitle: string;
  articles: Article[] = [];

  constructor(private http: HttpClient) {
    this.http.get<Article[]>('/api/articles.json')
      .subscribe(data => {
        console.log(data);
        this.articles = data;
      });
  }

  showArticleTitle($event) {
    console.log($event);
    this.clickedTitle = $event;
  }

  logContent(element) {
    console.log(element);
  }
}
