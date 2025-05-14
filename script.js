document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("imageForm");
  const gallery = document.getElementById("gallery");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const title = document.getElementById("title").value.trim();
    const url = document.getElementById("url").value.trim();

    if (!title || !url) {
      alert("Please fill out all fields.");
      return;
    }

    const newCard = document.createElement("div");
    newCard.classList.add("image-card");

    const img = document.createElement("img");
    img.src = url;
    img.alt = title;

    const caption = document.createElement("p");
    caption.textContent = title;

    newCard.appendChild(img);
    newCard.appendChild(caption);

    gallery.appendChild(newCard);

    // Reset form
    form.reset();
  });

  // Optional: enlarge image on click
  gallery.addEventListener("click", function(event) {
    if (event.target.tagName === "IMG") {
      const img = event.target;
      alert(`You clicked on: ${img.alt}`);
    }
  });
});
