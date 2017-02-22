function invertColors(img) {
  var canvas = document.createElement('canvas');
  canvas.width = img.width;
  canvas.height = img.height;
  
  var ctx = canvas.getContext('2d');
  
  ctx.drawImage(img, 0, 0);
  var data = ctx.getImageData(0, 0, img.width, img.height).data;
  
  for (var i = 0; i < data.length; i += 4) {
    data[i] = 0xFF - data[i];
    data[i + 1] = 0xFF - data[i + 1];
    data[i + 2] = 0xFF - data[i + 2];
  }
  
  var inversedImageData = new ImageData(data, img.width, img.height);
  ctx.putImageData(inversedImageData, 0, 0);
  
  var inversedImg = document.createElement('img');
  inversedImg.width = img.width;
  inversedImg.height = img.height;
  inversedImg.src = canvas.toDataURL('image/png', 1);
  
  return inversedImg;
}
