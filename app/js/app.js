function on_resize(){}function on_ready(){init_sliders();for(var e=0;e<all_sliders.length;e++)slider_go_to_page(e,0);slider_speed=800}function on_ready_after_load(){init_quantity_selecter()}function init_quantity_selecter(){$(".quantity_select .minus").click(function(){send_quantity(this,change_quantity(-1,this))}),$(".quantity_select .plus").click(function(){send_quantity(this,change_quantity(1,this))});for(var e=$(".quantity_select"),t=0;t<e.length;t++)change_quantity(0,e[t])}function send_quantity(e,t){var r=$(e).attr("product_id");$.ajax({url:"function/alter_cart.php",type:"GET",data:"update_quantity=&quantity="+t+"&product_id="+r}).success(function(e){})}function change_quantity(e,t){var r=$(t).parent().parent().parent(),s=$(r).find(".current_quantity"),i=$(s).html(),a=1*i+e;a<1&&(a=1),$(s).html(a);var n=$(r).find(".order_price").html().trim();n=n.substring(0,n.length-1);var l=1*n*a+"$",o=$(r).find(".total_order_price");return $(o).html(l),a}function slider_go_to_page(e,t){if(!sliding){sliding=!0;var r=all_sliders[e],s=!1;r.classList.contains("no_content")&&(s=!0);var i=$(".slider_list_container[slider_number='"+e+"']"),a=$(r).children().length-2;t>=a?t=0:t<0&&(t=a-1);var n=$(".slider_page[slider_number='"+e+"']"),l=n[t],o=l.getElementsByTagName("img")[0].src;l.parentNode.style.background="url("+o+") no-repeat center center",l.parentNode.style.backgroundSize="100% 100%",$(n).fadeToggle(slider_speed,function(){});for(var d=0;d<n.length;d++){var _=100*d-100*t+"%";$(n[d]).animate({left:_},0)}var c=slider_speed/2;s&&(c=0),$(n).fadeToggle(c,function(){sliding=!1});var g=":nth-child("+(t+1)+")";if($(r).hasClass("no_list")){if(!$(r).hasClass("no_dots")){var u=$(".slider_dots_container[slider_number='"+e+"']"),p=$(u).find(g);jQuery(u).find(".slider_dot").not(p).animate({backgroundColor:dot_not_selected_background,borderColor:border_not_selected_color},slider_speed),jQuery(p).animate({backgroundColor:dot_selected_background,borderColor:border_selected_color},slider_speed)}}else{var h=$(i).find(g).not("p");jQuery(i).find(".slider_list_object").not(h).animate({backgroundColor:not_selected_background,color:not_selected_color},slider_speed),jQuery(h).not("p").animate({backgroundColor:selected_background,color:selected_color},slider_speed)}current_page[e]=t}}function init_sliders(){function e(e,t){var r=$(t).attr("slider_number"),s=current_page[r]+1;e&&(s-=2),slider_go_to_page(r,s)}var t=document.getElementsByClassName("all_slider_container");$(t).css("visibility","visible");$(window).width();slider_dot_width="0.7";for(var r=0;r<t.length;r++){var s=t[r];$(s).attr("slider_number",r),current_page.push(0),all_sliders.push(s);var i=s.getElementsByClassName("slider_page"),a=i.length,n=$(s).parent();if($(s).hasClass("no_list")){if(!$(s).hasClass("no_dots")){var l=$("<div class = 'slider_dots_container center_horizontally_css'>"),o=$("<div class = 'inner_dots_container full_height center_horizontally_css'>");$(l).attr("slider_number",r),$(o).attr("slider_number",r),$(l).append(o),$(n).append(l)}}else{var d=$("<div class = 'slider_list_container'>");$(d).attr("slider_number",r);var _=100/a+"%";$(n).append(d)}for(var c=0;c<i.length;c++){var g=i[c];$(g).attr("slider_number",r);var u=100*c+"%";$(g).css("left",u);var p;if($(s).hasClass("no_list")){if(!$(s).hasClass("no_dots")){var h=$("<div class = 'slider_dot'>");$(h).css("width",slider_dot_width+"vw"),$(h).css("margin-left",2*slider_dot_width+"vw"),$(o).append(h),p=h}}else{var f=document.createElement("div");f.className+="slider_list_object",$(f).css("width",_);var v=g.id,m=$("<p class = 'list_object_text center_vertically_css'>");$(m).html(v),$(d).append(f),$(f).append(m),$(m).attr("slider_number",r),$(f).attr("slider_number",r),p=f}$(p).click(function(){var e=this.parentNode,t=Array.prototype.indexOf.call(e.children,this),r=$(e).attr("slider_number");slider_go_to_page(r,t)})}if(!$(s).hasClass("no_arrows")){var b=$("<img class = 'slider_arrow slider_arrow_left' src='img/left_d.svg'>"),y=$("<img class = 'slider_arrow slider_arrow_right' src='img/right_d.svg'>");$(b).attr("slider_number",r),$(y).attr("slider_number",r),$(s).append(b),$(s).append(y),$(b).click(function(){e(!0,this)}),$(y).click(function(){e(!1,this)})}}}function moveBackground(){x+=(lFollowX-x)*friction,y+=(lFollowY-y)*friction,translate="translate("+x+"px, "+y+"px) scale(1.1)",$(".bg").css({"-webit-transform":translate,"-moz-transform":translate,transform:translate}),window.requestAnimationFrame(moveBackground)}function on_ready_grid(){init_grids()}function init_grids(){for(var e=document.getElementsByClassName("grid_container"),t=0;t<e.length;t++){var r=e[t],s=r.getElementsByClassName("grid_temp_holder")[0],i=r.getElementsByClassName("grid_item");if(isDesktop()){var a=$(s).find(".grid_item[size=big]"),n=$(s).find(".grid_item[size=medium]"),l=$(s).find(".grid_item[size=small]");$(i).css("marginLeft",gap_size+"%"),$(i).css("marginTop",gap_size+"vh");for(var o=[],d=0;d<4;d++){var _=document.createElement("div");_.className="grid_part",$(_).attr("filled",0),o[d]=_,$(r).append(_)}var c=100-gap_size,g=100-gap_size;$(a).css("width",c+"%"),$(a).css("height",g+"%");for(var d=0;d<a.length;d++){var u=a[d],p=$(o).filter("[filled=0]").first();p.append(u),p.attr("filled",4)}var c=100-gap_size,g=50-gap_size;$(n).css("width",c+"%"),$(n).css("height",g+"%");for(var d=0;d<n.length;d++){var u=n[d],h=$(o).filter("[filled=0]").first();if(h.length>0)$(h).append(u),$(h).attr("filled",2);else{var f=$(o).filter("[filled=2]").first();f.length>0&&($(f).append(u),$(f).attr("filled",4))}}var c=50-gap_size,g=50-gap_size;$(l).css("width",c+"%"),$(l).css("height",g+"%");for(var d=0;d<l.length;d++){var u=l[d],p=$(o).not("[filled=4]").first(),v=1*$(p).attr("filled");$(p).append(u),$(p).attr("filled",v+1)}Math.ceil(i.length/items_per_part)}else{var _=document.createElement("div");_.className="grid_part",$(r).append(_);for(var d=0;d<i.length;d++)$(_).append(i[t])}$(s).remove()}}function set_text_color(e){for(var t=0;t<e.length;t++){var r=e[t],s=r.getElementsByTagName("img")[0],i=r.getElementsByTagName("h1")[0],a=Math.round(getAverageRGB(s)),n=a;n=n>10?30:250,n="rgb("+n+", "+n+", "+n+")",$(i).css("color",n)}}function getAverageRGB(e){var t,r,s,i,a={r:0,g:0,b:0},n=document.createElement("canvas"),l=n.getContext&&n.getContext("2d"),o=-4,d={r:0,g:0,b:0},_=0;if(!l)return a;s=n.height=e.naturalHeight||e.offsetHeight||e.height,r=n.width=e.naturalWidth||e.offsetWidth||e.width,l.drawImage(e,0,0,r,.3*s);try{t=l.getImageData(0,0,r,s)}catch(e){return a}for(i=t.data.length;(o+=20)<i;)++_,d.r+=t.data[o],d.g+=t.data[o+1],d.b+=t.data[o+2];d.r=~~(d.r/_),d.g=~~(d.g/_),d.b=~~(d.b/_);d.r,d.g,d.b;return(d.r+d.g+d.b)/3}function init_part(e,t,r,s){}function on_ready_load_images(){for(var e=$("[src_desktop_only]"),t=0;t<e.length;t++){var r=e[t];if(isDesktop()){var s=$(r).attr("src_desktop_only");$(r).attr("src",s)}}}function isDesktop(){return"none"!=$("#desktop_check").css("display")}function on_ready_slider(){init_sliders();for(var e=0;e<all_sliders.length;e++)slider_go_to_page(e,0);slider_speed=600,$(".all_slider_container").css("visibility","visible")}function slider_go_to_page(e,t){if(!(section_currently_sliding=!1)){section_currently_sliding=!0;var r=all_sliders[e],s=$(".slider_list_container[slider_number='"+e+"']");$(r).hasClass("no_auto_slide")||(clearInterval(intervals[e]),enable_autoslide(e));var i=$(r).children().length-2;if(i>0){t>=i?t=0:t<0&&(t=i-1);var a=$(".slider_page[slider_number='"+e+"']"),n=a[t],l=current_page[e],o=a[l];$(a).css("opacity","0"),$(o).css("opacity","1"),$(n).css("z-index","15"),$(o).css("z-index","10"),$(n).animate({opacity:1},slider_speed,function(){section_currently_sliding=!1});var d=":nth-child("+(t+1)+")";if($(r).hasClass("no_list")){if(!$(r).hasClass("no_dots")){var _=$(".slider_dots_container[slider_number='"+e+"']"),c=$(_).find(d);jQuery(_).find(".slider_dot").not(c).animate({backgroundColor:dot_not_selected_background,borderColor:border_not_selected_color},slider_speed),jQuery(c).animate({backgroundColor:dot_selected_background,borderColor:border_selected_color},slider_speed)}}else{var g=$(s).find(d).not("p");jQuery(s).find(".slider_list_object").not(g).animate({backgroundColor:not_selected_background,color:not_selected_color},slider_speed),jQuery(g).not("p").animate({backgroundColor:selected_background,color:selected_color},slider_speed)}current_page[e]=t}}}function move_section(e,t){var r=$(t).attr("slider_number"),s=current_page[r]+1;e&&(s-=2),slider_go_to_page(r,s)}function init_sliders(){var e=document.getElementsByClassName("all_slider_container");$(e).css("visibility","visible");$(window).width();slider_dot_width="1.0";for(var t=0;t<e.length;t++){var r=e[t];$(r).attr("slider_number",t),current_page.push(0),all_sliders.push(r);var s=r.getElementsByClassName("slider_page"),i=s.length,a=$(r).parent();if($(r).hasClass("no_auto_slide")||enable_autoslide(t),$(r).hasClass("no_list")){if(!$(r).hasClass("no_dots")){var n=$("<div class = 'slider_dots_container center_horizontally_css'>"),l=$("<div class = 'inner_dots_container full_height center_horizontally_css'>");$(n).attr("slider_number",t),$(l).attr("slider_number",t),$(n).append(l),$(a).append(n)}}else{var o=$("<div class = 'slider_list_container'>");$(o).attr("slider_number",t);var d=100/i+"%";$(a).append(o)}for(var _=0;_<s.length;_++){var c=s[_];$(c).attr("slider_number",t);var g;if(!$(r).hasClass("no_list")){var u=document.createElement("div");u.className+="slider_list_object",$(u).css("width",d);var p=c.id,h=$("<p class = 'list_object_text center_vertically_css'>");$(h).html(p),$(o).append(u),$(u).append(h),$(h).attr("slider_number",t),$(u).attr("slider_number",t),g=u}if(!$(r).hasClass("no_dots")&&(!$(r).hasClass("desktop_only")||isDesktop())){var f=$("<div class = 'slider_dot'>"),v=slider_dot_width;$(f).css("width",v+"vw"),$(f).css("height",v+"vw"),$(f).css("margin-left",2*v+"vw"),_==s.length-1&&$(f).css("margin-right",2*v+"vw"),$(l).append(f),g=f}$(g).click(function(){var e=this.parentNode,t=Array.prototype.indexOf.call(e.children,this),r=$(e).attr("slider_number");slider_go_to_page(r,t)})}if($(r).hasClass("no_arrows")){var m=$("<img class = '' src=''>"),b=$("<img class = '' src=''>");$(r).append(m),$(r).append(b)}else if(!$(r).hasClass("desktop_only")||isDesktop()){var m=$("<img class = 'slider_arrow slider_arrow_left' src='img/Index_slider/left_arrow.svg'>"),b=$("<img class = 'slider_arrow slider_arrow_right' src='img/Index_slider/right_arrow.svg'>");$(m).attr("slider_number",t),$(b).attr("slider_number",t),$(r).append(m),$(r).append(b),$(m).click(function(){move_section(!0,this)}),$(b).click(function(){move_section(!1,this)})}}}function reenable_effects(e){}function enable_autoslide(e){if(isDesktop()){var t=all_sliders[e],r=setInterval(function(){move_section(!1,t)},5e3);intervals[e]=r}}$(document).ready(on_ready),$(window).resize(on_resize);var current_page=[],all_sliders=[],slider_speed=0,selected_background="#fe7e17",not_selected_background="#999999",selected_color="white",not_selected_color="black",dot_selected_background="white",dot_not_selected_background="gray",border_selected_color="gray",border_not_selected_color="gray",slider_dot_width=0,sliding=!1,lFollowX=0,lFollowY=0,x=0,y=0,friction=1/30;$(window).on("mousemove click",function(e){var t=Math.max(-100,Math.min(100,$(window).width()/2-e.clientX)),r=Math.max(-100,Math.min(100,$(window).height()/2-e.clientY));lFollowX=20*t/100,lFollowY=10*r/100}),moveBackground(),$(document).ready(on_ready_grid);var items_per_part=4,gap_size=1;$("iframe").load(function(){$(this).contents().find("img").css({with:"100%",height:"100%"})}),$(document).ready(on_ready_load_images);var McButton=$("[data=hamburger-menu]"),McBar1=McButton.find("b:nth-child(1)"),McBar2=McButton.find("b:nth-child(2)"),McBar3=McButton.find("b:nth-child(3)");McButton.click(function(){$(this).toggleClass("active"),McButton.hasClass("active")?(McBar1.velocity({top:"50%"},{duration:200,easing:"swing"}),McBar3.velocity({top:"50%"},{duration:200,easing:"swing"}).velocity({rotateZ:"90deg"},{duration:800,delay:200,easing:[500,20]}),McButton.velocity({rotateZ:"135deg"},{duration:800,delay:200,easing:[500,20]})):(McButton.velocity("reverse"),McBar3.velocity({rotateZ:"0deg"},{duration:800,easing:[500,20]}).velocity({top:"100%"},{duration:200,easing:"swing"}),McBar1.velocity("reverse",{delay:800}))}),$(document).ready(on_ready_slider);var section_currently_sliding=!1,current_page=[],all_sliders=[],slider_speed=0,intervals=[],selected_background="#1c2d84",not_selected_background="#AAAAAA",selected_color="white",not_selected_color="black",dot_selected_background="white",dot_not_selected_background="gray",border_selected_color="gray",border_not_selected_color="gray";