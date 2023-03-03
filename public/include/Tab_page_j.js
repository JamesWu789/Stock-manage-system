$(function () {

    // hover更改顏色
    const topic = $(".btn-group").find("a");
    topic.fadeTo(1, 0.5);
    topic.mouseenter(function () {   //hover
        $(this).stop().fadeTo(200, 1);//css("background-color", "rgba(180, 180, 30, 0.8)");
        topic.mouseleave(function () {   //hover
            $(this).stop().fadeTo(100, 0.7);
        });
    });


    // 按+號跳出視窗
    $("#plus-icon").click(function () {
        $(".modal, .overlay").removeClass("hidden");
    });

    $(".close-modal").click(function () {       // 按esc關閉 
        $(".overlay, .modal").addClass("hidden");
        $("form").submit(function () {                  // 按esc後避免回傳post
            return false;
        });
    });

    $(".Add-data").click(function () {                  // 按button後關閉表單
        $(".overlay, .modal").addClass("hidden");
    });

    //table專用
    let $table = $('.scroll'),
        $bodyCells = $table.find('tbody tr:first').children(),
        colWidth;
    // Adjust the width of thead cells when window resizes
    $(window).resize(function () {
        // Get the tbody columns width array
        colWidth = $bodyCells.map(function () {
            return $(this).width();
        }).get();
        // Set the width of thead columns
        $table.find('thead tr').children().each(function (i, v) {
            $(v).width(colWidth[i]);
        });
    }).resize();


    // table sorter
    $("#myTable").tablesorter({ sortList: [[0, 0], [1, 0]] });

});

