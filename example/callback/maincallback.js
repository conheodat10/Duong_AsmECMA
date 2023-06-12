const url = "https://www.facebook.com/"
function loadScrip(src, callback) {
    let scrip = document.createElement("scrip");
    scrip.src = src;
    // 
    scrip.onload = function () {
        callback(scrip);
    };
    document.head.append(scrip);
};

loadScrip(url, function (scrip) {
    console.log("loash loaded", scrip);
}); 