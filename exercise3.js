function validate(){  
    var name=document.f1.name.value;  
    var password=document.f1.password.value;  
    var status=false;  
      
    if(name.length<1){  
    document.getElementById("nameloc").innerHTML=  
    " <img src='unchecked.gif'/> Please enter your name";  
    status=false;  
    }else{  
    document.getElementById("nameloc").innerHTML=" <img src='checked.gif'/>";  
    status=true;  
    }  
    if(password.length<6){  
    document.getElementById("passwordloc").innerHTML=  
    " <img src='unchecked.gif'/> Password must be at least 6 char long";  
    status=false;  
    }else{  
    document.getElementById("passwordloc").innerHTML=" <img src='checked.gif'/>";  
    }  
    return status;  
    }  

function validateemail()  
{  
var x=document.myform.email.value;  
var atposition=x.indexOf("@");  
var dotposition=x.lastIndexOf(".");  
if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
  alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
  return false;  
  }  
}  
