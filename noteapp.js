document.querySelector('.noteadd').addEventListener('submit', function(event) {
    event.preventDefault();
    addNote();
});

let notes = [];

// function loadNotes() {
//     const storedNotes = localStorage.getItem('notes');
//     if (storedNotes) {
//         notes = JSON.parse(storedNotes);
//     }
//     displayNotes();
// }

// function saveNotes() {
//     localStorage.setItem('notes', JSON.stringify(notes));
// }

function addNote() {
    const titleInput = document.getElementById('title');
    const noteInput = document.getElementById('note');
    const title = titleInput.value.trim();
    const note = noteInput.value.trim();
    
    if (title !== '' && note !== '') {
        notes.push({ title, note });
        titleInput.value = '';
        noteInput.value = '';
        // saveNotes();
        displayNotes();
    }
}

function deleteNote(index) {
    notes.splice(index, 1);
    // saveNotes();
    displayNotes();
}

function displayNotes() {
    const notesContainer = document.getElementById('notes');
    notesContainer.innerHTML = '';

    notes.forEach((note, index) => {
        const noteElement = document.createElement('div');
        noteElement.className = 'note';

        const noteTitle = document.createElement('h3');
        noteTitle.textContent = note.title;
        noteElement.appendChild(noteTitle);

        const noteText = document.createElement('p');
        noteText.textContent = note.note;
        noteElement.appendChild(noteText);

        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-button';
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => deleteNote(index);

        noteElement.appendChild(deleteButton);
        notesContainer.appendChild(noteElement);
    });
}
// Load notes from local storage when the page loads
// document.addEventListener('DOMContentLoaded', loadNotes);