$(document).ready(function () {
  setTimeout(() => {
    get_team();   ////// Jquery  Method
   // makeHttpRequest();  //  AJX Method, Run each method one by one for test the code
    $("#loader").hide();
  }, 3000);
});

function get_team() {
  $.getJSON("team.json", function (data) {
    //console.log(data);
    $.each(data, function (index, item) {
      index = index + 1;
      $("#team").append("<h2>" + index + ") Name : " + item.name + "</h2>");
      $("#team").append("<h5>Position : " + item.position + "</h5>");
      $("#team").append("<p>Bio : " + item.bio + "</p>");
    });
  });
}

function makeHttpRequest() {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      const res = JSON.parse(xhr.responseText);

      $.each(res, function (index, item) {
          index = index + 1;
          $("#team").append("<h2>" + index + ") Name : " + item.name + "</h2>");
          $("#team").append("<h5>Position : " + item.position + "</h5>");
          $("#team").append("<p>Bio : " + item.bio + "</p>");
        });
    }
  };
  xhr.open("GET", "team.json", true);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.send(null);
}
