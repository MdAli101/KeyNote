let AddPlatform = document.getElementById('CardId');
let CreateNewOne = document.getElementById('AddNotes').addEventListener('click', function(){
    AddPlatform.innerHTML = `
    <div class="backdrop-background-lurg">
    <img src="/styles/CloseButtonMac.png" class="closeMenuButton" id="CloseButton"></img>   
    <img src="/styles/DisabledCloseButton.png" class="closeMenuButton" id="CloseButtondisabled-1"></img>   
    <img src="/styles/DisabledCloseButton.png" class="closeMenuButton" id="CloseButtondisabled-2"></img>   
    </div>
    
    <div class="holder-menu-items" style="display: block;">    
        <h5 class="card-header">
            Give Your Life a Schedule
        </h5>
        <div class="card-body">
            <div class="mb-3">
                <label for="addTitle" class="form-label" style="font-weight: 450;font-size: large;">Add Title</label>
                <input type="text" class="form-control" id="addTitle" placeholder=" ">
            </div>
                <div class="mb-3">
                <label for="addTxt" style="font-weight: 450;font-size: large;">Add Text</label>
                <textarea class="form-control" id="addTxt" rows="3"></textarea>
            </div>
        </div>
    </div>`;
    AddPlatform.style.display = 'flex';
    AddPlatform.style.border = '2.5px solid rgb(222, 226, 230)';
    let _backgroundLurger = document.querySelector('.backdrop-background-lurg')
            _backgroundLurger.classList.add('shadowBoxes');
    let CloseNewOne = document.getElementById('CloseButton');
    CloseNewOne.addEventListener('click', function(){
        AddPlatform.innerHTML='';
    })
})
