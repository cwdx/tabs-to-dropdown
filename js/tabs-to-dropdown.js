var tabbar         = $(".tabs-bar"),
    tabList        = tabbar.children(".tabs-list-container").children(".tabs-list"),
    tabListItem    = tabList.children("li"),

    dropdownToggle      = $("#dropdown-toggle"),
    dropdown            = $(".dropdown"),
    dropdownToBeToggled = $(".dropdown,#dropdown-toggle"),
    dropdownList        = dropdown.children("ul");

var tabsToList = function() {
    var tabbarMargin = parseInt(tabbar.css("left")) + parseInt(tabbar.css("right")),
        tabbarWidth  = tabbar.width() + tabbarMargin;

    tabListItem.each(function(index) {
        var dropdownListItem = dropdownList.children("li:eq("+index+")"),
            tabListItemOffset    = $(this).offset().left + $(this).outerWidth();

        if (tabListItemOffset >= tabbarWidth) {
            $(this).addClass("hide").find("a");
            dropdownListItem.addClass("show");
        } else {
            $(this).removeClass("hide");
            dropdownListItem.removeClass("show");
        }
    });
    tabList.children(".hide").length != 0 ?
    dropdownToBeToggled.addClass("show") :dropdownToBeToggled.removeClass("show");
};
$(window).on("load resize", tabsToList);

$(function(){
    tabListItem.on("hover click touchStart",function(e) { if ($(this).is(".hide")) e.preventDefault() });
    dropdownList.on("hover click touchStart",function(e) { if ($(this).parent().not(".open")) e.preventDefault() });
    tabListItem.clone().appendTo(dropdownList);
    dropdownList.click(function(e) { e.stopPropagation() });
    
    dropdownToggle.click(function(e) {
        e.stopPropagation();
        if (dropdownToBeToggled.is(".show")) dropdownToBeToggled.toggleClass("open");
    });
    $(document).click(function() {
        if (dropdownToBeToggled.is(".show")) dropdownToBeToggled.removeClass("open");
    });
})
// christian wijnia
