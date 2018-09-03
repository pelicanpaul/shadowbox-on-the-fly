jQuery(document).ready(function ($) {

    Shadowbox.init({
        overlayOpacity: 0.75,
        onOpen: function () {

        },
        onClose: function () {

        }
    });

    var gallery = $('.gallery');
    gallery.prepend('<div class="gallery-note">VIEW GALLERY +</div>');

    $('.gallery-icon').each(function () {
        var src = $(this).find('img').attr('src');

        $(this).find('a').attr({'rel': 'shadowbox[hc-gallery]', 'href': src});
    });

    $('.gallery-icon a').on('click', function (e) {
        e.preventDefault();

    });


    $('.gallery-note a').click(function (e) {
        e.preventDefault();

        var firstLink = $(this).closest('.gallery').find('.gallery-icon').find('a');

        firstLink.click();


    });

});

