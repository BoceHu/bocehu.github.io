(function () {
    const N = 5;
  
    function init() {
      const list = document.getElementById('news-list');
      if (!list) {
        console.warn('[news-toggle] #news-list not found');
        return;
      }
  
      const items = Array.from(list.querySelectorAll('li'));
      console.log('[news-toggle] items:', items.length);
  
      if (items.length <= N) return;
  
      const btn = document.createElement('a');
      btn.href = '#';
      btn.className = 'news-toggle';
  
      list.insertAdjacentElement('afterend', btn);
  
      let expanded = false;
  
      function setBtnText() {
        const remaining = Math.max(0, items.length - N);
        btn.textContent = expanded ? 'See less' : `See more`;
      }
  
      function collapse() {
        items.forEach((li, idx) => {
          li.style.display = idx < N ? 'list-item' : 'none';
        });
        expanded = false;
        setBtnText();
      }
  
      function expand() {
        items.forEach(li => (li.style.display = 'list-item'));
        expanded = true;
        setBtnText();
      }
  
      collapse();
  
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        expanded ? collapse() : expand();
      });
    }
  

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
    } else {
      init();
    }
  })();
  