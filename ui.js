var fileUploader = document.getElementById('file-upload');
var originalImg = document.getElementById('original');
var invertedImg = document.getElementById('inverted');

fileUploader.addEventListener('change', function() {
  var file = fileUploader.files[0];
  var reader = new FileReader();
        
  if (file instanceof File && /\.(jpe?g|png|gif)$/i.test(file.name)) {
    reader.addEventListener('load', function() {
      originalImg.src = this.result;
      invertedImg.src = invertColors(originalImg).src;
    });
            
    reader.readAsDataURL(file);
  } else {
    error('As of now, this tool only supports jpg, jpeg, png, and gif files.');
  }
});
