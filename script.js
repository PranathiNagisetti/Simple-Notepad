const notesArea = document.getElementById("notes");
const saveBtn = document.getElementById("save-btn");
const clearBtn = document.getElementById("clear-btn");
const viewBtn = document.getElementById("view-btn");

window.onload = function () {
    const savedNotes = localStorage.getItem("notes");
    if (savedNotes) {
        notesArea.value = savedNotes;
    }
};

saveBtn.addEventListener("click", function () {
    const notes = notesArea.value;
    localStorage.setItem("notes", notes);
    alert("Notes saved successfully!");
});

clearBtn.addEventListener("click", function () {
    localStorage.removeItem("notes");
    notesArea.value = "";
    alert("Notes cleared!");
});

viewBtn.addEventListener("click", function () {
    const recentNotes = localStorage.getItem("notes");
    if (recentNotes) {
        alert("Your Recent Notes:\n\n" + recentNotes);
    } else {
        alert("No notes found!");
    }
});
