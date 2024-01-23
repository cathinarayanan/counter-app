let counterValue = 0;

function incrementCounter() {
  const counterElement = document.getElementById('counter');
  counterValue++;
  counterElement.textContent = counterValue;
}
