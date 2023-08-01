function toggleButtonColor(button) {
  if (button.style.backgroundColor === "black") {
    button.style.backgroundColor = "";
  } else {
    button.style.backgroundColor = "black";
  }
  if (button.style.color === "white") {
    button.style.color = "";
  } else {
    button.style.color = "white";
  }
}

function toggleSectionPrice(isSectionable) {
  const sectionPriceDiv = document.getElementById("floor");
  if (isSectionable) {
    sectionPriceDiv.style.display = "flex";
  } else {
    sectionPriceDiv.style.display = "none";
  }
}

function toggleSectionFloor(isSectionable) {
  const sectionPriceDiv = document.getElementById("at-floor");
  if (isSectionable) {
    sectionPriceDiv.style.display = "flex";
  } else {
    sectionPriceDiv.style.display = "none";
  }
}
