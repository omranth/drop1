
let dropArea = document.getElementsByClassName("hero")[0];
let inputFile = document.getElementById("inpt-file");
let imgView = document.getElementsByClassName("img-view")[0];


// Upload image and display it
function uploadImage() {
    let imageLink = URL.createObjectURL(inputFile.files[0]);
    imgView.style.backgroundImage = `url(${imageLink})`;
    imgView.textContent = "";
    imgView.style.border = 0;
    console.log(inputFile.files);
}

// Event listeners for file upload
inputFile.addEventListener("change", uploadImage);
dropArea.addEventListener('dragover', function (e) {
    e.preventDefault();
});
dropArea.addEventListener('drop', function (e) {
    e.preventDefault();
    inputFile.files = e.dataTransfer.files;
    uploadImage();
});


