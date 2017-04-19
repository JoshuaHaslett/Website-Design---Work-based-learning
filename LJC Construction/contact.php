<?php
if(isset($_POST['name']) && isset($_POST['email']) && isset($_POST['telephone']) && isset($_POST['subject']) && isset($_POST['query'])){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $telephone = $_POST['telephone'];
    $to = 'info@ljcconstruction.co.uk';
    $subject = $_POST['subject'];
    $query = $_POST['query'];
    $query .= "<br><br>"."Contact No: ".$telephone;

        //headers
        $headers = "From: ".$name." <".$email.">\r\n";
        $headers .= "Reply-To: ".$email."\r\n";
        $headers .= "MIME-Version: 1.0\r\n";
        $headers .= "Content-type: text/html; charset=utf-8";
    
        //send
        $send = mail($to,$subject,$query, $headers);
        if($send){
            echo '<script language="javascript">';
            echo 'alert("Thanks for contacting us!")';
            echo '</script>';
        } else{
            echo '<script language="javascript">';
            echo 'alert("We werent able to process your email, please contact us directly at info@ljcconstruction.co.uk")';
            echo '</script>';
        }
    }

?> 
    <!DOCTYPE html> 
    <html>

    <head>
        <link href="css/bootstrap.min.css" rel="stylesheet">
        <link href="css/font-awesome.min.css" rel="stylesheet">
        <link href="css/navbar.css" rel="stylesheet">
        <link rel="stylesheet" href="css/footer.css">
        <link rel="stylesheet" href="">
        <link href="email.php">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
        <link rel="stylesheet" href="css/contact.css"> </head>

    <body>
        <!--Navbar-->
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 no-padding">
            <div class="navBar">
                <div class="logo"> <img src="Images/logo.jpg"> </div>
                <div class="row"> <a href="index.html" class="btn buttonContainer col-sm-offset-2 col-sm-2 col-xs-12">Home
            </a> <a href="accreditation.html" class="btn buttonContainer col-sm-2 col-xs-12" onclick="accreditation.html">Accreditation
            </a> <a href="testimonials.html" class="btn buttonContainer col-sm-2 col-xs-12">
                Testimonials
            </a>
                    <div id="selected" class="btn buttonContainer col-sm-2 col-xs-12"> Contact </div>
                </div>
            </div>
        </div>
        <!--body under nav bar-->
        <div class="contactContainer">
            <div class="row">
                <div class="masterPanel col-sm-offset-2  col-sm-8 no-padding">
                    <div class="row">
                        <div class="generalDetails no-padding">
                            <!--left container-->
                            <div class="col-sm-6">
                                <div class="contactPanel">
                                    <h1>Address</h1>
                                    <hr></hr>
                                    <p> <b>LJC (SW) Construction Ltd</b>
                                        <br> 197 Windsor Road
                                        <br> Torquay
                                        <br> South Devon
                                        <br> TQ1 1SP </p>
                                </div>
                                <div class="contactPanel">
                                    <h1>Contact information</h1>
                                    <hr></hr>
                                    <p> <font color="blue"> info@ljcconstruction.co.uk</font>
                                        <br> Tel: 01803 469671
                                        <br> Mobile: 07971 862175
                                        <br> VAT Reg No: 836 8954 71
                                        <br> Company Reg No: 5071855 </p>
                                </div>
                            </div>
                            <!--Map-->
                            <div class="mapsContainer col-sm-6 hidden-xs">
                                <div id="map" class="maps"></div>
                            </div>
                        </div>
                        <!--Form-->
                        <div class="col-sm-12">
                            <div id="emailContainer" class="contactPanel col-sm-12">
                                <h1>Email enquiry</h1>
                                <hr></hr>
                                <div class="row">
                                    <form id="emailForm" class="col-sm-12" method="post">
                                        <div class="row">
                                            <div class=" col-sm-offset-1 col-sm-5 no-padding-left  col-xs-10 col-xs-offset-1">
                                                <input type="text" name="name" placeholder=" Full Name"> </div>
                                            <div class="col-sm-5 col-sm-offset-0 no-padding-right  col-xs-10 col-xs-offset-1">
                                                <input type="text" name="telephone" placeholder=" Telephone No."> </div>
                                        </div>
                                        <div class="row">
                                            <div class=" col-sm-offset-1 col-sm-5 no-padding-left  col-xs-10 col-xs-offset-1">
                                                <input type="text" name="subject" placeholder=" Subject"> </div>
                                            <div class="col-sm-5 col-sm-offset-0 no-padding-right col-xs-10 col-xs-offset-1">
                                                <input type="text" name="email" placeholder=" Email Address"> </div>
                                        </div>
                                        <div class="row">
                                            <textarea name="query" placeholder="Reason for contacting LJC Construction..." class="col-sm-offset-1 col-sm-10 "></textarea>
                                        </div>
                                        <button id="subBtn" onclick="checkEmail();" type=button  name="sub" class="col-sm-offset-2 col-sm-8 col-xs-10 col-xs-offset-1">Send Enquiry</button>
                                </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <!--Footer-->
        <a id="facbook" target="_blank" title="find us on Facebook" href="https://www.facebook.com/LjcConstruction/"><img alt="follow me on facebook" src="https://en.facebookbrand.com/wp-content/themes/fb-branding/prj-fb-branding/assets/images/fb-logo.png" border=0></a>
        <a id="google" target="_blank" title="follow me on google plus" href="https://plus.google.com/u/0/117505766985101659217"><img alt="follow me on google plus" src="https://c866088.ssl.cf3.rackcdn.com/assets/googleplus30x30.png" border=0></a>
        <div class="footerBar">
            <p>Copyright LJC Construction 2017 ©</p>
        </div>
        <!--Scripts-->
        <script>
            function myMap() {
                var myCenter = new google.maps.LatLng(50.471558, -3.515529);
                var mapCanvas = document.getElementById("map");
                var mapOptions = {
                    center: myCenter
                    , zoom: 10
                };
                var map = new google.maps.Map(mapCanvas, mapOptions);
                var marker = new google.maps.Marker({
                    position: myCenter
                });
                marker.setMap(map);
            }
        </script>
        <script src="contact.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBseNEIZeIIOLxnme_258YBJDhVbS0Od5k&callback=myMap"></script>
    </body>

    </html>