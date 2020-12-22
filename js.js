/*-----------SearchBar-----------------*/
jQuery(document).ready(function(){
    jQuery("#searchIcon").click(function(){
        jQuery(".searchBox").addClass('showsearchBox');
		
    });
    jQuery("#close-search").click(function(){
        jQuery(".show-search").css("display","none");
        jQuery(".close-search").css("display","none");
		 jQuery(".search-click").css("display","block");
    });
});

