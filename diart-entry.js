const urlParams = new URLSearchParams(window.location.search);
const date = urlParams.get('date');

fetch('diary.json')
  .then(response => response.json())
  .then(data => {
    const entry = data.find(e => e.date === date);
    if (entry) {
      document.getElementById('entry-title').textContent = `${entry.date} - ${entry.title}`;
      document.getElementById('entry-content').textContent = entry.content;
    } else {
      document.getElementById('entry-title').textContent = '日記が見つかりませんでした。';
    }
  });