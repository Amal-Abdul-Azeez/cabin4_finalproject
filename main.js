function myFunction1()
{
   
   
    var randomstring = "";
    for (var i=0; i<20; i++) {
        var rnum = Math.floor((Math.random() *90 )+33);
        randomstring += String.fromCharCode(rnum);
    }
   
  
    document.getElementById("demo").innerHTML= randomstring;
    
    
}

function myFunction2()
{
   
   
    var randomstring = "";
    for (var i=0; i<15; i++) {
        var rnum = Math.floor((Math.random() *90 )+33);
        randomstring += String.fromCharCode(rnum);
    }
   
  
    document.getElementById("demo").innerHTML= randomstring;
    
    
}
function myFunction3()
{
   
   
    var randomstring = "";
    for (var i=0; i<8; i++) {
        var rnum = Math.floor((Math.random() *90 )+33);
        randomstring += String.fromCharCode(rnum);
    }
   
  
    document.getElementById("demo").innerHTML= randomstring;
    
    
}



