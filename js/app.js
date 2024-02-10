const result = document.querySelector("#result"),
  resultYear = document.querySelector("#year-result"),
  resultMonth = document.querySelector("#month-result"),
  resultDay = document.querySelector("#day-result"),
  dayVisible = document.querySelector(".visible-day"),
  monthVisible = document.querySelector(".visible-month"),
  yearVisible = document.querySelector(".visible-year"),
  day = document.querySelector("#day"),
  month = document.querySelector("#month"),
  year = document.querySelector("#year"),
  buttonCalculate = document.querySelector(".btn-cal");


buttonCalculate.addEventListener("click", calculateAge);


day.addEventListener("input", (e) => {
  if (+day.value > 31 || +day.value <= 0) {
    dayVisible.classList.remove("day-visible");
    dayVisible.classList.add("color-red");

    clearDataAge();
  }
  else {
    dayVisible.classList.remove("color-red");
    dayVisible.classList.add("day-visible");
  }
});


month.addEventListener("input", (e) => {
  if (+month.value > 12 || +month.value <= 0) {
    monthVisible.classList.remove("visible-month");
    monthVisible.classList.add("color-red");
    clearDataAge();
  }
  else {
    monthVisible.classList.remove("color-red");
    monthVisible.classList.add("visible-month");
  }
});


year.addEventListener("input", (e) => {
  if (+year.value > 2052 || +year.value <= 0) {
    yearVisible.classList.remove("year-visible");
    yearVisible.classList.add("color-red");
    clearDataAge();
  }
  else {
    yearVisible.classList.remove("color-red");
    yearVisible.classList.add("year-visible");
  }
});


function calculateAge() {

  let brithday = `${month.value}/${day.value}/${year.value}`;
  
  if(brithday !== "//") {
	  let birtdayObjt = new Date(brithday);
  let aggeDiffMill = Date.now() - birtdayObjt;
  let dateAge = new Date(aggeDiffMill);
  let getfullYear = dateAge.getUTCFullYear() - 1970;
  let getfullMonth = dateAge.getUTCMonth();
  let getfullDay = dateAge.getUTCDay() - 1;
  
  if(getfullDay <= 31 || getfullMonth <= 12) {
	    resultDay.textContent = getfullDay;
  resultMonth.textContent = getfullMonth;
  resultYear.textContent = getfullYear;
  } 
  }
}

function clearDataAge() {
  resultDay.innerHTML = "--"
  resultMonth.innerHTML = "--"
  resultYear.innerHTML = "--"
}