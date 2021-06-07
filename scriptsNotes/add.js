let AddPlatform = document.getElementById('CardId');
let addNotesButton = document.getElementById('addBtn');
let CreateNewOne = document.getElementById('AddNotes').addEventListener('click', function(){
    AddPlatform.innerHTML = `
    <img src="/styles/CloseButtonMac.png" class="closeMenuButton" id="CloseButton"></img>   
    <div class="holder-menu-items" style="display: block;">    
        <h5 class="card-header">Give Your Life a Schedule</h5>
        <div class="card-body">
            <div class="mb-3">
                <label for="addTitle" class="form-label" style="font-weight: 450;font-size: large;">Add Title</label>
                <input type="text" class="form-control" id="addTitle" placeholder=" ">
              </div>
            <h5 class="card-title"></h5>
            <div class="mb-3">
                <label for="addTxt" style="font-weight: 450;font-size: large;">Add Text</label>
                <textarea class="form-control" id="addTxt" rows="3"></textarea>
            </div>
    </div>`;
    addNotesButton.classList.add('displayreversed')
    let CloseNewOne = document.getElementById('CloseButton');
    CloseNewOne.addEventListener('click', function(){
        AddPlatform.innerHTML='';
    })
})
