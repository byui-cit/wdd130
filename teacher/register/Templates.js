export function participantTemplate(i) {
  return `<section class="participant${i}"><p>Participant ${i}</p>
      <div class="item">
        <label for="fname${i}"> First Name<span>*</span></label>
        <input id="fname${i}" type="text" name="fname" />
      </div>
      <div class="item activities">
      <label for="activity${i}">Activity #<span>*</span></label>
      <input id="activity${i}" type="text" name="activity" />
      </div>
      <div class="item">
        <label for="fee${i}">Fee ($)<span>*</span></label>
        <input id="fee${i}" type="number" name="fee" />
      </div>
      <div class="item">
        <label for="date${i}">Desired Date <span>*</span></label>
        <input id="date${i}" type="date" name="bdate" />
        
      </div>
      <div class="item">
        <p>Grade</p>
        <select id="grade${i}">
          <option selected value="" disabled selected></option>
          <option value="1">1st</option>
          <option value="2">2nd</option>
          <option value="3">3rd</option>
          <option value="4">4th</option>
          <option value="5">5th</option>
          <option value="6">6th</option>
          <option value="7">7th</option>
          <option value="8">8th</option>
          <option value="9">9th</option>
          <option value="10">10th</option>
          <option value="11">11th</option>
          <option value="12">12th</option>
        </select>
      </div></section>`;
}

export function successTemplate(info) {
  return `Thank You ${info.name} for registering. You have registered ${info.participants} participants and owe $ ${info.fees} in Fees.`;
}
