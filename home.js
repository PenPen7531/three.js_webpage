
function myFunction(){
    let button=document.getElementById("button");
    let text=document.getElementById("collapse");
    if (text.style.display === "inline"){
        text.style.display="none";
        button.innerHTML="View More";
    }
    else{
        text.style.display="inline";
        button.innerHTML="View Less";
    }
}

function expandProject1(){
    let button=document.getElementById("button-p1");
    let text=document.getElementById("collapse-p1");
    let image=document.getElementById("crud-view");
    if (text.style.display === "inline"){
        text.style.display="none";
        image.style.display="none";
        button.innerHTML="View More";
    }
    else{
        text.style.display="inline";
        image.style.display="inline";
        button.innerHTML="View Less";
    }
}

function expandProject2(){
    let button=document.getElementById("button-p2");
    let text=document.getElementById("collapse-p2");
    let image=document.getElementById("tic-view");
    if (text.style.display === "inline"){
        text.style.display="none";
        image.style.display="none";
        button.innerHTML="View More";
    }
    else{
        text.style.display="inline";
        image.style.display="inline";
        button.innerHTML="View Less";
    }
}