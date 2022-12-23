document.getElementById("userid").innerHTML=Math.floor(Math.random() *1000);

function validateform(){
    var username = document.myform.user1.value;
    var password = document.myform.password.value;
    var passwordNew = document.myform.passwordN.value;
    var address = document.myform.add.value;
    var qualif = document.myform.qual.value;
    var hob = document.myform.hobb.value;

    var uppercasel = /[A-Z]/g; 
    var numbr = /[0-9]/g;

    

    if(username.length<6){
       
        document.getElementById("user").innerHTML="*Must conatin 6 letters*";
        return false;
    }
    else if(password.length<8 ){
        document.getElementById("pwd").innerHTML="*password must be of 8 characters*";
        return false;
    }
    else if(!(password.match(uppercasel)) || !(password.match(numbr))){
        document.getElementById("pwd").innerHTML="Password must conatin one Capital and one number";
        return false;
    }
    else if(password != passwordNew){
        document.getElementById("pwdNew").innerHTML="Password must be same";
        return false();
    }
    else{
        var result= "User Name:"+username+"  Address:"+address+"  Qualification:"+qualif+"  Hobby:"+hob
        localStorage.setItem('output',result);
       
        return true;
    }
}

