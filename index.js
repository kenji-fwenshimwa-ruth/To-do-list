


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
        itemContainer.appendChild(toDoMessage);

        // creating the buttons
        const editButton = document.createElement('button');
        editButton.id = 'edit';
        
         editButton.style = "width:50px; height:40px; background-color:white;"

        const editimage = document.createElement('img');
        editimage.src = 'download.png';
         editimage.style = "width:20px; height:20px; "
        editButton.appendChild(editimage);
        itemContainer.appendChild(editButton);

         editButton.addEventListener('click', ()=>{
            inputField.value = toDoMessage.innerText;
            const main = editButton.parentElement;
            main.parentElement.removeChild(main); 
         });


        const deleteButton = document.createElement('button');
        deleteButton.id = 'delete';
        deleteButton.style = "width:50px; height:40px; background-color:white; margin:0 3px;"


        const deleteimage =document.createElement('img')
        deleteimage.src = 'images.png';
        deleteimage.style = "width:20px; height:20px; "
        deleteButton.appendChild(deleteimage);
        itemContainer.appendChild(deleteButton);

        deleteButton.addEventListener('click',()=>{
            const main = deleteButton.parentElement;
            main.parentElement.removeChild(main);
        });



        inputField.value = '';
});
 

