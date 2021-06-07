console.log("item");
showNotes();

//User adds a note it to localStorage
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function(e) {
  let addTxt = document.getElementById("addTxt");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];  
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.push(addTxt.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
  console.log(notesObj);
  showNotes(); //declared a function
});


//function to show localStorae notes:
function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function (element, index) {
    html += `
        <div class="noteCard my-3 mx-3" style="width: 18rem; border-radius: 20px; border: 1px solid #dee2e6;">
            <div class="card-body">
                <h5 class="card-title">Note ${index + 1}</h5>
                <p class="card-text">${element}</p>
                <div class="btn-Container" style="border-radius: 15px;">
                    <button id="${index}" onclick="deleteNote(this.id)"class="btn btn-primary" style="border-radius: 15px;">Delete</button>
                </div>
            </div>
        </div>`;
  })
  let notesElm = document.getElementById("notes");
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `Nothing to show! Use "Add Note" to add a note.`;
    notesElm.style.fontWeight = 1;
  }
}

//Deleting a note
function deleteNote(index) {
  console.log("deleting", index);
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}

let search = document.getElementById("searchTxt");
search.addEventListener("input", function() {
  inputVal = search.value;
  let noteCards = document.getElementsByClassName('noteCard');
  Array.from(noteCards).forEach(function(element) {
    let cardTxt = element.getElementsByTagName("p")[0].innerText;
    if(cardTxt.includes(inputVal)) {
      element.style.display = "block";
    }
    else {
      element.style.display = "none";
    }
  })
})



/*//Improvement on this device
1. Adding title functionality
2. Adding one as important
3. Separate Note
*/
