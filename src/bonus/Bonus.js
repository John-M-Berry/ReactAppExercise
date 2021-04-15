// 6a. Import the useState function at the top of the file
import { useState } from 'react';

// 6b. Create a function component using an arrow function expression called Bonus.
const Bonus = () => {

    // 6d. Inside the Bonus function component create a const variable called "letters" with the following array set as the value ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    // 6f. Using State as well as an onClick Event, have the letter A display in the h1 when the page loads and change to the next letter in the alphabet each time the button is pressed.

    const [letter, setLetter] = useState(0);

    // 6e. Inside the Bonus function component use the return keyword to have it return an h1 and a button (Set the text for the button to "NEXT LETTER")
    return (
        <div>
            <h1>{letters[letter]}</h1>
            <button onClick={() => letter < (letters.length - 1) ? setLetter(letter + 1) : setLetter(0)}>Next Letter</button>
        </div>
    )
}

// 6c. Add the export line at the bottom of the file
export default Bonus;










