document.getElementById("moreabout").addEventListener("click", show);

function show() {
 
 if( document.getElementById("detailinfo").style.display=='none'){
    document.getElementById("detailinfo").style.display='block';
    document.getElementById("intro").style.display='none';
    document.getElementById("moreabout").innerHTML='less detail';
    document.getElementById("info").style.display='none';
    
 }
 else if( document.getElementById("detailinfo").style.display=='block'){
    document.getElementById("detailinfo").style.display='none';
    document.getElementById("intro").style.display='block';
    document.getElementById("moreabout").innerHTML='More about';
    document.getElementById("info").style.display='block';
 }
}