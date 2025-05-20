function showTime() {
  const now = new Date();
  const timeStr = now.toLocaleTimeString();
  document.getElementById("time").textContent = `Giờ hiện tại: ${timeStr}`;
}
