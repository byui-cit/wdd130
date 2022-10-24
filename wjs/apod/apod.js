const apod = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";

async function getApod(url) {
  const res = await fetch(url);
  const data = await res.json();
  // check to make sure we got a good response
  if (res.ok) {
    // success...make sure any previous error message is gone.
    hideError();
    return data;
  } else {
    // error...output the message returned by the server
    showError(data.msg);
    return false;
  }
}
async function getApodByDate() {
  // get the entered date
  const date = document.querySelector("#requestedDate");
  // make the request for the photo with the date
  const data = await getApod(apod + `&date=${date.value}`);
  //check to see if we got good results back
  if (data) {
    document.querySelector(".output").innerHTML = photoTemplate(data);
  }
}
function showError(msg) {
  //get the error element
  const errorElement = document.querySelector(".error");
  //set the content of the element to the msg
  errorElement.innerHTML = msg;
  // remove the hide class
  errorElement.classList.remove("hide");
}
function hideError() {
  //get the error element
  const errorElement = document.querySelector(".error");
  // clear out the content of the element
  errorElement.innerHTML = "";
  // add the hide class
  errorElement.classList.add("hide");
}

function photoTemplate(photo) {
  return `<section class="photo">
  <img src=${photo.url} alt="${photo.title}">
  <div><h2>${photo.title}</h2>
  <h3>${photo.date}</h3>
  <p>${photo.explanation}</p></div></section>`;
}
async function init() {
  // get today's image
  const photo = await getApod(apod);
  // display it
  document.querySelector(".output").innerHTML = photoTemplate(photo);
}

// add an event listener to the Get button.
document.querySelector("#getButton").addEventListener("click", getApodByDate);

init();
