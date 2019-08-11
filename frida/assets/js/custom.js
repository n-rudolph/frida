var totalAmountOfPictures = images.length;

function loadPictures(maxImagesToLoad) {
    var lastPictureIndexShown = $('.my-work-image').length;
    var amountOfImagesLeft = totalAmountOfPictures - lastPictureIndexShown;
    var imagesToLoad = amountOfImagesLeft < maxImagesToLoad ? amountOfImagesLeft : maxImagesToLoad;
    var indexLimit = lastPictureIndexShown + imagesToLoad;
    for (var i = lastPictureIndexShown; i < indexLimit; i++) {
        var image = images[i];
        var element = '<div class="col-4 my-work-image" style="cursor: pointer;"><span class="image fit"><img src="images/fulls/'+image.name+'" alt="" onclick="openModal('+i+')" style="max-height: 450px"/></span></div>';
        $(element).insertBefore( $("#empty-spot") );
    }
    if ($('.my-work-image').length === totalAmountOfPictures) {
        $('#load-more-button').hide();
    }
}

function openModal(imageIndex) {
    $('#modal-image').attr({
        src: "images/fulls/"+images[imageIndex].name,
        alt: images[imageIndex].name +": "+images[imageIndex].description
    });
    $('#image-description').text(images[imageIndex].description);
    $('#image-modal').modal({
        fadeDuration: 1000,
        fadeDelay: 0.50
    });
}



$(window).on('load', function() {
   loadPictures(9);
});