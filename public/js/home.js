
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

function expandProject3(){
    let button=document.getElementById("button-p3");
    let text=document.getElementById("collapse-p3");
    let image=document.getElementById("java-rules");
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

function expandProject4(){
    let button=document.getElementById("button-p4");
    let text=document.getElementById("collapse-p4");
    let image=document.getElementById("cpp");
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

function expandProject5(){
    let button=document.getElementById("button-p5");
    let text=document.getElementById("collapse-p5");


    
    if (text.style.display === "inline"){
        text.style.display="none";

        button.innerHTML="View More";
    
    }
    else{
        text.style.display="inline";
        
       
        button.innerHTML="View Less";
    }
}

function swapPicture(){
    let giraffe=document.getElementById("giraffe");
    let grey=document.getElementById("grey-giraffe");
    let red=document.getElementById('red-giraffe');
    if (giraffe.style.display=="inline"){
        giraffe.style.display="none";
        red.style.display="none";
        grey.style.display="inline";
        console.log("Swap");
    }
    else{
        console.log("Swap Back");
        giraffe.style.display="inline";
        grey.style.display="none";
        red.style.display="none";
    };
}

function swapPictureRed(){
    let giraffe=document.getElementById("grey-giraffe");
    let red=document.getElementById("red-giraffe");
    if (giraffe.style.display=="inline"){
        giraffe.style.display="none";
        red.style.display="inline";
        console.log("Swap");
    }
    
}

function openResume(){
    let resume=document.getElementById("resume-pdf");
    console.log("test");
    if (resume.style.display=="none"){
        resume.style.display="inline";

    }
    else{
        resume.style.display="none";
    }
}