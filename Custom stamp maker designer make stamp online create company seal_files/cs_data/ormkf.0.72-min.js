$(document).ready(function(){if(window.mobile_f||(window.mobile_f=0),$("#maket_otf_no").click(function(){$("#in-s4-ds").hide(),$("#in-sf-di-ds").hide()}),$("#stamp_sav").click(function(){var a="";return $(".in_text").each(function(){""==$(this).val()&&(a+="#"+this.id.replace(/[^+\d]/g,"")+",")}),""==a?void($("#dord_mak_m").show(),$("#in-sf-di-ds").show(),GA_cel("but-dwn")):($("#in-soo4-ds span").text(a),$("#in-s4-ds").show(),void $("#in-sf-di-ds").show())}),$("#d-oshn-mail-ds").keyup(function(){mailValid($("#d-oshn-mail-ds").val())?$(this).removeClass("m-ini-ds"):$(this).addClass("m-ini-ds")}),0<$("#ram_ordm3").length&&(0==mobile_f||0!=mobile_f_w?$("#ram_ordm3").css("top","32px"):$("#ram_ordm3").css("top","32"),$("#dord_mak_m").show(),$("#in-sf-di-ds").show(),$("#dord_mak_m").live("hide",function(){0==mobile_f||0!=mobile_f_w?$("#ram_ordm3").css("top","385px"):$("#ram_ordm3").css("top","550px")}),$("#bu-al-ok").click(function(){$("#dord_mak_m").hide(),$("#in-sf-di-ds").hide()}),$("#bu-al-no").click(function(){0==mobile_f||0!=mobile_f_w?$("#ram_ordm3").animate({top:"385px"},200):$("#ram_ordm3").animate({top:"550px"},200)})),0<$("#mak_svg_c").length){$("#in-sf-di-ds").show(),$("#in-sfsl-ds").show();setTimeout(function(){Svg_load(),1>$("#ram_ordm3").length&&$("#in-sf-di-ds").hide(),$("#in-sfsl-ds").hide()},50)}if(0<$("#mak_pid_c").length){var a=$("#mak_pid_c").children();LoadPat(a,0),a.remove()}$("#bu-ptip-no").click(function(){0==mobile_f||0!=mobile_f_w?$("#ram_ordm5").animate({top:"385px"},200):$("#ram_ordm5").animate({top:"550px"},200)}),$(".d-osh-no-ds").click(function(){0==mobile_f||0!=mobile_f_w?$("#ram_ordm").animate({top:"385px"},200):$("#ram_ordm").animate({top:"550px"},200)}),$(".bd-osh-no-ds").click(function(){var a;switch(this.id){case"bd1-osh-no-ds":a="png";break;case"bd2-osh-no-ds":a="svg";break;case"bd3-osh-no-ds":a="pdf";break;case"bd4-osh-no-ds":a="docx";}GA_cel(a),$("#pay_typ_doc").val(a),$("#dord_mak_m-t2-ds span").text($("#typ_d_"+a+" span").text()),$("#pay_svg font").text($("#typ_d_"+a+" span").text()),$("#ch_price").text($("#typ_d_"+a+" span").text()),$("#ch_trf").html($("#typ_d_"+a+" b").text().split(" ")[0]+" ("+$("#typ_d_"+a).next().html()+")");$("#pci_c").val();0==mobile_f||0!=mobile_f_w?$("#ram_ordm").animate({top:"32px"},200):$("#ram_ordm").animate({top:"0"},200)}),$("#go_pay_svg").click(function(){if(0<$("#sto-dw-k").length){var a=$("input[type=radio][name=\"pay_typ_ra\"]:checked").val(),b=$("#pci_c").val();return void ORSVGOT("8",b,$("#pay_typ_doc").val(),a)}var c=$("#d-oshn-mail-ds").val();return""==c?($("#h-b-c-ds").text(t139),$("#h-b-ds").css({display:"block",left:$("#d-oshn-mail-ds").offset().left-50+"px",top:$("#d-oshn-mail-ds").offset().top-28+"px"}),void $("#c-c-ds").click(function(a){$(a.target).closest("#go_pay_svg").length||($("#h-b-ds").css("display","none"),$(this).unbind("click"))})):mailValid(c)?void($("#ch_mail").text(c),0==mobile_f||0!=mobile_f_w?$("#ram_ordm5").animate({top:"32px"},200):$("#ram_ordm5").animate({top:"0"},200),GA_cel("go-pay-list")):($("#h-b-c-ds").text(t141),0==mobile_f||0!=mobile_f_w?$("#h-b-ds").css({display:"block",left:"180px",top:"220px"}):$("#h-b-ds").css({display:"block",left:"130px",top:"250px"}),void $("#c-c-ds").click(function(a){$(a.target).closest("#pay_svg").length||($("#h-b-ds").css("display","none"),$(this).unbind("click"))}))}),$("input[type=radio][name=\"pay_typ_ra\"]").change(function(){"ab"==$(this).val()||"st"==$(this).val()?($("#pay_supp_2").hide(),$("#pay_supp_1").show()):("pp"==$(this).val()||"ptm"==$(this).val())&&($("#pay_supp_1").hide(),$("#pay_supp_2").show())}),$("#pay_svg").click(function(){var a=$("input[type=radio][name=\"pay_typ_ra\"]:checked").val(),b=$("#pci_c").val();GA_cel("go-pay-page-"+a),ORSVGOT("8",b,$("#pay_typ_doc").val(),a)}),$("#temp_PNG_vi,#temp_JPG_vi,#vi_inp_icon").click(function(){YaCount(Ya_Id,"cscgr50");var a=$("#c-h-ds").clone();return a.children().attr({id:"MSR-"+St,width:SiW+"mm",height:SiH+"mm"}).removeAttr("style"),AddGrid(0,a.children()),$("#c-c-ds").append("<form name=\"d-w-svg-ds\"  id=\"d-w-svg-ds\" action=\"/ord_maket/gmgpv2_prev.php\" method=\"post\"><textarea name=\"d-w-svg-c-ds\" id=\"d-w-svg-c-ds\"  rows=\"5\" cols=\"20\" wrap=\"off\">111</textarea><input name=\"free_png\" type=\"hidden\" value=\"1\"></form>"),$("#d-w-svg-c-ds").html(a.html()),$("#d-w-svg-ds").submit(),void $("#d-w-svg-ds").remove()})});function ORSVGOT(a,b,c,d){var e=0;0<$("#sto-dw-k").length&&(e=$("#sto-dw-k").val());var f=$("#d-oshn-mail-ds").val();if((""!=f||0!==e)&&(mailValid(f)||0!==e)){$("[layer]").each(function(){"none"!=$(this).attr("fill")&&null!=$(this).attr("fill")&&"#ffffff"!=$(this).attr("fill")&&"white"!=$(this).attr("fill")&&$(this).attr("fill",coor_stp),"none"!=$(this).attr("stroke")&&null!=$(this).attr("stroke")&&$(this).attr("stroke",coor_stp),$(this).find("*").each(function(){"none"!=$(this).attr("fill")&&null!=$(this).attr("fill")&&"#ffffff"!=$(this).attr("fill")&&"white"!=$(this).attr("fill")&&$(this).attr("fill",coor_stp),"none"!=$(this).attr("stroke")&&null!=$(this).attr("stroke")&&$(this).attr("stroke",coor_stp)})}),saveHol();var g=$("#c-h-ds").clone();g.children().attr({id:"MSR-"+St,width:SiW+"mm",height:SiH+"mm"}).removeAttr("style"),AddGrid(0,g.children());var h=$("#star_inp").is(":checked")?h=1:h=0,i=0;"svg"==c?i=1:"pdf"==c?i=2:"docx"==c&&(i=3);var j=document.referrer;0==mobile_f||0!=mobile_f_w?$("#ram_ordm2").animate({top:"32px"},200):$("#ram_ordm2").animate({top:"0"},200),$.ajax({url:"/ord_maket/gmgpv2.php",data:{"d-w-svg-c-ds":g.html(),country_id:b,fi:i,mail:f,amount:a,LNG:LNG,payment:d,referrer:j,doc_typ:c,old:h,tk:e},type:"POST",success:function(a){if("1"!=a){var b=jQuery.parseJSON(a);if(0!==e)return $("#ram_ordm2").css("top","385px"),$("#ram_ordm").css("top","385px"),$("#dord_mak_m").hide(),$("#in-sf-di-ds").hide(),$("#sto-dw").unbind("click"),void $("#sto-dw").show().click(function(){window.parent.location.href="/dwm/?t="+b.oid});YaCount(Ya_Id,c,b.oid),"ya"==d||"ab"==d||"st"==d?window.parent.location.href=b.url:"pp"==d?window.parent.location.href=b.url:"ptm"==d&&($("#ORDER_ID").val(b.oid),$("#TXN_AMOUNT").val(b.amount),$("#pt_mail").val(f),$("#d-osh-svg-ptm-ds form").submit())}}})}}function YaCount(a,b,c){if(c=c||0,window["yaCounter"+a]){if(0!=c){var d={order_oid:{oid:c}};window["yaCounter"+a].reachGoal(b,{userParams:d})}else window["yaCounter"+a].reachGoal(b);return 1}return 0}function GA_cel(b){window.gtag&&gtag('event', 'Bclick', {'typ': b,});}function Svg_load(){$("#c-h-ds").empty(),$(".c-lm-c-ds").remove(),$("#cll-b-ds").empty().width("0px"),$("#im-p-c-ds").css("display","none"),$("#c-inf-ds4").empty(),$("#c-h-ds").html($("#mak_svg_c").html()),St=$("#mak_svg_c").attr("st"),"00"==St&&(St=$("#c-h-ds").children().attr("id").split("-")[1]),$("#c-h-ds").children().attr("id","h-o-l-ds"),$("#mak_svg_c").remove();var a=document.getElementById("h-o-l-ds").getAttribute("viewBox");a=a.split(" "),W=1*a[2],H=1*a[3],SiW=$("#h-o-l-ds").attr("width").slice(0,-2),SiH=$("#h-o-l-ds").attr("height").slice(0,-2),$("#h-o-l-ds").attr("width",W),$("#h-o-l-ds").attr("height",H);var b=$("#h-o-l-ds").children("[fill^=\"#\"][fill!=\"#ffffff\"]").first().attr("fill"),c=$("#h-o-l-ds").children("[stroke^=\"#\"]").first().attr("stroke");b==null?c!=null&&(coor_stp=c):coor_stp=b,$("#color_inp_icon").css("border-color",coor_stp),$("#svg_color_icon_fill").attr("fill",coor_stp),AddGrid(1),3==St?$("#c-h-ds").css({width:W+"px",height:H+"px","margin-left":(250-W)/2+"px","margin-top":(250-H)/2+"px"}):$("#c-h-ds").css({width:"250px",height:"250px","margin-left":0,"margin-top":0}),$("#h-o-l-ds [layer]").each(function(){var a=1*$(this).attr("layer");Opmenu(a,0,1),Add_layer(a,1)}),0==$("#h-o-l-ds [layer]").length&&$("#im-p-c-ds").css("display","none"),Layer=$("#h-o-l-ds [layer]").last().attr("layer"),1==St&&$(".si-inf-t-ds span").text(SiW),2==St&&$(".si-inf-t-ds span").text(SiW+"x"+SiW+"x"+SiW),3==St&&$(".si-inf-t-ds span").text(SiW+"x"+SiH),$(".a-e-ds:not(#a-t-ds):not(#a-i-ds)").css("display","none"),1==St&&($("#a-tr-ds").css("display","block"),$("#a-fr-ds").css("display","block")),2==St&&($("#a-tt-ds").css("display","block"),$("#a-ft-ds").css("display","block")),3==St&&($("#a-tre-ds").css("display","block"),$("#a-fre-ds").css("display","block")),saveHol()}(function(a){a.each(["show","hide"],function(b,c){var d=a.fn[c];a.fn[c]=function(){return this.trigger(c),d.apply(this,arguments)}})})(jQuery);