fetch('diary.json')
  .then(response => response.json())
  .then(data => {
    const diaryList = document.getElementById('diary-list');
    data.forEach(entry => {
      const li = document.createElement('li');
      const link = document.createElement('a');
      link.href = `diary-entry.html?date=${entry.date}`; // 詳細ページへのリンク
      link.textContent = `${entry.date} - ${entry.title}`;
      li.appendChild(link);
      diaryList.appendChild(li);
    });
  });