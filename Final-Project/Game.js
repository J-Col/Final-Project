//The Challenge of this project was to make the core program all run entirely on one page
// with one button and one image location;
//while still being able to show all results on a final third page.
window.onload = loadCookieList;

var score = [];

var answers = ["bmw", "bentley", "audi", "bugatti", "cadillac", "chevrolet",
"ferrari", "ford", "hyundai", "mazda"];

function loadCookieList()
{
  var cookie = getCookie("results");
}

function check0()
{
  var userInput = document.getElementById("userAnswer").value;
  var userLower = userInput.toLowerCase();
  if (userInput == "")
  {
    return window.alert("Cannot be Blank.")
  }
  if (isNaN(userInput) == false)
  {
    return window.alert("Answer must be in words.");
  }
  if (userLower == answers[0])
  {
    window.alert("Correct!");
    document.getElementById("button").setAttribute("onclick", "javascript: check1();");
    document.getElementById("carPhoto").src='http://1.bp.blogspot.com/-AwWAleHJiiA/Vo2sNyPPp-I/AAAAAAAATOU/m-UJLHTDZ0w/s1600/Bentley-Mulliner-Monster.jpg';
    document.getElementById("citation").href='http://www.carscoops.com/2016/01/bentley-and-monster-create-bespoke.html';
    var answerString = score.push(userLower);
    setCookie("correct0", userLower, 2);
  }
  else
  {
    window.alert("Incorrect! Try Again!");
  }
}

function check1()
{
  var userInput = document.getElementById("userAnswer").value;
  var userLower = userInput.toLowerCase();
  if (userInput == "")
  {
    return window.alert("Cannot be Blank.")
  }
  if (isNaN(userInput) == false)
  {
    return window.alert("Answer must be in words.");
  }
  if (userLower == answers[1])
  {
    window.alert("Correct!");
    document.getElementById("button").setAttribute("onclick", "javascript: check2();");
    document.getElementById("carPhoto").src='http://2p2bboli8d61fqhjiqzb8p1a.wpengine.netdna-cdn.com/wp-content/uploads/2014/04/matte-black-audi-r8-952x500.jpg';
    document.getElementById("citation").href='http://blog.dupontregistry.com/audi/halo-car-matte-black-2014-audi-r8-v10-for-sale/';
    var answerString = score.push(userLower);
    setCookie("correct1", userLower, 2);
  }
  else
  {
    window.alert("Incorrect! Try Again!");
  }
}

function check2()
{
  var userInput = document.getElementById("userAnswer").value;
  var userLower = userInput.toLowerCase();
  if (userInput == "")
  {
    return window.alert("Cannot be Blank.")
  }
  if (isNaN(userInput) == false)
  {
    return window.alert("Answer must be in words.");
  }
  if (userLower == answers[2])
  {
    window.alert("Correct!");
    document.getElementById("button").setAttribute("onclick", "javascript: check3();");
    document.getElementById("carPhoto").src='http://pictures.topspeed.com/IMG/crop/201612/is-bugatti-strugglin_1600x0w.jpg';
    document.getElementById("citation").href='http://www.topspeed.com/cars/car-news/is-bugatti-struggling-to-sell-the-chiron-ar175375/picture697786.html';
    var answerString = score.push(userLower);
    setCookie("correct2", userLower, 2);
  }
  else
  {
    window.alert("Incorrect! Try Again!");
  }
}

function check3()
{
  var userInput = document.getElementById("userAnswer").value;
  var userLower = userInput.toLowerCase();
  if (userInput == "")
  {
    return window.alert("Cannot be Blank.")
  }
  if (isNaN(userInput) == false)
  {
    return window.alert("Answer must be in words.");
  }
  if (userLower == answers[3])
  {
    window.alert("Correct!");
    document.getElementById("button").setAttribute("onclick", "javascript: check4();");
    document.getElementById("carPhoto").src='http://hanabi.autoweek.com/sites/default/files/styles/gen-1200-675/public/2016-cadillac-ct6-070.jpg?itok=gTR6j5AW';
    document.getElementById("citation").href='http://autoweek.com/article/car-reviews/2016-cadillac-ct6-review-does-turbo-four-damage-luxury-experience';
    var answerString = score.push(userLower);
    setCookie("correct3", userLower, 2);
  }
  else
  {
    window.alert("Incorrect! Try Again!");
  }
}

function check4()
{
  var userInput = document.getElementById("userAnswer").value;
  var userLower = userInput.toLowerCase();
  if (userInput == "")
  {
    return window.alert("Cannot be Blank.")
  }
  if (isNaN(userInput) == false)
  {
    return window.alert("Answer must be in words.");
  }
  if (userLower == answers[4])
  {
    window.alert("Correct!");
    document.getElementById("button").setAttribute("onclick", "javascript: check5();");
    document.getElementById("carPhoto").src='http://image.trucktrend.com/f/100849107+w660+h495+q80+re0+cr1+ar0/chevrolet-colorado-xtreme-concept-front-three-quarter.jpg';
    document.getElementById("citation").href='http://www.trucktrend.com/news/1603-chevrolet-colorado-xtreme-trailblazer-premiere-debut-in-thailand/';
    var answerString = score.push(userLower);
    setCookie("correct4", userLower, 2);
  }
  else
  {
    window.alert("Incorrect! Try Again!");
  }
}

function check5()
{
  var userInput = document.getElementById("userAnswer").value;
  var userLower = userInput.toLowerCase();
  if (userInput == "")
  {
    return window.alert("Cannot be Blank.")
  }
  if (isNaN(userInput) == false)
  {
    return window.alert("Answer must be in words.");
  }
  if (userLower == answers[5])
  {
    window.alert("Correct!");
    document.getElementById("button").setAttribute("onclick", "javascript: check6();");
    document.getElementById("carPhoto").src='http://cdn-1.thejameslist.com/data/images/24664425_620x465@x2.jpg';
    document.getElementById("citation").href='http://www.jamesedition.com/cars/ferrari/488-gtb/for-sale-1096107';
    var answerString = score.push(userLower);
    setCookie("correct5", userLower, 2);
  }
  else
  {
    window.alert("Incorrect! Try Again!");
  }
}

function check6()
{
  var userInput = document.getElementById("userAnswer").value;
  var userLower = userInput.toLowerCase();
  if (userInput == "")
  {
    return window.alert("Cannot be Blank.")
  }
  if (isNaN(userInput) == false)
  {
    return window.alert("Answer must be in words.");
  }
  if (userLower == answers[6])
  {
    window.alert("Correct!");
    document.getElementById("button").setAttribute("onclick", "javascript: check7();");
    document.getElementById("carPhoto").src='http://roa.h-cdn.co/assets/14/52/980x490/landscape_nrm_1419363702-mountune-mustang-01.jpg';
    document.getElementById("citation").href='http://www.roadandtrack.com/car-culture/buying-maintenance/news/a24602/ford-racing-really-wants-you-to-mod-ecoboost-engines/';
    var answerString = score.push(userLower);
    setCookie("correct6", userLower, 2);
  }
  else
  {
    window.alert("Incorrect! Try Again!");
  }
}

function check7()
{
  var userInput = document.getElementById("userAnswer").value;
  var userLower = userInput.toLowerCase();
  if (userInput == "")
  {
    return window.alert("Cannot be Blank.")
  }
  if (isNaN(userInput) == false)
  {
    return window.alert("Answer must be in words.");
  }
  if (userLower == answers[7])
  {
    window.alert("Correct!");
    document.getElementById("button").setAttribute("onclick", "javascript: check8();");
    document.getElementById("carPhoto").src='http://i584.photobucket.com/albums/ss283/mosche10/IMG_1501-2.jpg';
    document.getElementById("citation").href='http://www.newtiburon.com/forums/member-profiles/179977-kevin25-s-redfire-devotion.html';
    var answerString = score.push(userLower);
    setCookie("correct7", userLower, 2);
  }
  else
  {
    window.alert("Incorrect! Try Again!");
  }
}

function check8()
{
  var userInput = document.getElementById("userAnswer").value;
  var userLower = userInput.toLowerCase();
  if (userInput == "")
  {
    return window.alert("Cannot be Blank.")
  }
  if (isNaN(userInput) == false)
  {
    return window.alert("Answer must be in words.");
  }
  if (userLower == answers[8])
  {
    window.alert("Correct!");
    document.getElementById("button").setAttribute("onclick", "javascript: check9();");
    document.getElementById("carPhoto").src='http://www.japanesesportcars.com/galleries/data/media/82/nice_custom_mazda_rx8.jpg';
    document.getElementById("citation").href='http://www.japanesesportcars.com/galleries/img2200.htm';
    var answerString = score.push(userLower);
    setCookie("correct8", userLower, 2);
  }
  else
  {
    window.alert("Incorrect! Try Again!");
  }
}

function check9()
{
  var userInput = document.getElementById("userAnswer").value;
  var userLower = userInput.toLowerCase();
  if (userInput == "")
  {
    return window.alert("Cannot be Blank.")
  }
  if (isNaN(userInput) == false)
  {
    return window.alert("Answer must be in words.");
  }
  if (userLower == answers[9])
  {
    var answerString = score.push(userLower);
    setCookie("correct9", userLower, 2);
    window.alert("Correct!");
    window.open("results.html");
  }
  else
  {
    window.alert("Incorrect! Try Again!");
  }
}



function showAnswers()
{
  var answerZero = getCookie("correct0");
  var answerOne = getCookie("correct1");
  var answerTwo = getCookie("correct2");
  var answerThree = getCookie("correct3");
  var answerFour = getCookie("correct4");
  var answerFive = getCookie("correct5");
  var answerSix = getCookie("correct6");
  var answerSeven = getCookie("correct7");
  var answerEight = getCookie("correct8");
  var answerNine = getCookie("correct9");
  document.getElementById("userScore").innerHTML =
  answerZero + " " + "=" + " " + "<a href='https://www.youtube.com/watch?v=mVeklIh3xAo'>Image Source</a>"
  + "<br>" +
  answerOne + " " + "=" + " " + "<a href='http://www.carscoops.com/2016/01/bentley-and-monster-create-bespoke.html'>Image Source</a>"
  + "<br>" +
  answerTwo + " " + "=" + " " + "<a href='http://blog.dupontregistry.com/audi/halo-car-matte-black-2014-audi-r8-v10-for-sale/'>Image Source</a>"
  + "<br>" +
  answerThree + " " + "=" + " " + "<a href='http://www.topspeed.com/cars/car-news/is-bugatti-struggling-to-sell-the-chiron-ar175375/picture697786.html'>Image Source</a>"
  + "<br>" +
  answerFour + " " + "=" + " " + "<a href='http://autoweek.com/article/car-reviews/2016-cadillac-ct6-review-does-turbo-four-damage-luxury-experience'>Image Source</a>"
  + "<br>" +
  answerFive + " " + "=" + " " + "<a href='http://www.trucktrend.com/news/1603-chevrolet-colorado-xtreme-trailblazer-premiere-debut-in-thailand/'>Image Source</a>"
  + "<br>" +
  answerSix + " " + "=" + " " + "<a href='http://www.jamesedition.com/cars/ferrari/488-gtb/for-sale-1096107'>Image Source</a>"
  + "<br>" +
  answerSeven + " " + "=" + " " + "<a href='http://www.roadandtrack.com/car-culture/buying-maintenance/news/a24602/ford-racing-really-wants-you-to-mod-ecoboost-engines/'>Image Source</a>"
  + "<br>" +
  answerEight + " " + "=" + " " + "<a href='http://www.newtiburon.com/forums/member-profiles/179977-kevin25-s-redfire-devotion.html'>Image Source</a>"
  + "<br>" +
  answerNine + " " + "=" + " " + "<a href='http://www.japanesesportcars.com/galleries/img2200.htm'>Image Source</a>";
}


//Taken from http://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

//Taken from http://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length,c.length);
        }
    }
    return "";
}
