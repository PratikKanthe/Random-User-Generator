$("document").ready(function () {
  //btn click
  $("#btn").click(function () {
    $("#btn").prop("disabled", true);
    $("#btn").text("Loading...");
    getPerson();
  });
});
// Function to change the theme color randomly
const changeThemeColor = () => {
  const randomColor =
    "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0");
  document.documentElement.style.setProperty("--theme-color", randomColor);
};

//function to get data
function getPerson() {
  const url = "https://random-data-api.com/api/v2/users?response_type=json";
  $.get(url).done(function (data) {
    let person = data;
    getData(person);
    changeThemeColor();
    $("#btn").prop("disabled", false);
    $("#btn").text("Random Person");
  });

  //function to use data
  function getData(person) {
    $("#name").text(`${person.first_name} ${person.last_name}`);
    $("#first").text(person.first_name);
    $("#last").text(person.last_name);
    $("#gender").text(person.gender);
    $("#street").text(person.address.city);
    $("#phone").text(person.phone_number);
    $("#email").text(person.email);

    $("#photo").attr("src", person.avatar);
  }
}
