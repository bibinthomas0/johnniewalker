function changeContent(imageSrc, text, textlink) {
  //   function to change image and the content
  const displayedImage = document.getElementById("display-image"); // getting the element with id, where the image will show
  const imageInfo = document.getElementById("content");
  const link = document.getElementById("link");
  displayedImage.src = imageSrc; //the image url is setting to the src of the element
  imageInfo.textContent = text; //the passed text passing to the element
  link.href = textlink; //setting up the link
  link.textContent = textlink;
}

function changeTheme() {
  //function to change theme
  const currentTheme = document.documentElement.getAttribute("data-theme"); //getting the current theme
  const changedTheme = currentTheme === "light" ? "dark" : "light"; //   if condition to find out the new theme
  localStorage.setItem("theme", changedTheme); //storing the preference to the local storage
  document.documentElement.setAttribute("data-theme", changedTheme); //changing the theme
}
