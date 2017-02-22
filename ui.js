var fileUploader = document.getElementById('file-upload');
var originalImg = document.getElementById('original');
var invertedImg = document.getElementById('inverted');
var downloadedFileNameInput = document.getElementById('download-name');
var downloader = document.getElementById('download');

fileUploader.addEventListener('change', function() {
  var file = fileUploader.files[0];
  var fileName = file.name;
  var reader = new FileReader();
        
  if (file instanceof File && /\.(jpe?g|png|gif)$/i.test(file.name)) {
    reader.addEventListener('load', function() {
      originalImg.src = this.result;
      
      var invertedImgDataURL = invertColors(originalImg).src;
      invertedImg.src = invertedImgDataURL;
      
      downloader.href = invertedImgDataURL;
      downloader.download = downloadedFileNameInput.input ? downloadedFileNameInput : '(inverted color) ' + fileName;
    });
            
    reader.readAsDataURL(file);
  } else {
    error('As of now, this tool only supports jpg, jpeg, png, and gif files.');
  }
});
