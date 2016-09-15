(function() {
  'use strict';

  var homeView = {
    controller: homeCrl,
    templateUrl: 'app/home/homeView.html'
  }

  angular
    .module('app')
    .component('homeView', homeView)
    .controller('homeCrl', homeCrl);

    function homeCrl() {

    };
})();




///===========================================================   MAIL VALIDATION

function validateEmail(sEmail) {
  var filter = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
  if (filter.test(sEmail)) {
    return true;  
  }
  else {
    return false;
    
  }
}



///===========================================================  TESTER



testers=true;



//===========================  input_MAIL HEADER



function sendy(mail){

    $.ajax({
        url: 'https://api.mxhacks.mx/applications/',
        type: 'POST',
        data: { email: mail} ,
        success: function (res) {
            console.log(res);
          
            // window.location.href = "/registro.html?mail="+mail;
            if (testers==true) {
              window.location.href = "/registro.html?mail="+mail; 
            }else{
              window.location.href ="https://docs.google.com/forms/d/1lH9Oyv5111g-QtjhzIi6X30c4RKy7BGUon--itZ6Y0A/edit?c=0&w=1";
            }
        },
        error: function (res) {
            console.log(res);
            
        }
    }); 



}






// ===============================   BOTON A /SEND

$("body").on('click', '#basic-addon2', function(event) {
var $input_email1 = $('.user').val();

      if (validateEmail($input_email1) == false){
            console.log($input_email1)
            $(".msg").removeClass('hidden');
            $(".msg").jAnimate("fadeInDown",function(){

            });
            console.log("mal");
        
        }else{
          // ACCION DE ENVIO 
          console.log($input_email1);
            sendy($input_email1);
         
        }
  });



  $(document).keypress(function(e) {
    var $input_email1 = $('.user').val();
    if(e.which == 13) {
        var $input_email1 = $('.user').val();

              if (validateEmail($input_email1) == false){
                    console.log($input_email1)
                    console.log("mal");
                
                }else{
                  // ACCION DE ENVIO 
                  console.log($input_email1);
                  sendy($input_email1);
                 
                }
    }
});

// ===============================   TESTER

$(document).keypress(function(e) {
    console.log(e.which);
    if(e.which == 47) {
        testers=true;
    }
});

