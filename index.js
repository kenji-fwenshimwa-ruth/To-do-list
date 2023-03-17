


// let todoList = [];

// function addItem () {
// }

// function editItem (item) {

// }

// function deleteItem (item) {

// }

const inputField = document.getElementById("text-input");
const buttonAdd = document.getElementById("button-add");
const toDoContainer = document.querySelector(".to-do-container")

 buttonAdd.addEventListener("click", () => {
    if (inputField.value.trim().length == '') 
        return;
    


        // creating the list container
        const itemContainer = document.createElement('div');
        itemContainer.classList.add('item-container');

        toDoContainer.appendChild(itemContainer);
        

        const toDoMessage = document.createElement('p');
        toDoMessage.id ='to-do-message';
        toDoMessage.innerText = inputField.value;
        toDoContainer.appendChild(toDoMessage);

        // creating the buttons
        const editButton = document.createElement('button');
        editButton.id = 'edit';
        const editP = document.createElement('p');
        editP.id = 'edit-paragraph';
        editButton.appendChild(editP);
        toDoContainer.appendChild(editButton);


        const deleteButton = document.createElement('button');
        deleteButton.id = 'delete';
        const deleteP =document.createElement('p')
        deleteP.id = 'delete-paragraph';
        deleteButton.appendChild(deleteP);
        toDoContainer.appendChild(deleteButton);



        inputField.value = '';
});
 

