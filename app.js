document.getElementById('host').textContent = location.hostname;
const now = document.getElementById('now');
const tick = () => now.textContent = new Date().toLocaleString();
tick(); setInterval(tick, 1000);
let n = 0;
document.getElementById('btn').addEventListener('click', () => {
  document.getElementById('count').textContent = ++n;
});
