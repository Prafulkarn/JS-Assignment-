// Assignment question number 1

let library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }
 ];
 
 function displayReadingStatus(library) 
 {
    for (let book of library) 
        {
    console.log(`Book Title: ${book.title}, Author: ${book.author}, Reading Status: ${book.readingStatus ? 'Already read' : 'Not yet read'}`);
    }
 }
 
 
 displayReadingStatus(library);
 
//  assignment 2
function delayCallback(callback) {
    setTimeout(callback, 2000);
}
function sayHello() {
    console.log("Hello! Callback executed after 2 seconds.");
}

delayCallback(sayHello);

// assignment 3
function validateInteger(number) {
    if (!Number.isInteger(number)) {
        throw new Error('Invalid input: Not an integer!');
    }
    
    return true;
}


try {
    validateInteger(42); // Valid integer
    console.log("Validation passed for integer.");
    
    validateInteger(3.14); 
} catch (error) {
    console.error(error.message); 
}

//assignment 4
