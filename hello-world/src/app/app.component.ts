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
   * Specify userName and nameError as String Type.
   */

  userName: string = "";
  nameError: string = "";

  /**
   * ngOnInit : Method with no return type.
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
   * Purpose : Declaring the onClick($event) to implement the concept of Event Binding.
               window.open : The window object represents an open window in a browser.
               The open() method opens a new browser window, or a new tab, depending on your browser settings and the parameter values.
               Using _blank, the url gets opened in a new tab.
   * 
   * @param $event is the event itself.
                   For DOM events, $event is the MouseEvent, KeyboardEvent, or the event value of the type of whatever event you listen to.
   */

  onClick($event) {
    console.log("Save button is clicked!", $event);
    window.open(this.url, "_blank");
  }

  /**
   * Purpose : To check whether the user-input is valid or not.
               Match the user-input with the regex pattern mentiond.
               If a match occurs, then return nothing; else return error value.
   *           
   * @param $event is the event itself.
                   For DOM events, $event is the MouseEvent, KeyboardEvent, or the event value of the type of whatever event you listen to.
   
   * @returns If a match occurs, then return nothing; else return error value.
   */

  onInput($event) {
    console.log("Change Event Occurred!", $event.data);
    const nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
    if (nameRegex.test(this.userName)) {
      this.nameError = "";
      return;
    }
    this.nameError = "Name is incorrect!";
  }
}