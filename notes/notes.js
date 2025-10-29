// Step 1: Load the saved note (if any) when the page loads

window.addEventListener ('load', () => {

    let savedNote = localStorage.getItem('note');

    if (savedNote) {

        document.getElementById('noteInput').value = savedNote;

    }

    // Add after Note Keeper example to customize title

    let fname = localStorage.getItem('fname');

    console.log(fname);

    if (fname) {

        document.querySelector('#fname').innerHTML = fname + "'s ";

    } else {

        let userInput = prompt("Please enter your first name:");

        if (userInput !== null) {

            localStorage.setItem('fname', userInput);

            fname = localStorage.getItem('fname');

            document.querySelector('#fname').innerHTML = fname + "'s ";

        } else {

        console.log("User cancelled the prompt.");

        }

    }

});

// Step 2: Save the note when "Save Note" button is clicked

document.querySelector('#saveBtn').addEventListener ('click', () => {

    let note = document.querySelector('#noteInput').value;

    localStorage.setItem('note', note);

    alert('Note saved!');

});

 

// Step 3: Clear the note from both input and localStorage when "Clear Note" button is clicked

document.querySelector('#clearBtn').addEventListener ('click', () => {

    document.querySelector('#noteInput').value = '';

    localStorage.removeItem('note');

    alert('Note cleared!');

});