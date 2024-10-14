$(document).ready(function () {
    // Hide Loading Box (Preloader)
    function handlePreloader() {
        if ($('.loader-wrap').length) {
            $('.loader-wrap').delay(1000).fadeOut(500);
        }
    }

    // Close preloader on click
    if ($(".preloader-close").length) {
        $(".preloader-close").on("click", function () {
            $('.loader-wrap').delay(200).fadeOut(500);
        });
    }

    // Update Header Style and Scroll to Top
    function headerStyle() {
        if ($('.main-header').length) {
            var windowpos = $(window).scrollTop();
            var siteHeader = $('.main-header');
            var scrollLink = $('.scroll-top');
            if (windowpos >= 110) {
                siteHeader.addClass('fixed-header');
                scrollLink.addClass('open');
            } else {
                siteHeader.removeClass('fixed-header');
                scrollLink.removeClass('open');
            }
        }
    }
    
    headerStyle();

    // Submenu Dropdown Toggle
    if ($('.main-header li.dropdown ul').length) {
        $('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>');
    }

    // Mobile Nav Hide Show
    if ($('.mobile-menu').length) {
        $('.mobile-menu .menu-box').mCustomScrollbar();

        var mobileMenuContent = $('.main-header .menu-area .main-menu').html();
        $('.mobile-menu .menu-box .menu-outer').append(mobileMenuContent);
        $('.sticky-header .main-menu').append(mobileMenuContent);
        
        // Dropdown Button
        $('.mobile-menu li.dropdown .dropdown-btn').on('click', function () {
            $(this).toggleClass('open');
            $(this).prev('ul').slideToggle(500);
        });

        // Menu Toggle Btn
        $('.mobile-nav-toggler').on('click', function () {
            $('body').addClass('mobile-menu-visible');
        });

        // Close Mobile Menu
        $('.mobile-menu .menu-backdrop, .mobile-menu .close-btn').on('click', function () {
            $('body').removeClass('mobile-menu-visible');
        });
    }
    
    // Initialize preloader on page load
    handlePreloader();
});
