// 6a. Import the useState function at the top of the file
import { useState } from 'react';

// 6b. Create a function component using an arrow function expression called Bonus.
const Bonus = () => {

    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    // 6d. Inside the Bonus function component create a const variable called "letters" with the following array set as the value ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  }
  
  // 6c. Add the export line at the bottom of the file
  export default Bonus;
  
// 6e. Inside the Bonus function component use the return keyword to have it return an h1 and a button (Set the text for the button to "NEXT LETTER")
// 6f. Using State as well as an onClick Event, have the letter A display in the h1 when the page loads and change to the next letter in the alphabet each time the button is pressed.
// 6g. Open the App.js file and create the Bonus import below the Exercise import at the top of the file
// 6h. Inside the return for the App component, pass in the Bonus component below the Exercise component so it will render to the browser