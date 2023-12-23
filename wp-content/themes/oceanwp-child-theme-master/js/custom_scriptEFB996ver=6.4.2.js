//jQuery('.pt-cv-meta-fields').prepend('<img src="'+SiteUrl.siteurl+'/wp-content/uploads/2023/05/Date_range_fill.svg">');
//jQuery(document).ready(function() {
jQuery(document).ajaxComplete(function(){
	  jQuery('.cv-pageitem-prev').find('a').html("Previous Page");
	  jQuery('.cv-pageitem-next').find('a').html("Next Page");
      });

jQuery(document).ready(function() {
	 jQuery('.page-id-3930').find('.wp-image-4847').attr("src","https://colabwebsitedemo.com/dms/wp-content/uploads/2023/09/homelogo.svg");
	 jQuery('.page-id-3676').find('.wp-image-4847').attr("src","https://colabwebsitedemo.com/dms/wp-content/uploads/2023/09/homelogo.svg");
	 //page-id-4035
	 jQuery('.page-id-4035').find('.wp-image-4847').attr("src","https://colabwebsitedemo.com/dms/wp-content/uploads/2023/09/homelogo.svg");
	 jQuery('.page-id-5763').find('.wp-image-4847').attr("src","https://colabwebsitedemo.com/dms/wp-content/uploads/2023/09/homelogo.svg");
	 jQuery('.page-id-6480').find('.wp-image-4847').attr("src","https://colabwebsitedemo.com/dms/wp-content/uploads/2023/09/homelogo.svg");
	//blog Page 
	 jQuery('.entry-date').prepend('<img src="'+SiteUrl.siteurl+'/wp-content/uploads/2023/07/iconmonstr-calendar-4.png">');
	 jQuery('.pt-cv-readmore').append('<img src="'+SiteUrl.siteurl+'/wp-content/uploads/2023/07/Polygon-9.png">');
	
	 jQuery('.cv-pageitem-prev').find('a').html("Previous Page");
	 jQuery('.cv-pageitem-next').find('a').html("Next Page");
	
	 
	//svg replacement
	 jQuery("#no_padding_btn").find("i").remove();
	 jQuery("#no_padding_btn").find(".elementor-button-icon").append("<img src='https://colabwebsitedemo.com/dms/wp-content/uploads/2023/07/iconmonstr-arrow-right-thin.svg' class='mkc_arrow'>");
	 jQuery("#ws_btn").find("i").remove();
	 jQuery("#ws_btn").find(".elementor-button-icon").append("<img src=' https://colabwebsitedemo.com/dms/wp-content/uploads/2023/07/iconmonstr-arrow-right-thin-1.svg' class='mkc_arrow_white'>");
	
	//no_padding_button_white
    //main menu jquery start
	jQuery('#menu-item-6047 a').append("<div class='extra_menu_info'>Accept credit, debit and eCheck payments across multiple channels.</div>");
    jQuery('#menu-item-6046 a').append("<div class='extra_menu_info'>20+ features that simplify the payment collection process.</div>");
	jQuery('#menu-item-7574 a').append("<div class='extra_menu_info'>Find solutions that fit the workflow of your business and industry.</div>");
	jQuery('#menu-item-6044 a').append("<div class='extra_menu_info'>Find solutions that fit the workflow of your business and industry.</div>");
	jQuery('#menu-item-6045 a').append("<div class='extra_menu_info'>Find solutions that fit the workflow of your business and industry.</div>");
	jQuery('#menu-item-6042 a').append("<div class='extra_menu_info'>Reduce your liability when handling customer card data.</div>");
	jQuery('#menu-item-6047').addClass("main_ptk");
	jQuery('#menu-item-6046').addClass("main_ptk");
	jQuery('#menu-item-7574').addClass("main_ptk");
	jQuery('#menu-item-6044').addClass("main_ptk");
	jQuery('#menu-item-6045').addClass("main_ptk");
	jQuery('#menu-item-6042').addClass("main_ptk");
	
	jQuery('#menu-item-1304').addClass("sub_main_ptk");
	jQuery('#menu-item-1305').addClass("sub_main_ptk");
	jQuery('#menu-item-1306').addClass("sub_main_ptk");
	jQuery('#menu-item-1307').addClass("sub_main_ptk");
	jQuery('#menu-item-1308').addClass("sub_main_ptk");
	 //main menu jquery start
	 //parnter&resources slider buttons
	 var slide_counter = 0;
	jQuery("#pr_slider_pre i").click(function(){
	
		if(slide_counter > 0){
			slide_counter--;
		jQuery('#payment_slide_main_flex_wrapper').animate({left: '+=100%'}, "slow");
		}
	});
	jQuery("#pr_slider_next i").click(function(){
		
		if(slide_counter < 4)
		{
		  slide_counter++;
		  
		jQuery('#payment_slide_main_flex_wrapper').animate({left: '-=100%'}, "slow");
		}	
	});
	 //partners&resources start
	jQuery("#payment_slide_tab_1").click(function(){
	 jQuery('#payment_slide_main_flex_wrapper').animate({left: '0%'}, "slow");
	 jQuery(".o_img").animate({opacity: '0'}, 200);
	 jQuery(".b_img").animate({opacity: '1'}, 200);
	 jQuery(this).find(".b_img").animate({opacity: '0'}, 200);
	 jQuery(this).find(".o_img").animate({opacity: '1'}, 200);
    }); 
    ////////////////////////////////////////////////////////
	jQuery("#payment_slide_tab_2").click(function(){
	 jQuery('#payment_slide_main_flex_wrapper').animate({left: '-100%'}, "slow");
	 jQuery(".o_img").animate({opacity: '0'}, 200);
	 jQuery(".b_img").animate({opacity: '1'}, 200);
	 jQuery(this).find(".b_img").animate({opacity: '0'}, 200);
	 jQuery(this).find(".o_img").animate({opacity: '1'}, 200);
    }); 
	/////////////////////////////////////////////////////////
	jQuery("#payment_slide_tab_3").click(function(){
	 jQuery('#payment_slide_main_flex_wrapper').animate({left: '-200%'}, "slow");
	 jQuery(".o_img").animate({opacity: '0'}, 200);
	 jQuery(".b_img").animate({opacity: '1'}, 200);
	 jQuery(this).find(".b_img").animate({opacity: '0'}, 200);
	 jQuery(this).find(".o_img").animate({opacity: '1'}, 200);
    }); 
	/////////////////////////////////////////////////////////
	jQuery("#payment_slide_tab_4").click(function(){
	 jQuery('#payment_slide_main_flex_wrapper').animate({left: '-300%'}, "slow");
	 jQuery(".o_img").animate({opacity: '0'}, 200);
	 jQuery(".b_img").animate({opacity: '1'}, 200);
	 jQuery(this).find(".b_img").animate({opacity: '0'}, 200);
	 jQuery(this).find(".o_img").animate({opacity: '1'}, 200);
    });  
	/////////////////////////////////////////////////////////
   jQuery("#payment_slide_tab_5").click(function(){
	 jQuery('#payment_slide_main_flex_wrapper').animate({left: '-400%'}, "slow");
	 jQuery(".o_img").animate({opacity: '0'}, 200);
	 jQuery(".b_img").animate({opacity: '1'}, 200);
	 jQuery(this).find(".b_img").animate({opacity: '0'}, 200);
	 jQuery(this).find(".o_img").animate({opacity: '1'}, 200);
    });  
	//partners&resources end
	//hover animations
	jQuery("#no_padding_btn").hover(function(){
      jQuery(this).find('img').animate({left: '28px'}, "slow");
    }, function(){
    jQuery(this).find('img').animate({left: '18px'}, "slow");
                 });
	jQuery("#ws_btn").hover(function(){
      jQuery(this).find('img').animate({left: '15px'}, "slow");
    }, function(){
    jQuery(this).find('img').animate({left: '5px'}, "slow");
                 });
	
	jQuery("#ws_btn").hover(function(){
      jQuery(this).find('i').animate({left: '10px'}, "slow");
    }, function(){
    jQuery(this).find('i').animate({left: '0px'}, "slow");
                 });
	
	//home_hero_trans_btn
	jQuery("#home_hero_trans_btn").hover(function(){
      jQuery(this).find('i').animate({left: '10px'}, "slow");
    }, function(){
    jQuery(this).find('i').animate({left: '0px'}, "slow");
                 });
	jQuery("#home_hero_trans_btn_2").hover(function(){
      jQuery(this).find('i').animate({left: '10px'}, "slow");
    }, function(){
    jQuery(this).find('i').animate({left: '0px'}, "slow");
                 });
	//hover animations
	
jQuery(window).scroll(function() {
  var scroll = jQuery(window).scrollTop();

  if (scroll >= 100) { // Change '100' to the desired scroll position
    jQuery('#site-header').addClass('sticky_header');
  } else {
    jQuery('#site-header').removeClass('sticky_header');
  }
});
	
});