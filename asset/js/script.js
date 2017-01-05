function setCookie(name,value,days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";
    document.cookie = name+"="+value+expires+"; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {
    setCookie(name,"",-1);
}



$(document).ready(function() {
    var idShoe = $('#shoe').attr('content');
    /* change choose select */
    $('.choose').click(function() {
        if($(this).attr('id') == 'shoe-1') {
            $('#shoe').css('background-image', 'url("asset/img/nike/nike_shoes.png")');
        } else if($(this).attr('id') == 'shoe-2') {
            $('#shoe').css('background-image', 'url("asset/img/nike/nike_shoes_black.png")');
        }
    });
    
    /* click fav */
    $('#fav').click(function() {
        if(getCookie('favShoes') == idShoe) {
            eraseCookie('favShoes');
            alert('no : '+getCookie('favShoes'));
        }
        else if(getCookie('favShoes') != idShoe) {
            setCookie('favShoes', idShoe, 30);
            alert('ok : '+getCookie('favShoes'));
        }
    });
    $('#cart').click(function() {
        
        var d = new Date();

        var se = d.getSeconds();
        var p = $('#select-size').val();
        
        
        var createJson = '{"cart":[]}';
        setCookie('cart', createJson, 2);
        var obj = JSON.parse(getCookie('cart'));
        var e = parseInt(obj.cart.length)+2;
        var foregrounds = 'shoes';
        var item = ('"id'+e+'" : {"type" : '+foregrounds+',"backgrounds" : '+p+'}');
        obj['cart'].push(item);
        jsonStr = JSON.stringify(obj);
        setCookie('cart', jsonStr, 2);
        alert('se : '+se+' & nb : '+obj.cart.length+' & e : '+e+' & size : '+obj.cart[0].id0[0].size);
 /*       
 
 
 myObj = {
	"cart":[{
    "id1":[{"type":"shoes","id":"184","size":"34"}],
          "id2":[
              { "type":"shoes", "id":"184", "size":"38" }
          ],
          "id3":[
              { "type":"shoes", "id":"184", "size":"45" }
          ]
   }]
          
};
 
 
x = myObj.cart[0].id3[0].size;
 
 
 
 
var obj = JSON.parse(jsonStr);
obj['theTeam'].push({"teamId":"4","status":"pending"});
jsonStr = JSON.stringify(obj);
         var jsonencode = '{"cart":[{"type":"'+type+'", "id":"'+id+'", "size":"'+size+'"}]}';
     */   
        
        
        /*
        // t=shoes&b=airmaxtavassd&s=
        if(getCookie('cart') === null){
            setCookie('cart', cartC('shoes', '184', p), 2);
        }
        else {
            var c = getCookie('cart');
            var obj = JSON.parse(getCookie('cart'));
            
            setCookie('cart', cartC('shoes', '184', p)+c, 2);
            
        }
        $('#sdsf').before(getCookie('cart'));*/
        //$('#sdsf').before(obj.cart[0].size);
    });

});

//setCookie('cart', cartC('shoes', '184', 38), 2);
//eraseCookie('cart');