function updateTime() {
  let date = new Date();

  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  let time = `${hours}:${minutes}:${seconds}`;

  document.querySelector("#time").innerText = time;
  setTimeout(updateTime, 1000);
}

function updateDate() {
  let date = new Date();
  let monthList = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let year = date.getFullYear();
  let month = monthList[date.getMonth()];
  let date1 = date.getDate();

  let today = `${month} ${date1}, ${year}`;
  document.querySelector("#date").innerText = today;
}

updateTime();
updateDate();
