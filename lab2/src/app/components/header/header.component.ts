import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() title: string = '';
  imageUrl : string | null = null
  constructor(){
    this.imageUrl = 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'
  }
}
