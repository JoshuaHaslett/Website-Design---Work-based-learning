var projectTitle = document.getElementById("projectTitle");
var projectDescription = document.getElementById("projectDescription");
var projectPicture = document.getElementById("mainImage");
var nextBtn = document.getElementById("next");
var backBtn = document.getElementById("back");
var newBuildChevronImg = document.getElementById("newBuildChevron");
var extensionChevronImg = document.getElementById("extensionChevron");
var refurbishmentChevronImg = document.getElementById("refurbishmentChevron");
var fireBaseRef = firebase.database().ref();
var storageRef = firebase.storage().ref();
var newBuilds = new Array();
var extensions = new Array();
var refurbishments = new Array();
var count = 0;
var type;
var projectVisibility = false;

function Project(name, description, image) {
    this.name = name;
    this.description = description;
    this.image = image;
}

function loadProjects(projectType) {
    var check = true;
    document.getElementById("loadingIcon").style.visibility = "visible";
    switch (projectType) {
    case 'NewBuilds':
        $("#newBuildChevron").toggleClass('fa-chevron-down');
        $("#newBuildChevron").toggleClass('fa-chevron-up');
        if ($("#extensionChevron").hasClass('fa-chevron-up')) {
            $("#extensionChevron").toggleClass('fa-chevron-up');
            $("#extensionChevron").toggleClass('fa-chevron-down');
        }
        if ($("#refurbishmentChevron").hasClass('fa-chevron-up')) {
            $("#refurbishmentChevron").toggleClass('fa-chevron-up');
            $("#refurbishmentChevron").toggleClass('fa-chevron-down');
        }
        if (newBuilds.length > 0) {
            check = false;
        }
        break;
    case 'Extensions':
        $("#extensionChevron").toggleClass('fa-chevron-down');
        $("#extensionChevron").toggleClass('fa-chevron-up');
        if ($("#newBuildChevron").hasClass('fa-chevron-up')) {
            $("#newBuildChevron").toggleClass('fa-chevron-up');
            $("#newBuildChevron").toggleClass('fa-chevron-down');
        }
        if ($("#refurbishmentChevron").hasClass('fa-chevron-up')) {
            $("#refurbishmentChevron").toggleClass('fa-chevron-up');
            $("#refurbishmentChevron").toggleClass('fa-chevron-down');
        }
        if (extensions.length > 0) {
            check = false;
        }
        break;
    case 'Refurbishments':
        $("#refurbishmentChevron").toggleClass('fa-chevron-down');
        $("#refurbishmentChevron").toggleClass('fa-chevron-up');
        if ($("#extensionChevron").hasClass('fa-chevron-up')) {
            $("#extensionChevron").toggleClass('fa-chevron-up');
            $("#extensionChevron").toggleClass('fa-chevron-down');
        }
        if ($("#newBuildChevron").hasClass('fa-chevron-up')) {
            $("#newBuildChevron").toggleClass('fa-chevron-up');
            $("#newBuildChevron").toggleClass('fa-chevron-down');
        }
        if (refurbishments.length > 0) {
            check = false;
        }
        break;
    default:
        break;
    }
    if (!projectVisibility) {
        $(".bottomContainer").slideDown("slow");
        projectVisibility = true;
        $('html, body').animate({
            scrollTop: $(document).height()
        }, 'slow');
        $("#objectiveVisible").toggleClass('hidden');
    }
    else if ($("#extensionChevron").hasClass('fa-chevron-down') && $("#newBuildChevron").hasClass('fa-chevron-down') && $("#refurbishmentChevron").hasClass('fa-chevron-down')) {
        $(".bottomContainer").slideUp('slow', function() {
        $("#objectiveVisible").toggleClass('hidden');
        });
        projectVisibility = false;
        

    }
    if (check) {
        
        return fireBaseRef.child(projectType).once('value').then(function (snapshot) {
            snapshot.forEach(function (child) {
                //get data
                var newProject = new Project(child.val().name, child.val().description, child.val().image);
                switch (projectType) {
                case "NewBuilds":
                    newBuilds.push(newProject);
                    break;
                case "Extensions":
                    extensions.push(newProject);
                    break;
                case "Refurbishments":
                    refurbishments.push(newProject);
                    break;
                }
            });
            count = 0;
            type = projectType;
            loadPreviousProject();
        });
    }
    else {
        count = 0;
        type = projectType;
        loadPreviousProject();
    }
}

function loadNextProject() {
    //set UI
    $('html, body').animate({
        scrollTop: $(document).height()
    }, 'slow');
    var currentProject;
    switch (type) {
    case "NewBuilds":
        if (count < newBuilds.length - 1) {
            count++;
            document.getElementById("loadingIcon").style.visibility = "visible";
            if($("#back").hasClass('hidden')){
                $("#back").toggleClass('hidden');
            }
            if(count == newBuilds.length - 1){
                if(!$("#next").hasClass('hidden')){
                    $("#next").toggleClass('hidden');
            }

    }
        }
        currentProject = newBuilds[count];
        break;
    case "Extensions":
        if (count < extensions.length - 1) {
            count++;
            document.getElementById("loadingIcon").style.visibility = "visible";
            if($("#back").hasClass('hidden')){
                $("#back").toggleClass('hidden');
            }
            if(count == extensions.length - 1){
                if(!$("#next").hasClass('hidden')){
                    $("#next").toggleClass('hidden');
            }
        }
        }
        currentProject = extensions[count];
        break;
    case "Refurbishments":
        if (count < refurbishments.length - 1) {
            count++;
            document.getElementById("loadingIcon").style.visibility = "visible";
            if($("#back").hasClass('hidden')){
                $("#back").toggleClass('hidden');
            }
            if(count == refurbishments.length - 1){
                if(!$("#next").hasClass('hidden')){
                    $("#next").toggleClass('hidden');
            }
            
        }
        }
        currentProject = refurbishments[count];
        break;
    default:
        break;
    }
    projectTitle.innerHTML = currentProject.name;
    projectDescription.innerHTML = currentProject.description;
    //set image
    storageRef.child("images").child(currentProject.image).getDownloadURL().then(function (url) {
        projectPicture.src = url;
        projectTitle.innerHTML = currentProject.name;
        projectDescription.innerHTML = currentProject.description;
        document.getElementById("loadingIcon").style.visibility = "hidden";
    }).catch(function (error) {
        projectTitle.innerHTML = currentProject.name;
        projectDescription.innerHTML = currentProject.description;
        document.getElementById("loadingIcon").style.visibility = "hidden";
        projectPicture.src = "Images/default.jpg";
    });
}

function loadPreviousProject() {
    $('html, body').animate({
        scrollTop: $(document).height()
    }, 'slow');
    //set UI
    var currentProject;
    switch (type) {
    case "NewBuilds":
        if (count != 0) {
            count--;
            document.getElementById("loadingIcon").style.visibility = "visible";
        }
        currentProject = newBuilds[count];
        break;
    case "Extensions":
        if (count != 0) {
            count--;
            document.getElementById("loadingIcon").style.visibility = "visible";
        }
        currentProject = extensions[count];
        break;
    case "Refurbishments":
        if (count != 0) {
            count--;
            document.getElementById("loadingIcon").style.visibility = "visible";
            
        }
        currentProject = refurbishments[count];
        break;
    default:
        break;
    }
    
    if(count < 1){
        if(!$("#back").hasClass('hidden')){
                $("#back").toggleClass('hidden');
            }

    }
    if($("#next").hasClass('hidden')){
                $("#next").toggleClass('hidden');
        }
    
    //set image
    storageRef.child("images").child(currentProject.image).getDownloadURL().then(function (url) {
        projectTitle.innerHTML = currentProject.name;
        projectDescription.innerHTML = currentProject.description;
        projectPicture.src = url;
        document.getElementById("loadingIcon").style.visibility = "hidden";
    }).catch(function (error) {
        projectTitle.innerHTML = currentProject.name;
        projectDescription.innerHTML = currentProject.description;
        document.getElementById("loadContainer").style.display='none';
        projectPicture.src = "Images/default.jpg";
    });
}