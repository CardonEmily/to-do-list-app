function newItem() {
  //add new item to the bottom of the list
  const li = $("<li></li>");
  const inputValue = $("#input").val();
  li.append(inputValue);

  if (inputValue === "") {
    alert("Don't forget to put in your task!");
  } else {
    $("#list").append(li);
  }

  //cross out complete tasks
  li.on("dblclick", function crossOut() {
    li.toggleClass("strike");
  });

  //add a button to remove items from list
  const crossOutButton = $("<crossOutButton><crossOutButton>");
  crossOutButton.append(document.createTextNode("X"));
  li.append(crossOutButton);

  crossOutButton.on("click", deleteListItem);

  //class 'delete' from CSS
  function deleteListItem() {
    li.addClass("delete");
  }

  //make items able to be reorganized
  $("#list").sortable();
}
