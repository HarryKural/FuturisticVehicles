/* Coding for form */

function ValidateForm() {

    var sometext = document.getElementById("SomeText");

    if (sometext.value == "") {
        DisplayError("SomeText");
    }
    else {
        alert(sometext.value);
    }

    var options = document.getElementsByName("Options");

    var array = GetSelectedOptions("Options");

    if (array.length < 1) {
        DisplayError("Options")
    }

    var email = document.getElementById("emailaddress1");

    if (validateEmail(email.value)) {
        alert("Valid email");
    }
    else {
        DisplayError("emailaddress1");
    }

    var province = document.getElementById("Province");

    if (province.value == "") {
        DisplayError("Province");
    }

    var gender = document.getElementsByName("Gender");

    var garray = GetSelectedOptions("Gender");

    if (garray.length < 1) {
        DisplayError("Gender");
    }

    var telephone = document.getElementById("tel1");

    if (telephone.value == "") {
        DisplayError("tel1");
        alert("Empty");
    }
    else if (ValidateNumbers(telephone.value) == false) {
        DisplayError("tel1");
        alert("Invalid characters");
    }
    else if (telephone.value.length < 10) {
        DisplayError("tel1");
        alert("Invalid length");
    }
}

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function ValidateNumbers(text) {
    var tmp = new String(text);

    for (var i = 0; i < tmp.length; i++) {
        var x = tmp.substring(i, i + 1);
        //alert(x);
        var y = isNaN(x);
        //alert(y);
        if (y == true) {
            return (false);
        }
    }

    return (true);
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function GetSelectedOptions(name) {
    var options = document.getElementsByName(name);
    var optArray = new Array();
    var x = 0;

    for (var i = 0; i < options.length; i++) {
        if (options[i].checked) {
            optArray[x] = options[i].value;
            x++;
        }
    }

    return (optArray);
}

function DisplayError(id) {
    var sometexterr = document.getElementById(id + "Err");
    sometexterr.style.display = "block";
}

/*
function insertHeader() {
    var head = document.getElementById("header");
    head.innerHTML = '<nav class="navbar navbar-inverse navbar navbar-fixed-top" role="navigation"> <div class="container-fluid page-scroll"> <!-- Logo --> <div class="navbar-header"> <!-- Button for NavBar appears in smaller devices --> <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#mainNavBar"> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button> <a href="Index.html" class="navbar-brand">MAJOR PROJECT</a> </div> <!-- Menu Items --> <!-- Basic horizontal menu --> <div class="collapse navbar-collapse" id="mainNavBar"> <ul class="nav navbar-nav"> <li class="active"><a href="Index.html"><span class="glyphicon glyphicon-home"></span> Home</a></li> <li><a href="About.html"><span class="glyphicon glyphicon-info-sign"></span> About</a></li> <li><a href="Contact.html"><span class="glyphicon glyphicon-user"></span> Contact</a></li> <!-- Add a dropdown menu --> <li class="dropdown"> <a class="dropdown-toggle" data-toggle="dropdown" href="#">All Contents <span class="caret"></span></a> <ul class="dropdown-menu"> <li><a href="images.html"><i class="glyphicon glyphicon-picture"></i> Images</a></li> <li><a href="videos.html"><i class="glyphicon glyphicon-film"></i> Videos</a></li> <li><a href="text.html"><i class="glyphicon glyphicon-text-size"></i> Text Mode</a></li> </ul> </ul> </div> </div></nav>';
} */