window.addEventListener('scroll', when_scrolled)

var nav_bar = document.getElementById('top_nav')
//console.log(nav_bar)

function when_scrolled(){
    //console.log("Fucntion called.")
    if(window.scrollY > 0){
        nav_bar.classList.add('active');
    }
    else{
        nav_bar.classList.remove('active');
    }
}

function popInFB(){
    var popup=document.getElementById("mypopupFB");
    popup.classList.toggle("show");  
    popup.style.color="#024aff";
    popup.style.backgroundColor="#b7b7a4";
}

function popInTweet(){
    var popup=document.getElementById("mypopupTweet");
    popup.classList.toggle("show");  
    popup.style.color="#55ACEE";
    popup.style.backgroundColor="#b7b7a4";
}

function popInGit(){
    var popup=document.getElementById("mypopupGit");
    popup.classList.toggle("show");  
    popup.style.color="black";
    popup.style.backgroundColor="#b7b7a4";
}

function popInDribbble(){
    var popup=document.getElementById("mypopupDribbble");
    popup.classList.toggle("show");  
    popup.style.color="#ea4c89";
    popup.style.backgroundColor="#b7b7a4";
}

function popInPin(){
    var popup=document.getElementById("mypopupPin");
    popup.classList.toggle("show");  
    popup.style.color="#cb2027";
    popup.style.backgroundColor="#b7b7a4";
}

function popOutFB(){
    popInFB();
}

function popOutTweet(){
    popInTweet();
}

function popOutGit(){
    popInGit();
}

function popOutDribbble(){
    popInDribbble();
}

function popOutPin(){
    popInPin()
}
