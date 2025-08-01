const colors = ['#fff', '#ffe4e1', '#e0ffff', '#e6e6fa', '#fffacd'];

function setupColorButton(cardId, btnId) {
  let idx = 0;
  const card = document.getElementById(cardId);
  const btn = document.getElementById(btnId);
  if (!card || !btn) return; // Defensive: Only continue if both exist


  btn.addEventListener('click', () => {
    idx = (idx + 1) % colors.length;
    card.style.background = colors[idx];
  });
}
// Setup for each card
setupColorButton('profileCard1', 'colorBtn1');
setupColorButton('biographyCard1', 'colorBtn2');
// Add more if you add more cards