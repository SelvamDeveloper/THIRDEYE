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

// inspect disabled sripts 

document.addEventListener('keydown', function() {
    if (event.keyCode == 123) {
      alert("This function has been disabled to prevent you from stealing my code!");
      return false;
    } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
      alert("This function has been disabled to prevent you from stealing my code!");
      return false;
    } else if (event.ctrlKey && event.keyCode == 85) {
      alert("This function has been disabled to prevent you from stealing my code!");
      return false;
    }
  }, false);
  
  if (document.addEventListener) {
    document.addEventListener('contextmenu', function(e) {
      alert("This function has been disabled to prevent you from stealing my code!");
      e.preventDefault();
    }, false);
  } else {
    document.attachEvent('oncontextmenu', function() {
      alert("This function has been disabled to prevent you from stealing my code!");
      window.event.returnValue = false;
    });
  }
