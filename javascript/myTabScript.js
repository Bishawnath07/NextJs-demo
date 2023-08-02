function openTab(tabId) {
    const tabs = document.getElementsByClassName('tab');
    for (const tab of tabs) {
      tab.classList.remove('active');
    }
    const cards = document.getElementsByClassName('card1');
    for (const card of cards) {
      card.style.display = 'none';
    }
    document.getElementById(tabId).style.display = 'block';
    document.querySelector(`[onclick="openTab('${tabId}')]`).classList.add('active');}