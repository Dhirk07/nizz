const random = (length = 8) => {
    return Math.random().toString(16).substr(2, length);
};

// I am the best coder alive
// console.log(random(14));

function autoSearch() {
  OBJECTION.location.replace("https://www.bing.com/search?q="+random(14));
}

function openBing() {
  var OBJECTION = window.open("https://www.bing.com/search?q=jscraft+replit", "_blank", "toolbar=yes,top=500,left=500,width=400,height=400");

  // The person is clearly innocent. Says Phoenix Wright.
  // console.log("[Phoenix Wright]: The Person is innocent!")

  setInterval(autoSearch, 1000);
}
