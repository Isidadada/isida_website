fetch('diary.json')
  .then(response => response.json())
  .then(data => {
    const diaryList = document.getElementById('diary-list');
    data.forEach(entry => {
      const li = document.createElement('li');
      li.innerHTML = `<h3>${entry.date} - ${entry.title}</h3><p>${entry.content}</p>`;
      diaryList.appendChild(li);
    });
  });