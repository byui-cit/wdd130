import { participantTemplate, successTemplate } from "./Templates.js";

let participantCount = 1;

function addParticipant(e) {
  // increment our participant count
  participantCount++;
  // use the participant template we made to insert the HTML into the form right above the Add button.
  this.insertAdjacentHTML("beforeBegin", participantTemplate(participantCount));
}

function submitForm(e) {
  // keep the form from refreshing the page
  e.preventDefault();
  // check to make sure everything is valid
  // notice that since we attached the event handler to the form, here we can refer to the form with "this"
  if (this.checkValidity()) {
    // total up the Fees
    const feeTotal = totalFees();
    // get the name of the parent/guardian from the form input
    const adultName = document.querySelector("#adult_name").value;
    // alternate: const adultName = this.adult_name.value
    // build a simple info object.
    const info = {
      name: adultName,
      fees: feeTotal,
      participants: participantCount
    };
    // hide the form.
    this.style.display = "none";
    //output a message
    // "Thank you NAME for registering. You have registered N participants and owe $N in Fees."
    document.querySelector("#summary").innerHTML = successTemplate(info);
  }
}

function totalFees() {
  // the selector below lets us grab any element that has an id that begins with "fee"
  let feeElements = document.querySelectorAll("[id^=fee]");
  console.log(feeElements);
  // querySelectorAll returns a NodeList. It's like an Array, but not exactly the same. The line below is an easy way to convert something that is list-like to an actual Array so we can use all of the helpful Array methods...like reduce
  // The "..." is called the spread operator. It "spreads" apart the list, then the [] we wrapped it in inserts those list items into a new Array.
  feeElements = [...feeElements];
  // sum up all of the fees. Something like Array.reduce() could be very helpful here :) Or you could use a Array.forEach() as well.
  const total = feeElements.reduce(
    (total, item) => (total += parseInt(item.value)),
    0
  );
  // once you have your total make sure to return it!
  return total;
}

// add event listeners to the add button (click) and the form (submit)
document.querySelector("#add").addEventListener("click", addParticipant);
document.forms[0].addEventListener("submit", submitForm);
