$(function () {
    $('.thumbnail').click(function (event) {
        // var catImage = $(this).children('img').attr('src')
        // var img = $('<img id="dynamic">');
        // $('<img id="dynamic">').attr('src', catImage);
        // $('.hero').html(img).attr(src);

        var catImage = $(this).find('img').attr('src');
        $('.hero img').attr('src', catImage);

        //       $("p").css("color": "red");

        //        $ = jQuery
        //        ("p") = target
        //        . = connecting the target with the action
        //        css("color": "red") = action


    });
});
