const array = ['HELLO', 122, -10, 'Java', 'JavaScript', 500, 'Nodejs'];

function compNumStr(e1, e2) {
  const isNum1 = typeof e1 === 'number';
  const isNum2 = typeof e2 === 'number';

  if (isNum1 && isNum2) return e2 - e1;
  if (isNum1) return -1;
  if (isNum2) return 1;

  return e1.localeCompare(e2);
}

function orderedList(array) {
  return `<ol>${array.map(item => `<li class="item${typeof item === 'number' ? ' item_number' : ''}">${item}</li>`).join('')}</ol>`;
}

const bodyElement = document.querySelector('body');
bodyElement.innerHTML = orderedList(["Hello", 300, "Java", "Nodejs", 100]);