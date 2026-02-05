$(document).ready(function(){
    $("#main-header").load("/views/header.html");
    $("#main-footer").load("/views/footer.html");
    loadParams();
});

function addContent(name){
    $("#main-content").load("/views/" + name + ".html");
}

function loadContent(name){
    window.location.href = "https://byt3d1st1ll3r.github.io?content=" + name
}

function loadParams(){
    queryString = window.location.search;
    urlParams = new URLSearchParams(queryString);
    totalParams = urlParams.size;
    console.log(totalParams);
    if (totalParams > 0) {
        content = filterParam(urlParams.get('content'));
    } else {
        content = "home";
    }
    addContent(content);
}
function filterParam(param){
    regex = /[<>'´"(){};:,.~*\\]/gi;
    if (regex.test(param)) {
        return "home";
      } else {
        return param;
    }
}

function copyTextToClipboard(text) {
    fullURL = "https://byt3d1st1ll3r.github.io?content=" + text;
    if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(fullURL).then(() => {
        console.log('Text successfully copied to clipboard');
      }).catch(err => {
        console.error('Could not copy text: ', err);
      });
    } else {
      console.error('Clipboard API not supported');
    }
  }

function showInfo(name){
    $("#"+name).show();
}

function hideInfo(name){
    $("#"+name).hide();
}

function getCarrId(tagid){
    asrc = $("#"+tagid).attr("src");
    aidsr = asrc.split("web");
    aids = aidsr[1].split(".");
    return parseInt(aids[0]);
}

function next(tagid, n){
    aid = getCarrId(tagid)
    nid = (aid+1)%n;
    $("#"+tagid).attr("src","/assets/images/carr/"+tagid+"/" + nid.toString() + ".jpg");
}

function prev(tagid, n){
    aid = getCarrId(tagid)
    nid = (aid+n-1)%n;
    $("#"+tagid).attr("src","/assets/images/carr/"+tagid+"/" + nid.toString() + ".jpg");
}
