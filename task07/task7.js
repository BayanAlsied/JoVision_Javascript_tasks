
function updateTime() {
  const today = new Date();
  const hours = String(today.getHours()).padStart(2, '0');
  const minutes = String(today.getMinutes()).padStart(2, '0');
  const seconds = String(today.getSeconds()).padStart(2, '0');

  const currentTime = `${hours}:${minutes}:${seconds}`;
  document.getElementById('time').textContent = currentTime;
}

// Update time immediately and then every second
updateTime();
setInterval(updateTime, 1000);
