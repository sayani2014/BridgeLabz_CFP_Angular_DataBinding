import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  /**
   * Declaring the title variable in string format (Typescript-way) and assigning value to it.
   */
  title: string = 'hello-world';

  ngOnInit(): void {
    /**
     * Overriding the above value of title variable and assigning a new value to the same variable.
     */
    this.title = "Hello from BridgeLabz";
  } 
}
