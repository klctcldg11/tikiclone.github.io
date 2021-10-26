$(".item-collapse").on("click", function(){
    $(this).parent().toggleClass("show")

    let replaceText = $(this).parent().hasClass("show") ? "Thu gọn" : "Xem thêm";
    $(this).text(replaceText);
})