//word count app 

document.querySelector("textarea").addEventListener("input",(e)=>{
    var str = e.target.value;
    document.querySelector("strong").innerHTML=str.length
    
       var wordcount = str.length ? 1 : 0;
       for(var i=0;i<str.length;i++){
          if(str[i-1]===" " && str[i]!==" "){
             wordcount++
          }
       }
    document.querySelector("span").innerHTML=wordcount;
    })
    
    
    
    
    
    