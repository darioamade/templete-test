const imageContainer = document.getElementById("image-container");
let loader = document.getElementById("loader");

//Unsplash
const count = 10;
const apiKey = "xS2ZHGY2gWw9O6zJiEPmT7aEghX5s6kyj7jlCRtLoQ0";
//const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

function setAttribute(element, attribute) {
  for (const key in attribute) {
    element.setAttribute(key, attribute[key]);
  }
}
// Create Elements for Links & Photos , Aff to DOM
function displayPhotos() {
  // Run function for each object in photosArray
  photosArray.forEach((photo) => {
    // Create <a> to link to Unsplash</a>
    const item = document.createElement("a");
    /*    item.setAttribute("href", photo.links.html);
    item.setAttribute("target", "_blank"); */
    setAttribute(item, {
      href: photo.links.html,
      target: "_blank",
    });
    // Create  <img> for photo
    const img = document.createElement("img");
    /*  img.setAttribute("src", photo.urls.regular);
    img.setAttribute("alt", photo.alt_description);
    img.setAttribute("title", photo.alt_description); */
    setAttribute(img, {
        src: photo.urls.regular,
        alt: photo.alt_description,
        title: photo.alt_description
    })
    // Put <img> inside <a> , then put both inside imageContainer Element
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}

// Get photos from Unsplash Api

async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    displayPhotos();
  } catch (err) {
    //catch error here
  }
}

// On Loading
getPhotos();
