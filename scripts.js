document.getElementById('noteForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const textarea = e.target.querySelector('textarea');
    const note = document.createElement('div');
    note.className = 'note';
    note.innerHTML = '<p>' + textarea.value + ' <span><button class="text-button" onclick="editNote(this)">Edit</button> <button class="text-button" onclick="deleteNote(this)">Delete</button></span></p>';
    const notePosts = document.getElementById('notePosts');
    notePosts.insertBefore(note, notePosts.firstChild);
    textarea.value = '';
});

function editNote(button) {
    const noteContent = button.parentElement.previousSibling;
    const newContent = prompt('Edit your note:', noteContent.textContent);
    if (newContent) {
        noteContent.textContent = newContent;
    }
}

function deleteNote(button) {
    button.parentElement.parentElement.remove();
}

document.getElementById('expandNotes').addEventListener('click', function() {
    const notes = document.querySelectorAll('.note');
    notes.forEach(note => {
        note.style.display = note.style.display === 'none' ? 'block' : 'none';
    });
});

document.getElementById('todoForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const input = e.target.querySelector('input[type="text"]');
    const task = document.createElement('li');
    task.innerHTML = '<input type="checkbox"> ' + input.value + ' <span><button class="text-button" onclick="removeTask(this)">Remove</button> <button class="text-button" onclick="addComment(this)">Add Comment</button></span>';
    document.getElementById('tasks').appendChild(task);
    input.value = '';
});

function removeTask(button) {
    button.parentElement.parentElement.remove();
}

function addComment(button) {
    const comment = prompt('Add a comment for this task:');
    if (comment) {
        const commentDiv = document.createElement('div');
        commentDiv.className = 'comment';
        commentDiv.textContent = comment;
        button.parentElement.appendChild(commentDiv);
    }
}
