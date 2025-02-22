const array = ['HELLO', 122, -10, 'Java', 'JavaScript', 500, 'Nodejs'];

function isNumber(item) {
  return typeof item === 'number';
}

function compareNumbers(a, b) {
  return b - a;
}

function compareStrings(a, b) {
  return a.localeCompare(b);
}

function compNumStr(e1, e2) {
  const isNum1 = isNumber(e1);
  const isNum2 = isNumber(e2);

  if (isNum1 && isNum2) {
    return compareNumbers(e1, e2);
  }

  if (isNum1) {
    return -1;
  }

  if (isNum2) {
    return 1;
  }

  return compareStrings(e1, e2);
}

function getListItemClass(item) {
  return isNumber(item) ? 'item item_number' : 'item';
}

function createListItem(item) {
  const className = getListItemClass(item);
  return `<li class="${className}">${item}</li>`;
}

function buildListItems(array) {
  return array.map(createListItem).join('');
}

function orderedList(array) {
  return `<ol>${buildListItems(array)}</ol>`;
}

array.sort(compNumStr);

const bodyElement = document.querySelector('body');
bodyElement.innerHTML = orderedList(["Hello", 300, "Java", "Nodejs", 100]);