document.addEventListener("DOMContentLoaded", () => {
  const endDate = "11 May 2026 09:15 AM";
  document.getElementById("end-date").innerText = endDate;
  const inputs = document.querySelectorAll("input");

  function clock() {
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now) / 1000;
    
    if (diff < 0) return;

    inputs[0].value = Math.floor(diff / 3600 / 24); //convert into Days
    inputs[1].value = Math.floor(diff / 3600) % 24; //convert into Hours
    inputs[2].value = Math.floor(diff / 60) % 60; //convert into minutes
    inputs[3].value = Math.floor(diff) % 60; //convert into seconds
  }

  clock();

  setInterval(function () {
    clock();
  }, 1000);
});

/**
 * 1 day= 24 hrs
 * 1 hr= 60 mins
 * 60 min= 3600 sec
 */
