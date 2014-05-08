$(function() {
    $(".tabs-to-dropdown").each(function() {
        var resizeTimeout   = 20;

        var tabBar          = $(this).children(".tab-bar");
        var tabList         = tabBar.children("ul");
        var tabListItem     = tabList.children("li");

        var dropdown        = $(this).children(".dropdown");
        var dropdownToggle  = dropdown.children(".dropdown-toggle");
        var dropdownList    = dropdown.children("ul");

        var tabsToDropdown  = function() {
            var tabBarWidth = tabBar.width();
            tabListItem.each(function(index) {
                var dropdownListItem  = dropdownList.children("li").eq(index);
                var tabListItemOffset = $(this).position().left + $(this).outerWidth();

                if (tabListItemOffset >= tabBarWidth) {
                    $(this).addClass("ttd-hide"); dropdownListItem.addClass("ttd-show");
                } else {
                    $(this).removeClass("ttd-hide"); dropdownListItem.removeClass("ttd-show");
                }
            });

            tabList.children(".ttd-hide").length != 0 ? dropdown.addClass("ttd-show"): dropdown.removeClass("ttd-show");
        };

        tabListItem.clone().appendTo(dropdownList);

        tabsToDropdown();
        $(window).bind("resize", function(){
            if(typeof sizeWait != "undefined") { clearTimeout(sizeWait) };
            sizeWait = setTimeout(function(){
                tabsToDropdown();
            },resizeTimeout);
        });

        dropdown.on("touchstart click", function(e) { e.stopPropagation() });
        dropdownToggle.on("touchstart click", function(e) { dropdown.toggleClass("ttd-open"); e.stopPropagation() });
        $(document).on("touchstart click", function() { dropdown.removeClass("ttd-open") });
    });
});
