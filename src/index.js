document.querySelector("button").addEventListener("click",function(){
     if(document.querySelector("h1").style.color == ""){
     document.querySelector("h1").style.color = "red";
     }else{
      if(document.querySelector("h1").style.color == "black"){
        document.querySelector("h1").style.color = "red";
      }else{
          if(document.querySelector("h1").style.color == "red"){
              document.querySelector("h1").style.color = "black";
          }
     }
  }
})
     