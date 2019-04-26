document.querySelector("#add-item-button").addEventListener("click", addItem);

function addItem() {
    var input = document.querySelector("#item-input");
    var list = document.querySelector("ul.list-group");
    var newItem = document.createElement("li");

    newItem.appendChild(document.createTextNode(input.value));

    newItem.classList.add("list-group-item");

    var removeButton = document.createElement("button");
    
    removeButton.appendChild(document.createTextNode("X"));

    removeButton.classList.add("btn", "btn-sm", "btn-danger", "side-btn", "float-right")
    
    removeButton.addEventListener("click", removeItem);

    newItem.appendChild(removeButton);

    list.appendChild(newItem);

    input.value = "";

}

function removeItem(event) {
    event.target.parentElement.remove();
}