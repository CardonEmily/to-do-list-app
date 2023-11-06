function newItem() {
  //add new item to the bottom of the list
  const li = document.createElement("li");
  const inputValue = document.getElementById("input").value;
  const text = document.createTextNode(inputValue);
  li.appendChild(text);

  if (inputValue === "") {
    alert("Don't forget to put in your task!");
  } else {
    let list = document.querySelector("#list");
    list.appendChild(li);
  }

  //cross out complete tasks
  function crossOut() {
    li.classList.toggle("strike");
  }

  li.addEventListener("dblclick", crossOut);

  //add a button to remove items
  const crossOutButton = document.createElement("crossOutButton");
  crossOutButton.appendChild(document.createTextNode("X"));
  li.appendChild(crossOutButton);

  crossOutButton.addEventListener("click", deleteListItem);

  //class 'delete' from CSS
  function deleteListItem() {
    li.classList.add("delete");
  }

  //make items able to be reorganized
  $("#list").sortable();
}
