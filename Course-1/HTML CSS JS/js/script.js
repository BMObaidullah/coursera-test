function sayHello() {
  this.textContent = "said it!";
  var title = document.getElementById("heading").textContent;

  title += " and it's very big";

  if (document.getElementById("name").value === "student") {
    document.getElementById("heading").textContent = title;
    document.getElementById("content").textContent =
      "Hello " + document.getElementById("name").value + "!";
  } else {
    document.getElementById("content").textContent =
      "Hello " + document.getElementById("name").value + "!";
  }
}

document.querySelector("button").onclick = sayHello;
