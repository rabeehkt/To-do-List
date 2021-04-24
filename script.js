const username = document.getElementById("uname");
const password = document.getElementById("pass");

function validate()
{
  
    if(username.value.trim()=="")
    {
      alert("Blank Username");
      uname.style.border = "solid 3px red";
      error.innerHTML="Blank Username";
      error.style.color= "red";
      username.focus();
      setTimeout(function(){ 
        error.innerHTML = "";
        uname.style.border = "";
    }, 3000);
      return false;
    }

    else if(password.value.trim()=="")
    {
      alert("Blank Password");
      pass.style.border = "solid 3px red";
      error2.innerHTML="Blank Password";
      error2.style.color= "red";
      pass.focus();
      setTimeout(function(){ 
        error2.innerHTML = "";
        pass.style.border = "";
    }, 3000);
      return false;
    }

    else 
    //callback     
  {
    function reject(){
      console.log("rejected");
      verify.innerHTML="Username/Password Error";
      verify.style.color= "red";
      alert("Wrong Username or Password");
  }
  
  function approved(){
    console.log("approved");
    document.write("Redirecting....."); 
    setTimeout(function(){window.location = "main.html";}, 500); 
  }
  function check(a,b,done){
    if(x=="admin" && y=="12345"){
     
      done();
      }
    
      reject();
  }
  
  var x = username.value;
  var y = password.value;
  check(x,y,approved);
  

  }


  }
  

