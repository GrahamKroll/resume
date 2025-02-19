// Get the modal
var modal = document.getElementById("myModal");

// Get the images and insert them inside the modal
var img = document.getElementsByClassName("thumb");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var descriptionText = document.getElementById("description");

// Loop through each image
for (var i = 0; i < img.length; i++) {
    img[i].onclick = function() {
        var imageWrapper = this.parentElement;
        var descriptionBox = imageWrapper.getElementsByClassName("description-box")[0];
        
        modal.style.display = "block";
        modalImg.src = this.src;
        descriptionText.innerHTML = descriptionBox.textContent; // Copy description from description box
    }
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}
