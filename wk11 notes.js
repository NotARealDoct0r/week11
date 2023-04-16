console.log($("body"));

let p = $("#test");
let div = $(".my-class");
let ul = $("ul");

console.log(p);
console.log(div);
console.log(ul);

console.log(p.text());
p.text("new text");

// $('input').val('new value');

$("input").attr("placeholder", "Placeholder text");

div.prepend("<p>prepended paragraph</p>");
div.append("<p>appended paragraph</p>");
div.before("<p>paragraph that was added before the div</p>");
div.after("<p>paragraph added after div</p>");

// div.empty();
// ul.remove();

$("input").hide();
setTimeout(() => $("input").show(), 2000);

$.get("https://reqres.in/api/users/2", (data) => console.log(data));

$.post(
  "https://reqres.in/api/users",
  {
    name: "Tommy",
    job: "front end software dev",
  },
  (data) => console.log(data)
);

