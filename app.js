console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

const searchButton = document.getElementById("submitSearch");
const searchInput = document.getElementById("searchWord");
const imgTag = document.querySelector("#imageContainer > img");
const feedbackP = document.getElementById("feedBack");
function displayResult() {
    fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=GvZ2K72ZzIrIZ0bWQk6QyGftYOPKVYCB&s=${searchInput.value}`
  )
    .then((result) => {
      return result.json();
    })
    .then((res) => {
      imgTag.src = res.data.images.original.url;
    })
    .catch((error) => {
      feedbackP.textContent = error.message;
    });
}
searchButton.addEventListener("click", displayResult);

