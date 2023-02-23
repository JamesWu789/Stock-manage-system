$(function () {

    // hover更改顏色
    const topic = $(".btn-group").find("a");
    topic.fadeTo(1, 0.5);
    topic.mouseenter(function () {   //hover
        $(this).stop().fadeTo(300, 1);//css("background-color", "rgba(180, 180, 30, 0.8)");
        topic.mouseleave(function () {   //hover
            $(this).stop().fadeTo(100, 0.7);
        });
    });

    // 製作tabs
    $("#tabs").tabs();
});


