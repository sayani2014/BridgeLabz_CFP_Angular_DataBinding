import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hello-world';
  imgUrl;
  url;

  
  /**
    * Method with no return type.
    * A lifecycle hook that is called after Angular has initialized all data-bound properties of a directive. 
    * Called only once in the lifecycle.
    */
  ngOnInit(): void {
    
    /**
     * Overriding the above value of title variable and assigning a new value to the same variable.
     */
    this.title = "Hello from BridgeLabz ";
    
    /**
     * Assigning value to the imgUrl variable to implement the concept of Property Binding.
     */
    this.imgUrl = "../assets/BL_logo_square_jpg.jpg";
    
    /**
     * Assigning value to the url variable to implement the concept of Event Binding.
     */
    this.url = "https://www.bridgelabz.com";
  }
  
  /**
    * Declaring the onClick($event) to implement the concept of Event Binding.
    * window.open : The window object represents an open window in a browser.
    *               The open() method opens a new browser window, or a new tab, depending on your browser settings and the parameter values.
    *               Using _blank, the url gets opened in a new tab.
    */
  onClick($event) {
    console.log("Save button is clicked!", $event);
    window.open(this.url, "_blank");
  }
}