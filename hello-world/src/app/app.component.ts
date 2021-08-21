import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hello-world';
  imgUrl;

  ngOnInit(): void {
    this.title = "Hello from BridgeLabz ";
    this.imgUrl = "../assets/BL_logo_square_jpg.jpg";
  }
}
