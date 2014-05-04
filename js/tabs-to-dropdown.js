var tabbar     = $(".tabs-bar"),
tabList        = tabbar.children(".tabs-list-container").children(".tabs-list"),
tabListItem    = tabList.children("li"),

dropdownToggle = $("#dropdown-toggle"),
dropdown       = $(".dropdown,#dropdown-toggle"),
dropdownList   = dropdown.children("ul");


var tabsToList = function() {
    tabbarMargin     = parseInt(tabbar.css("left")) + parseInt(tabbar.css("right")),
    var tabbarWidth  = tabbar.width() + tabbarMargin;

    tabListItem.each(function(index) {
        var dropdownListItem = dropdownList.children("li:eq("+index+")"),
        tabListItemOffset    = $(this).offset().left + $(this).outerWidth();

        if (tabListItemOffset >= tabbarWidth) {
            $(this).addClass("hide").find("a").on('click',function(e){e.preventDefault();});
            dropdownListItem.addClass("show");
        } else {
            $(this).removeClass("hide").find("a").off('click');;
            dropdownListItem.removeClass("show");
        }
    });
    tabList.children('.hide').length != 0 ?
    dropdown.addClass("show") :dropdown.removeClass("show");
};
$(window).on("load resize", tabsToList);

$(function(){
    tabListItem.clone().appendTo(dropdownList);

    dropdownList.click(function(e) {
        e.stopPropagation();
    });
    dropdownToggle.click(function(e) {
        e.stopPropagation();
        dropdown.toggleClass("open");
    });
    $(document).click(function() {
        dropdown.removeClass("open");
    });
})
