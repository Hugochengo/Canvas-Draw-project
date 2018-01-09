var saveButton = document.getElementById('save')
var canvas = document.getElementById('canvas-real');

saveButton.addEventListener('click', saveImage, false);

function saveImage () {

    canvas.toBlob(function (blob) {
     var newImg = document.createElement('img')
     url = URL.createObjectURL(blob);

     newImg.onload = function () {
         URL.revokeObjectURL(url);
     };

     window.open(url);
     let a = document.createElement('a');
     a.href = url;
     a.download ='';
     a.click();


    });


}