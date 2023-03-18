
setInterval(update,1)
function update(){
    let date = new Date()
    const finalTime=document.getElementById("hour").innerText = formatehour(date);
    const finalTime2=document.getElementById("min").innerText = formatemin(date);
    const finalTime3=document.getElementById("sec").innerText = formatesec(date);
    const finalTime4=document.getElementById("amOrpm").innerText = formateam(date);
    if(Number(formatesec(date)%2)===0){
        document.getElementById("hm-sep").style.visibility = "hidden"
        document.getElementById("mm-sep").style.visibility= "hidden"
    }
    else{
        document.getElementById("hm-sep").style.visibility = "visible"
        document.getElementById("mm-sep").style.visibility= "visible"
    }
    function formatehour(date){
        let hr = date.getHours()
        let amOrpm = hr >= 12 ? "PM" : "AM"
        hr = hr>12 ? hr-12 : hr
        hr=zero(hr);
        return hr
        function zero(time){
            time = time.toString();
         
            return time.length>1 ? time :"0"+time;
        }
 
    }
    function formatemin(date){
        let mn = date.getMinutes()
        mn=zero(mn);
        return mn
        function zero(time){
            time = time.toString();
   
            return time.length>1 ? time :"0"+time;
        }
    }
    function formatesec(date){
        let sc = date.getSeconds()
        sc=zero(sc);
        return sc
        function zero(time){
            time = time.toString();
       
            return time.length>1 ? time :"0"+time;
        }
        
    }
    function formateam(date){
        let hr = date.getHours()
        let amOrpm = hr >= 12 ? "PM" : "AM"
        return amOrpm
    }
}




