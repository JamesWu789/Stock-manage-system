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

    // 按+號跳出視窗
    $("#plus-icon").click(function () {
        $(".modal, .overlay").removeClass("hidden");
    });

    $(".close-modal").click(function () {           // 按esc關閉
        $(".overlay, .modal").addClass("hidden");
    });

});