$(document).ready( function() {
	
	


    

	
	
	if (!window.mobile_f)window.mobile_f=0;//времянка длямобильной версии

	
	//цвет если мобильная или если общзая палитра изменены
	/*var color_icon_s_m="#ffffff";
	if( mobile_f ==0 || mobile_f_w == 1){ 
	
		color_icon_s_m =(coor_stp=="#2f69c2")? "#ffffff" : "#fc4e3e" ;
	
	}else{
		
		color_icon_s_m =(coor_stp=="#2f69c2")? coor_stp : "#fc4e3e" ;
	}	
	//-----------------------------
	
	var sav_icon_html1='<div id="save_maket_icon" class="save_m_icon"  title="'+t197+'">';						
	var sav_icon_html2='\ <path fill="'+color_icon_s_m+'" d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9v-2H4V8l8 5 8-5v5h2V6c0-1.1-.9-2-2-2zm-8 7L4 6h16l-8 5zm7 4 4 4-4 4v-3h-4v-2h4v-3z"/>\
						</svg>\
					</div>\ ';
	*/
	if( mobile_f ==0 || mobile_f_w == 1){ 
		//$('#c-cb-ds>.c-t-m-ds').append(sav_icon_html1 + '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">' + sav_icon_html2);								
	}else{
		//$('#b-m-ds').append(sav_icon_html1 + '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">' + sav_icon_html2);	
		$('#b-m-ds').append($('#save_m_icon_b').clone().attr('id','save_m_icon_b_m') )
	}				
	

	
	
	
	// флаг добавленияполя и генерируем id для элемента input
	var kl = randomString(12);
	var sav_finc_c=0;	
	//---------------------------------
		
	$('.save_m_icon').click(function(){
	
		
		var emp_text='';
	
		$(".in_text").each(function(indx){			
		
			if( $(this).val()=="" )emp_text+='#'+ this.id.replace(/[^+\d]/g, '') + ',';			
				
		});	
		
		if(emp_text !=""){
		
			$("#in-soo4-ds span").text(emp_text);			
			$("#in-s4-ds").show();
			$("#in-sf-di-ds").show();
			
			return;
			
		}


		$('#send-link-text1').show();
		$('#send-link-text2').hide();

		$('#save_maket_ok').hide();
		$('#save_maket_go').show();
		$('#save_maket_no').show();
	
		
		if(sav_finc_c==0){
		
			$('#dord_mak_save_box').find('label').attr("for",kl).before('<input id="'+kl+'" class="m-in-a-ds" type="email" placeholder="example@mail.com">');
	
			SaveInitEl(kl);
			
			grecaptcha.ready(function () {
				grecaptcha.execute('6LfkP18lAAAAAFqSYMf_7V0CB9ZflS_cQU1I9HkT', {
				   action: 'action'
				   }).then(function(token) {	
					$('#dord_mak_save_box').append('<input type="hidden" name="g-recaptcha-response" value="' + token + '">');
					$('#dord_mak_save_box').append('<input type="hidden" name="r-action" value="action">'); 
				});
			});	
			
			sav_finc_c=1;			
			
		}
			
		
		$('#dord_mak_save').show();
		$('#in-sf-di-ds').show();
		
		
		
	});
	
	
	
	/*$("#in-sf-ds").click(function(){//перенести в генерал
		$("#dord_mak_save").hide();
	});
*/
	
	
	$('#save_maket_no').click(function(){
	
		$('#dord_mak_save').hide();
		$('#in-sf-di-ds').hide();
	
	});	
	
	$('#save_maket_ok').click(function(){
	
		$('#dord_mak_save').hide();
		$('#in-sf-di-ds').hide();
	
	});	
	
	
});


function  SaveInitEl(kl){	

	$("#"+kl).keyup(function(pattern) {
		//console.log($("#"+kl).val())
		if(!mailValid($("#"+kl).val())){
		//if(el.val().search(pattern) != 0){
			$(this).addClass("m-ini-ds");
		}else{
			$(this).removeClass("m-ini-ds");
		}
    });
	
	
	$('#save_maket_go').click(function(){
	
		if($("#"+kl).val()==""){
		
				 	$("#h-b-c-ds").text(t139);
				 	if( mobile_f == 0 || mobile_f_w!=0) $("#h-b-ds").css({"display":"block",left: "280px",top:"205px"});
					else $("#h-b-ds").css({"display":"block",left: "140px",top:"315px"});
		            $( "#c-c-ds" ).click(function( event ) {
				 				if ($(event.target).closest("#save_maket_go").length )return;
				 				$("#h-b-ds").css("display","none");
				 				$(this).unbind('click');
				 	});
				 	return;
		 	}
			
		//console.log($("#"+kl).val()	)
		if(!mailValid($("#"+kl).val())){
				 	$("#h-b-c-ds").text(t141);
				 	if( mobile_f ==0 || mobile_f_w!=0) $("#h-b-ds").css({"display":"block",left: "280px",top:"205px"});
					else $("#h-b-ds").css({"display":"block",left: "140px",top:"315px"});
		            $( "#c-c-ds" ).click(function( event ) {
				 				if ($(event.target).closest("#save_maket_go").length )return;
				 				$("#h-b-ds").css("display","none");
				 				$(this).unbind('click');
				 	});
				 	return;
		 }
		 
		SaveMaketMail(kl); 
		
	});

}

function  SaveMaketMail(kl){	
	
	$("#ram_ordm4").animate({top: "32px"}, 200);	
	
	var svg_ps=$("#c-h-ds").clone();
    //svg_ps.children().attr('width',SiW+'mm');
	//svg_ps.children().attr("height",SiH+'mm');
	//svg_ps.children().removeAttr("id");
	
	svg_ps.children().attr({
		"id": "MSR-"+St,
		"width": SiW + "mm",
		"height": SiH + "mm"
	});//.removeAttr("style"); //переименовыемади холста и меняем атрибуты

	//---------------------------------------------
	if (window['yaCounter' + Ya_Id])window['yaCounter' + Ya_Id].reachGoal("m-link-send");
	{		
		console.log($("#"+kl).val().substr(0, 30))
		var myParams = {mail: {mail_l: $("#"+kl).val().substr(0, 30)}};
		window['yaCounter' + Ya_Id].reachGoal("m-link-send", {userParams: myParams});	
	}	
	//---------------------------------------------
	
	var save_svg=svg_ps.html();
	$.ajax({
	   url: "/const/request/maket_sav.php",
	   data: {
				"save_svg": save_svg,
				"mail": $("#"+kl).val(),
				"St":St,
				"LNG":LNG,
				"g-recaptcha-response":$("input[name='g-recaptcha-response']").val(),
				"r-action":$("input[name='r-action']").val()
	   },
	   dataType: "text",
	   type : "POST",
	   success: function(msg){  // alert(msg)
			//alert(msg);
			if(msg!=="0"){
				grecaptcha.execute('6LfkP18lAAAAAFqSYMf_7V0CB9ZflS_cQU1I9HkT', {
				   action: 'action'
				   }).then(function(token) {					
						$("input[name='g-recaptcha-response']").val(token);						
				})
			}
			//$('#dord_mak_save').hide();
			//$('#in-sf-di-ds').hide();
			
			$('#send-link-text1').hide();
			$('#send-link-text2').show();
	
			$('#save_maket_ok').show();
			$('#save_maket_go').hide();
			$('#save_maket_no').hide();
			
			$("#ram_ordm4").css("top","250px");
			
	   }
	});
}

function randomString(i) {
    var rnd = '';
    while (rnd.length < i) 
        rnd += Math.random().toString(36).substring(2);
    return rnd.substring(0, i);
};