import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MarkdownService } from 'ngx-markdown'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private mdService: MarkdownService, private http: HttpClient) { }
  markdown: any;
  markdownRaw : any;
  async ngOnInit() {
     this.markdownRaw = await this.http.get('/assets/md/markdown-sample.md', 
      { responseType: 'text' }).toPromise();   
    this.markdown = this.mdService.parse(this.markdownRaw);
  }
}


