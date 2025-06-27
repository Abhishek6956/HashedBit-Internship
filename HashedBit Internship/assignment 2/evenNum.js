const container = document.getElementById('evenNumbers');
    for (let i = 1; i <= 100; i++) {
      if (i % 2 === 0) {
        const span = document.createElement('span');
        span.className = 'number';
        span.textContent = i;
        container.appendChild(span);
      }
    }