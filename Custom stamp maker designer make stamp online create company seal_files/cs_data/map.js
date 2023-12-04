$(document).ready(function () {

	if (!window.mobile_f)window.mobile_f=0;//времянка длямобильной версии
	
	//initMap();
    //GeoMan();
    //LangText();
    //GetMan('Россия','Омск');
	window.a_lat_def = 48.1391265;
    window.a_lng_def = 11.580186300000037;
	
	if(mobile_f==1 ){
		

		if ("geolocation" in navigator) {

			navigator.geolocation.getCurrentPosition(function (position) {
				a_lat_def = position.coords.latitude;
				a_lng_def = position.coords.longitude;
		
				console.log(position.coords.latitude + "," + position.coords.longitude);
			});
		} 
	}	

});
//получаем страницу карт
function initPageMap(LNG) {

	$("#in-sf-ds").show();
	$("#in-sfsl-ds").show();
	
	$.ajax({ //отправляем холст в базу
        url: "/const/request/get_om.php?LNG="+LNG,
        dataType: "HTML",
        type: "GET",
        success: function (msg) {
		//console.log(msg)
			         
		    $("#m-cb-ds").html(msg);

			man_load_f=1;
			
			$("#in-sf-ds").hide();
			$("#in-sfsl-ds").hide();  

			
			setupPageMap(); 

			//если потверждает заказ то подружаем карту 
			var parentElement = document.getElementById('map'); // a <div>
			var script = document.createElement('script');
			script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCNl6d3WMMOxAEltzFvQwCIW-CxQN_1akI';
			script.async = true;
			script.defer = true;
			script.onload = function () {
			   
				map_load_f=1;		
				
				initMap();
				GeoMan();
				
			};
			parentElement.insertBefore(script, null);
			
			

				
        }
    });
	
}
//обрабатываем страницу карт
function setupPageMap() {
//убрать при большом обновлении главнойго файла!!!!!!!!!!!!
	$("#const_but").click(function(){ //
	   $("#c-b-sl-ds").animate({left: left_sd + "px"}, 200);
	   document.getElementById("s-e-p-ds").disabled = true;
	});
//-----------------------	
	
	$("#in_con").click(function () {
        $("#con_list").show();
        $("#cit_list").hide();
        $("body").unbind('click');
        $("body").click(function (event) {
            if ($(event.target).closest("#in_con").length)
                return;
            $("#con_list").hide();
            $(this).unbind('click');
        });
    });
    window.f_c = 0;
    if ($("#in_cotd").val() != $("#in_con").val() && $("#cit_list li").length > 0)
        f_c = 1; //проверяем на определена ли страна, если страна определена и есть города , то разблакируем меню
    //window.g1="Город";
    $("#con_list li").click(function (event) {

        var elt = $(this);
        var name_c = elt.find('span').text();
        var name_id = $(this).attr("cid");

        $("#in_con").html(name_c);
        $("#in_con").attr('cid', name_id);
        GetMan(name_c, name_id, '', '');
        $("#in_cit").html($("#in_citd").val());
        $("#in_citf").val('0');
        GetCit(name_id);
        $("#in_cadin").val('');

    });

    $("#in_cit").click(function () {
        if (f_c == 0)
            return;
        //if($("#cit_list li").length<1)return;
        $("#cit_list").show();
        $("#con_list").hide();
        $("body").unbind('click');
        $("body").click(function (event) {
            if ($(event.target).closest("#in_cit").length)
                return;
            $("#cit_list").hide();
            $(this).unbind('click');
        });
    });
    $("#cit_list li").click(function (event) {
        $("#in_citf").val('1');
        //$("#in_cit").html($(this).text());
        //GetMan($("#in_con").text(),$(this).text(),'');
        var elt = $(this);
        var name_c = elt.find('span').text();
        var name_id = elt.attr('cyid');
        $("#in_cit").html(name_c);
		
        var elt2 = $("#in_con");
        var name_c2 = elt2.text();
        var name_id2 = elt2.attr('cid');
        GetMan(name_c2, name_id2, name_c, name_id);

    });
    $("#in_cadin").keyup(function (e) {
        if ($("#in_citf").val() == '0')
            return;
        if (e.keyCode == 13) {
            // GetMan($("#in_con").text(),$("#in_cit").text(),$(this).val());

            var geocoder = new google.maps.Geocoder(); // геокодер
            geocoder.geocode({
                'address': $("#in_con").find('span').text() + " " + $("#in_cit").find('span').text() + " " + $(this).val()
            }, function (results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    map.setCenter(results[0].geometry.location);
                    map.setZoom(15);
                }
            });

        }
    }).bind('blur', function () {
        if ($("#in_citf").val() == '0')
            return;
        //GetMan($("#in_con").text(),$("#in_cit").text(),$(this).val());
        var geocoder = new google.maps.Geocoder(); // геокодер
        geocoder.geocode({
            'address': $("#in_con").find('span').text() + " " + $("#in_cit").find('span').text() + " " + $(this).val()
        }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                map.setCenter(results[0].geometry.location);
                map.setZoom(15);
            }
        });

    });

}

//иницилизация карты
function initMap() {	

    window.map;
    var a_lat = document.getElementById('lat').value * 1;
    var a_lng = document.getElementById('lng').value * 1;
	
    if (a_lat == "")
        a_lat = a_lat_def;
    if (a_lng == "")
        a_lng = a_lng_def;

    // Enabling new cartography and themes
    google.maps.visualRefresh = true;

    // Setting starting options
    var mapOptions = {
        center: new google.maps.LatLng(a_lat, a_lng),
        zoom: 11,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: true,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
            position: google.maps.ControlPosition.TOP_RIGHT
        }
    }; //RIGHT_BOTTOM
    // Getting Map DOM Element
    var mapElement = document.getElementById('map');
    // Creating a map with DOM element
    map = new google.maps.Map(mapElement, mapOptions);
    //map.setMyLocationEnabled(true);

    $("#my_loc").click(function (event) {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {

                map.setCenter({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                });
                map.setZoom(15);

                var marker = new google.maps.Marker({
                        position: {
                            lat: position.coords.latitude,
                            lng: position.coords.longitude
                        },
                        map: map,
                        icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
                    });

            });
        } else {
            console.log('location not supported');
        }
    });

}
//добавляем маркеры
var marker;
var infowindow;
function GeoMan(f) {

    if (marker) {
        for (i in marker) {
            marker[i].setMap(null);
        }
    }

    var mvIndex = false;
    var lid,
    mid,
    a_lat,
    a_lng;

    marker = [];
    if (infowindow)
        infowindow.close();
    infowindow = new google.maps.InfoWindow();

    $(".locat").each(function (i) {
        lid = $(this).val();
        a_lat = $("#lat" + lid).val() * 1;
        a_lng = $("#lng" + lid).val() * 1;
        var co_name = $("#co_name" + lid).text();
        var inu = $("#INU" + lid).val();
        var co_add = $("#co_addres" + lid).text();
        var uid = $(this).attr("uid");
        var pid = $("#pay_us" + lid).val();
        var pho = $("#phone_us" + lid).text();
        var pri = $("#co_pr" + lid).html();
        var dv = '';
        if ($("#ic_dv" + lid).length > 0)
            dv = $("#ic_dv" + lid).attr('title');

        marker[i] = new google.maps.Marker({ // маркер
                position: {
                    lat: a_lat,
                    lng: a_lng
                },
                map: map,
                title: co_name

            });

        var aid = lid;
        marker[i].addListener('click', function () {

            if (mvIndex !== false)
                marker[mvIndex].setVisible(true);
            mvIndex = i;
            // infowindow.close();//hide the infowindow
            infowindow.setPosition(new google.maps.LatLng(this.getPosition().lat(), this.getPosition().lng()));
            infowindow.open(map); //"move" the info window to the clicked marker and open it;
            IinWin(infowindow, co_name, co_add, inu, i, aid, uid, pid, pho, pri, dv);
            $("#man_list li").removeClass("man_list_lia").eq(i).addClass("man_list_lia");
            this.setVisible(false);

            $('#man_list').stop().animate({
                scrollTop: $("#man_list li").eq(i).offset().top - $("#man_list").offset().top
            }, 200);
            map.panTo(new google.maps.LatLng(marker[i].getPosition().lat(), marker[i].getPosition().lng()));
            map.setZoom(12);

        });
        //$("#man_list li" ).eq(i).unbind('click');
        $("#man_list li").eq(i).click(function () {
            if (mvIndex !== false)
                marker[mvIndex].setVisible(true);
            mvIndex = i;
            infowindow.setPosition(new google.maps.LatLng(marker[i].getPosition().lat(), marker[i].getPosition().lng()));
            infowindow.open(map); //"move" the info window to the clicked marker and open it;
            IinWin(infowindow, co_name, co_add, inu, i, aid, uid, pid, pho, pri, dv);
            $("#man_list li").removeClass("man_list_lia").eq(i).addClass("man_list_lia");
            marker[i].setVisible(false);
            map.panTo(new google.maps.LatLng(marker[i].getPosition().lat(), marker[i].getPosition().lng()));
            map.setZoom(12);

        });

    });
    google.maps.event.addListener(infowindow, 'closeclick', function () {
        if (mvIndex !== false)
            marker[mvIndex].setVisible(true);
    });
}
//запрос данныз на основы страны и города
function GetMan(con, con_id, cit, cit_id) {
    var cc,
    z;
    /*if(cad!=''){
    cc="con="+con+"&cit="+cit+"&cad="+cad;
    z=15;
    }
    else
     */
    if (cit != '') {
        cc = "con=" + con + "&con_id=" + con_id + "&cit=" + cit + "&cit_id=" + cit_id;
        z = 11;
    } else {
        cc = "con=" + con + "&con_id=" + con_id;
        z = 5;
    }

    //alert(cc)
    var geocoder = new google.maps.Geocoder(); // геокодер
    //geocoder.geocode( { 'address':con+" "+cit+" "+cad}, function(results, status) {
    geocoder.geocode({
        'address': con + " " + cit
    }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            map.setCenter(results[0].geometry.location);
            map.setZoom(z);
        }
    });
    var sq;
    if (St == 1) {
        sq = 3.14 * (Math.pow((SiW / 2), 2));
    }
    if (St == 2) {
        sq = 0.433 * (Math.pow(SiW, 2));
    }
    if (St == 3) {
        sq = SiW * SiH;
    }
    //pr_ns=( ( ( (pr_ns )/100 ).toFixed(2) )*pr_n).toFixed(2)*1;
    $.ajax({ //отправляем холст в базу
        url: "/const/request/get_man.php?ln="+LNG+"&" + cc + "&sq=" + sq,
        dataType: "HTML",
        type: "GET",
        success: function (msg) {
		//console.log(msg)
            $("#man_list").html(msg);
            GeoMan(1);
        }
    });

}
function GetCit(cid) {

    $("#in_cadin").val('');
    f_c = 0;
    $.ajax({ //отправляем холст в базу
        url: "/const/request/get_city.php?ln="+LNG+"&cid=" + cid,
        dataType: "HTML",
        type: "GET",
        success: function (msg) {
            // alert(msg)
            if (msg != "0") {
                $("#cit_list").html(msg);
                $("#cit_list li").unbind('click');
                $("#cit_list li").click(function (event) {
                    //$("#in_cit").html($(this).text());
                    //GetMan($("#in_con").text(),$(this).text(),'');
                    $("#in_citf").val('1');

                    var elt = $(this);
                    var name_c = elt.find('span').text();
                    var name_id = elt.attr('cyid');
                    $("#in_cit").html(name_c);

                    var elt2 = $("#in_con");
                    var name_c2 = elt2.text();
                    var name_id2 = elt2.attr('cid');
                    GetMan(name_c2, name_id2, name_c, name_id);

                });
                f_c = 1;

            } else {
                $("#cit_list").html("");
                f_c = 0;
                $("#in_citf").val('0');
            }

        }
    });

}

function LoadCon(inu) {
    /*var el=document.getElementById('i-fr-ds');
    el.src='/cs.php?'+LNG+'&inu='+INU;
    el.onload = function() {
    $("#sf-ds").show();
    }  */

}

function IinWin(iw, cn, cd, inu, n, aid, uid, pid, pho, pri, dv) {

    if (dv != 0)
        dv = '<div class="manu_text22"><div class="ic_dv ic_dv2"></div>' + dv + '</div></div>';
    else
        dv = '';
    $(".or_mp_inf").remove();
    //iw.setContent('<div id="content"><b>'+cn+'</b></br></br><span class="manu_text2">тел: '+pho+'</span></br></br><span class="manu_text2">'+cd+'</span></div><div id="or_mp_inf" class="bu-t-ds bu-t-g-ds or_mp_inf">'+t142+'</div>');//update the content for this marker
    iw.setContent('<div id="content"><div class="manu_text12" ><b>' + cn + '</b></div><div class="manu_text22"><div class="phone_l"></div>' + pho + '</div><div class="manu_text22"><div class="locate_l"></div>' + cd + '</div>' + dv + ' </div><div><div class="manu_text3">' + pri + '</div><div id="or_mp_inf" class="bu-t-ds bu-t-g-ds or_mp_inf">' + t142 + '</div></div>'); //update the content for this marker


    $("#man_list li").eq(n).append('<div id="or_lmp_inf" class="bu-t-ds bu-t-g-ds or_mp_inf">' + t142 + '</div>'); //update the content for this marker

    INU = inu;
	
	//$(".or_mp_inf").click(function() {
    $('.or_mp_inf').live('click', function () {
       // console.log('1');
        //LoadCon(inu);
        $("#in-sf-ds").css("display", "block").prev().css("display", "block");
        
        LoadEqList();

        var a;
        if ($(".uidlist" + uid).length > 1)
            a = cd;
        else
            a = '';
        $("#aid-q-i").val(a);

        $("#pay_tip").val(pid);

    });

}
