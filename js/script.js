$(document).ready(function () {
    $("#image-1").click(function () {
        $("#showDesign").toggle();
    });
});

$(document).ready(function () {
    $("#image-2").click(function () {
        $("#showDevelopment").toggle();
    });
});

$(document).ready(function () {
    $("#image-3").click(function () {
        $("#showProduct").toggle();
    });
});

$(document).ready(function () {
    $("#pic1").mouseover(function () {
        $(".text1").show();
    }).mouseout(function () {
        $(".text1").hide();
    });
});





