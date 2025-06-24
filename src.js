const guestNameInput = document.getElementById('guest-name');
const guestList = document.getElementById('guest-list');
const guestForm = document.getElementById('guest-form');

guestForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const guestName = guestNameInput.value.trim();
    if (!guestName) return;

    if (guestList.children.length >= 10) {
        alert('Guest list limit reached (10 people).');
        return;
    }

    const listItem = document.createElement('li');

    // Name span
    const nameSpan = document.createElement('span');
    nameSpan.textContent = guestName;

    // RSVP button
    const rsvpBtn = document.createElement('button');
    rsvpBtn.className = 'rsvp-btn';
    rsvpBtn.textContent = 'Not Attending';
    rsvpBtn.dataset.attending = 'false';
    rsvpBtn.onclick = function () {
        if (rsvpBtn.dataset.attending === 'false') {
            rsvpBtn.textContent = 'Attending';
            rsvpBtn.dataset.attending = 'true';
            listItem.classList.add('attending');
        } else {
            rsvpBtn.textContent = 'Not Attending';
            rsvpBtn.dataset.attending = 'false';
            listItem.classList.remove('attending');
        }
    };

    // Remove button
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Remove';
    deleteBtn.onclick = function () {
        listItem.remove();
    };

    // Assemble
    listItem.appendChild(nameSpan);
    listItem.appendChild(rsvpBtn);
    listItem.appendChild(deleteBtn);

    guestList.appendChild(listItem);

    guestNameInput.value = '';
    guestNameInput.focus();
});