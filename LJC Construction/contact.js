//("name");
//("telephone");
//("subject");
//("email");
//("query");

function checkEmail(){
    var check = true;
    if(document.getElementsByName('name')[0].value.length < 3){
        check = false;
        document.getElementsByName('name')[0].value = "";
        if(!document.getElementsByName('name')[0].classList.contains('redPlaceHolder')){
        document.getElementsByName('name')[0].placeholder = "Name: Min length of 3.";
        document.getElementsByName('name')[0].className += 'redPlaceHolder';
        }
    }
    if(document.getElementsByName('telephone')[0].value.length != 11 || (document.getElementsByName('telephone')[0].value.match(/[^0-9]/))){
                check = false;
        document.getElementsByName('telephone')[0].value = "";
        if(!document.getElementsByName('telephone')[0].classList.contains('redPlaceHolder')){
            document.getElementsByName('telephone')[0].placeholder = "Tel: Min/Max length of 11 No.";
            document.getElementsByName('telephone')[0].className += 'redPlaceHolder';
        }
    }
    if(document.getElementsByName('subject')[0].value.length < 3){
                check = false;

        document.getElementsByName('subject')[0].value = "";
        if(!document.getElementsByName('subject')[0].classList.contains('redPlaceHolder')){
            document.getElementsByName('subject')[0].placeholder = "Subject: Min length of 3.";
            document.getElementsByName('subject')[0].className += 'redPlaceHolder';
        }
    }
    if( document.getElementsByName('email')[0].value.length < 3 || (document.getElementsByName('email')[0].value.indexOf("@") == -1) || (document.getElementsByName('email')[0].value.indexOf(".") == -1)){
                check = false;

        document.getElementsByName('email')[0].value = "";
        if(!document.getElementsByName('email')[0].classList.contains('redPlaceHolder')){
            document.getElementsByName('email')[0].placeholder = "Email: Must contain '@' and '.'";
            document.getElementsByName('email')[0].className += 'redPlaceHolder';
        }
    }
    if(document.getElementsByName('query')[0].value.length < 10 ){
        document.getElementsByName('query')[0].value = "";
        if(!document.getElementsByName('query')[0].classList.contains('redPlaceHolder')){
                    check = false;

            document.getElementsByName('query')[0].placeholder = "Enquiry: Please enter your reson for contacting LJC Construction (at least 10 characters in length).";
            document.getElementsByName('query')[0].className += 'redPlaceHolder';
        }
    }
    
    if(check){
        document.getElementById("emailForm").submit();
    }
    
   // window.alert("check");

}