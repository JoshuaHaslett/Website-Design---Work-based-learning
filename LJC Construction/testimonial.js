var fireBaseRef = firebase.database().ref();
var testimonials = new Array();
var loaded = false;
//testimonial class
function Testimonial(name, quote) {
    this.name = name;
    this.quote = quote;
}
//load testimonials into array 
function loadTestimonials() {
    //start animation
    if (!loaded) {
        loaded = true;
        $("#loadMoreBtn").toggleClass('fa-chevron-down');
        $("#loadMoreBtn").toggleClass('fa-spinner fa-pulse  fa-fw');
        return fireBaseRef.child('Testimonials').once('value').then(function (snapshot) {
            snapshot.forEach(function (child) {
                //get data
                var newTestimonial = new Testimonial(child.val().name, child.val().quote);
                testimonials.push(newTestimonial);
            });
            displayTestimonials();
        });
    }
}
//add new testimonials
function displayTestimonials() {
    var i = 0;
    testimonials.forEach(function (value) {
        newTestimonial = testimonials[i];
        //Structure of new testimonials
        var newRow = document.createElement('div');
        newRow.className = "row";
        var entry = document.createElement('div');
        entry.className = "testimonialEntry";
        var para = document.createElement('p');
        para.className = "col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1";
        
        //construct paragraph
        var bold = document.createElement('b');
        bold.style.color = "blue"
                
        var nodeQuotation = document.createTextNode("\"");
        bold.appendChild(nodeQuotation);
        
        var nodeP = document.createTextNode(newTestimonial.quote);
        
        //add to paragraph
        para.appendChild(bold);
        para.appendChild(nodeP);        
        para.appendChild(bold.cloneNode(true));

        var head = document.createElement('h1');
        head.className = "col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1";
        var nodeH = document.createTextNode(newTestimonial.name);
        head.appendChild(nodeH);
        entry.appendChild(para);
        entry.appendChild(head);
        newRow.appendChild(entry);
        $('#addTestimonialContainer').append(newRow);
        i++;
    });
    $("#loadMoreBtn").toggleClass('fa-chevron-up');
    $("#loadMoreBtn").toggleClass('fa-spinner fa-pulse  fa-fw');
    $('#loadMoreBtn').click(function () {
            $('html, body').animate({
                scrollTop: 0
            }, 'slow');
        });
    }