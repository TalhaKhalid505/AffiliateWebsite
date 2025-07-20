// Dynamically inject header and footer into any page
document.addEventListener("DOMContentLoaded", function () {
  includeHTML("header", "/partials/header.html");
  includeHTML("footer", "/partials/footer.html");
});

function includeHTML(id, file) {
  const element = document.getElementById(id);
  fetch(file)
    .then(res => res.text())
    .then(data => {
      element.innerHTML = data;
    })
    .catch(() => {
      element.innerHTML = "<p>Include failed: " + file + "</p>";
    });
}
