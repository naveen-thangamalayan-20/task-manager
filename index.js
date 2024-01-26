function onHeaderDropDownClick(){
    console.log("cliekced")
    document.getElementsByClassName("dropdown-items")[0].classList.toggle("dropdown-items-show")
}

function onClickOutSideOfDropDown(event){
    console.log(event)
    if(!event.target.classList.contains("dropdown")){
        const dropdownNodes = document.getElementsByClassName("dropdown-items")
        console.log(dropdownNodes)
        for(let dropdownNode of dropdownNodes) {
            if(dropdownNode.classList.contains("dropdown-items-show")){
                dropdownNode.classList.remove("dropdown-items-show")
            }
        }
    }
   
}
const query = '(max-width: 767px)';
function onWindowResized(event){
    console.log("Window resized")
    console.log(event)
   
    if(window.matchMedia(query).matches){
        document.getElementById("add-new-task").innerHTML = "+"
    } else {
        document.getElementById("add-new-task").innerHTML = "+ Add new task"
    }
    // event.target.
}

window.addEventListener("click", onClickOutSideOfDropDown)
const matchMedia = window.matchMedia(query);
console.log(matchMedia)
matchMedia.addEventListener("change", onWindowResized)