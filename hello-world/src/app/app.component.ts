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
  title = 'hello-world';
  imgUrl;
  
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
  }
}
