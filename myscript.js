var menuList=document.getElementById("menulist");
menuList.style.maxHeight="0px";
function togglemenu(){
        if(menuList.style.maxHeight =="0px")
            {
            menuList.style.maxHeight="450px";
            }
        else
            {
                menuList.style.maxHeight="0px";
            }

}


// top button script 

        var btn = $('#button');

        $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
        });

        btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300');
        });


