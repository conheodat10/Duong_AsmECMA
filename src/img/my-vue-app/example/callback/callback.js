const url = "http://www.w3schools.com/";
function loadScript(src, callback){
    let script = document.createElement("script");
    script.src=src;
    //chờ script load xong thì chạy callback
    script.onload = function (){
        //script -> <script src= "url"></script>
        callback(script);
    }
}

loadScript(url, (script)=>{
    console.log("lodash loaded", script);
});