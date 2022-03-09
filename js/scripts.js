$(document).ready(function () {
  $("#userInputForm").submit(function (event) {
    event.preventDefault();

    // First, gather all the items from the user input list into variables.
    const itemOne = $("input#item1").val();
    const itemTwo = $("input#item2").val();
    const itemThree = $("input#item3").val();
    const itemFour = $("input#item4").val();

    // Next, place the items into an array.
    const presortedList = [itemOne, itemTwo, itemThree, itemFour];

    // Sort the array into alphabetical order.
    presortedList.sort();

    // Uppercase the list.
    const upperCasedList = presortedList.map((item) => item.toUpperCase());
    console.log("List uppercased: " + upperCasedList);

    // Display all items to user using arrays & loops.
    const listDisplaySlots = [".item1", ".item2", ".item3", ".item4"];
    let counter = 0;
    listDisplaySlots.forEach(function (slot) {
      $(slot).text(upperCasedList[counter]);
      counter += 1;
    });

    // Shows the list while hiding the form for user input.
    $("#listDisplay").show();
    $("#userInputForm").hide();
  });
});
