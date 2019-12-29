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
const expiresElement = document.getElementById('expires');

function updateTime() {
  const now = new Date();
  timeElement.innerHTML = now.toLocaleString('en-US', timeOptions);
  dateElement.innerHTML = now.toLocaleString('en-US', dateOptions);
  setTimeout(updateTime, 1000);
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
document.getElementById('expires').addEventListener('back', () => {});
