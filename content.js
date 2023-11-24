// // console.clear();

// let contentTitle;

// console.log(document.cookie);
// function dynamicClothingSection(ob) {
//   let boxDiv = document.createElement("div");
//   boxDiv.id = "box";

//   let boxLink = document.createElement("a");
//   // boxLink.href = '#'
//   boxLink.href = "/contentDetails.html?" + ob.id;
//   // console.log('link=>' + boxLink);

//   let imgTag = document.createElement("img");
//   // imgTag.id = 'image1'
//   // imgTag.id = ob.photos
//   imgTag.src = ob.preview;

//   let detailsDiv = document.createElement("div");
//   detailsDiv.id = "details";

//   let h3 = document.createElement("h3");
//   let h3Text = document.createTextNode(ob.name);
//   h3.appendChild(h3Text);

//   let h4 = document.createElement("h4");
//   let h4Text = document.createTextNode(ob.brand);
//   h4.appendChild(h4Text);

//   let h2 = document.createElement("h2");
//   let h2Text = document.createTextNode("rs  " + ob.price);
//   h2.appendChild(h2Text);

//   boxDiv.appendChild(boxLink);
//   boxLink.appendChild(imgTag);
//   boxLink.appendChild(detailsDiv);
//   detailsDiv.appendChild(h3);
//   detailsDiv.appendChild(h4);
//   detailsDiv.appendChild(h2);

//   return boxDiv;
// }

// //  TO SHOW THE RENDERED CODE IN CONSOLE
// // console.log(dynamicClothingSection());

// // console.log(boxDiv)

// let mainContainer = document.getElementById("mainContainer");
// let containerClothing = document.getElementById("containerClothing");
// let containerAccessories = document.getElementById("containerAccessories");
// // mainContainer.appendChild(dynamicClothingSection('hello world!!'))

// // BACKEND CALLING

// let httpRequest = new XMLHttpRequest();

// httpRequest.onreadystatechange = function() {
//   if (this.readyState === 4) {
//     if (this.status == 200) {
//       // console.log('call successful');
//       contentTitle = JSON.parse(this.responseText);
//       if (document.cookie.indexOf(",counter=") >= 0) {
//         var counter = document.cookie.split(",")[1].split("=")[1];
//         document.getElementById("badge").innerHTML = counter;
//       }
//       for (let i = 0; i < contentTitle.length; i++) {
//         if (contentTitle[i].isAccessory) {
//           console.log(contentTitle[i]);
//           containerAccessories.appendChild(
//             dynamicClothingSection(contentTitle[i])
//           );
//         } else {
//           console.log(contentTitle[i]);
//           containerClothing.appendChild(
//             dynamicClothingSection(contentTitle[i])
//           );
//         }
//       }
//     } else {
//       console.log("call failed!");
//     }
//   }
// };
// httpRequest.open(
//   "GET",
//   "https://5d76bf96515d1a0014085cf9.mockapi.io/product",
//   true
// );
// httpRequest.send();



// document.addEventListener('DOMContentLoaded', function () {
//     // Fetch data from books.json
//     fetch('books.json')
//         .then(response => response.json())
//         .then(data => {
//             // Process the data and display it in the HTML
//             displayBooks(data);
//         })
//         .catch(error => console.error('Error fetching data:', error));

//     // Function to display books in HTML
//     function displayBooks(books) {
//         const booksList = document.getElementById('books-list');

//         // Iterate through each book and create cards
//         books.forEach(book => {
//             const bookCard = document.createElement('div');
//             bookCard.classList.add('book-card');

//             const img = document.createElement('img');
//             img.src = book.cover_image;
//             img.alt = `${book.title} Cover`;

//             const contentDiv = document.createElement('div');
//             contentDiv.classList.add('book-card-content');

//             const title = document.createElement('div');
//             title.classList.add('book-card-title');
//             title.textContent = book.title;

//             const details = document.createElement('div');
//             details.classList.add('book-card-details');
//             details.innerHTML = `
//                 <p>Author: ${book.author}</p>
//                 <p>Category: ${book.category}</p>
//                 <p>Price: $${book.price}</p>
//                 <p>Description: ${book.description}</p>
//             `;

//             // Append elements to the book card
//             contentDiv.appendChild(title);
//             contentDiv.appendChild(details);
//             bookCard.appendChild(img);
//             bookCard.appendChild(contentDiv);

//             // Append the book card to the booksList container
//             booksList.appendChild(bookCard);

//              // Add click event listener to each book card
//              bookCard.addEventListener('click', function () {
//                 // Navigate to contentDetail.html with the book ID as a query parameter
//                 window.location.href = `contentDetails.html?id=${book.id}`;
//             });


//         });
//     }
// });

document.addEventListener('DOMContentLoaded', function () {
    // Fetch data from books.json
    fetch('books.json')
        .then(response => response.json())
        .then(data => {
            // Process the data and display it in the HTML
            displayBooks(data);
        })
        .catch(error => console.error('Error fetching data:', error));

    // Function to display books in HTML
    function displayBooks(books) {
        const booksList = document.getElementById('books-list');

        // Iterate through each book and create cards
        books.forEach(book => {
            const bookCard = document.createElement('div');
            bookCard.classList.add('book-card');

            const img = document.createElement('img');
            img.src = book.cover_image;
            img.alt = `${book.title} Cover`;

            const contentDiv = document.createElement('div');
            contentDiv.classList.add('book-card-content');

            const title = document.createElement('div');
            title.classList.add('book-card-title');
            title.textContent = book.title;

            const details = document.createElement('div');
            details.classList.add('book-card-details');
            details.innerHTML = `
                <p>Author: ${book.author}</p>
                <p>Category: ${book.category}</p>
                <p>Price: $${book.price}</p>
                <p>Description: ${book.description}</p>
            `;

            // Create a button element
            const button = document.createElement('button');
            button.textContent = 'ADD';

            // Append elements to the book card
            contentDiv.appendChild(title);
            contentDiv.appendChild(details);
            contentDiv.appendChild(button); // Append the button to the contentDiv
            bookCard.appendChild(img);
            bookCard.appendChild(contentDiv);

            // Append the book card to the booksList container
            booksList.appendChild(bookCard);

             // Add click event listener to each book card
             bookCard.addEventListener('click', function () {
                // Navigate to contentDetail.html with the book ID as a query parameter
                window.location.href = `contentDetails.html?id=${book.id}`;
                
            });
        });
    }
});
