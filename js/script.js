fetch("components/section-5.html")
  .then(response => {
    if (!response.ok) {
      throw new Error("Failed to load Section 5");
    }
    return response.text();
  })
  .then(html => {
    document.getElementById("sec-5").innerHTML = html;
  })
  .catch(error => {
    console.error("Error loading Section 5:", error);
  });