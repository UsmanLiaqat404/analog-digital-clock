let sc = document.querySelector("#sc");
let mn = document.querySelector("#mn");
let hr = document.querySelector("#hr");
let hour = document.querySelector("#hour");
let minutes = document.querySelector("#minutes");
let seconds = document.querySelector("#seconds");
let ampm = document.querySelector("#ampm");

const updateTime = () => {
  let day = new Date();
  let s = day.getSeconds();
  let ss = s * 6;
  let m = day.getMinutes();
  let mm = m * 6;
  let h = day.getHours();
  let hh = h * 30;

  sc.style.transform = `rotateZ(${ss}deg)`;
  mn.style.transform = `rotateZ(${mm}deg)`;
  hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  // hour.innerHTML = String(h).padStart(2, "0");
  hour.innerHTML = String(h % 12 || 12).padStart(2, "0");
  minutes.innerHTML = String(m).padStart(2, "0");
  seconds.innerHTML = String(s).padStart(2, "0");
  ampm.innerHTML = h >= 12 ? "PM" : "AM";
};

const tick = setInterval(updateTime);
