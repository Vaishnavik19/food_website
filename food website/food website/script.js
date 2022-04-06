$(document).ready(function(){                       // The 'ready()' method is used to make a function available after the document is loaded.

    $('#menu-bar').click(function(){
        $(this).toggleClass('fa-times');            // toggleClass here toggles between classes 'fas fa-hamburger' and 'fa-times' in same element
        $('.navbar').toggleClass('nav-toggle');     // toggleClass here toggles between classes 'nav' and 'nav-toggle' in same element
    });

    $(window).on('load scroll',function(){

        $('#menu-bar').removeClass('fa-times');        // removes the 'fa-times' class
        $('.navbar').removeClass('nav-toggle');        // removes the 'nav-toggle' class

        $('section').each(function(){

            let top = $(window).scrollTop();        // scrollTop() sets or returns the vertical scrollbar position for the selected elements to variable 'top'
            let height = $(this).height();         // height() method sets or returns the height of the selected elements.
            let id = $(this).attr('id');           // here, returns the value of attribute of current element
            let offset = $(this).offset().top - 200;       // here, 'offset().top' returns the value of current scrollbar's exact position wrt document
                                                            //which is subtracted from 200

            if(top > offset && top < offset + height){
                $('.navbar ul li a').removeClass('active');         // removes the class 'active' present in navbar anchors -- which is currently in 'home' anchor tag 
                $('.navbar').find(`[href="#${id}"]`).addClass('active');        // here, find() finds the 'id' location by matching 'href = "#${id_name}"' and adds the class 'active' to it
                                                                                // eg. $('.navbar').find(`[href="#about"]`).addClass('active');  
            }

        });

    });

    $('.list .btn').click(function(){                                   // here 'this' refers to whatever has been clicked
        $(this).addClass('active').siblings().removeClass('active');    // ie. remove the 'active' class from current element and add it to clicked element 
        let src = $(this).attr('data-src');             // here, returns the attribute value of 'data-src' of clicked element(using 'this') to the variable 'src'
        $('.menu .row .image img').attr('src',src);     // here, sets the 'src' attribute value of clicked element  -- which in our case can display
                                                                                                    // image of breakfast/ Lunch/ dinner/ Dessert
    });

    $('.submit').click(function(){
        alert("Thanks for visiting !! we will contact you soon.")    // On clicking submit button, will display this alert message
      })

});