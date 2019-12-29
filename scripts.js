const timeOptions = {
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  hour12: true,
};
const dateOptions = {
  weekday: 'long',
  month: 'short',
  day: 'numeric',
  year: 'numeric',
};
const initialTime = new Date();
const timeElement = document.getElementById('time');
const dateElement = document.getElementById('date');
const expireTimeElement = document.getElementById('expireTime');
const numAdultElement = document.getElementById('numAdult');

function updateTime() {
  const now = new Date();
  timeElement.innerHTML = now.toLocaleString('en-US', timeOptions);
  dateElement.innerHTML = now.toLocaleString('en-US', dateOptions);
  expireTimeElement.innerHTML = '00:00:' + msConversion(3599999 - (now - initialTime));
  setTimeout(updateTime, 1000);
}

function msConversion(millis) {
  let sec = Math.floor(millis / 1000);
  let min = Math.floor(sec / 60);
  sec -= min * 60;

  sec = '' + sec;
  sec = ('00' + sec).substring(sec.length);
  return min + ':' + sec;
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

updateTime();
document.getElementById('barcode1').style.backgroundColor = getRandomColor();
document.getElementById('barcode2').style.backgroundColor = getRandomColor();
document.getElementById('barcode3').style.backgroundColor = getRandomColor();
document.getElementById('barcode1').addEventListener('click', () => {
  numAdultElement.innerText = Math.max(parseInt(numAdultElement.innerText) - 1, 1);
});
document.getElementById('barcode3').addEventListener('click', () => {
  numAdultElement.innerText = parseInt(numAdultElement.innerText) + 1;
});
