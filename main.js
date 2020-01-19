function myFunction()
{
    var string_length=prompt("Enter the characters required in the password");
    var num=prompt("Enter the numbers required in the password");
    var spcl=prompt("Enter the numbers required in the password");
   
    var randomstring = "";
    for (var i=0; i<string_length; i++) {
        var rnum = Math.floor((Math.random() * 26)+65);
        randomstring += String.fromCharCode(rnum);
    }
   
    for (var i=0;i<spcl; i++) {
        var rnum = Math.floor((Math.random() * 8)+41);
        randomstring += String.fromCharCode(rnum);
    }
    for (var i=0;i<num; i++) {
      var rnum = Math.floor(Math.random() *9);
      randomstring += rnum;
  }
    document.getElementById("demo").innerHTML= randomstring;
    
    
}

