export function renderCandy(candy) {
    const li = document.createElement('li');
    li.classList.add('candy-item');

    const headEl = document.createElement('h2');
    headEl.textContent = candy.name;

    const pEl = document.createElement('p');
    pEl.textContent = candy.flavor + ' ' + candy.type;

    li.append(headEl, pEl);

    return li;
}
