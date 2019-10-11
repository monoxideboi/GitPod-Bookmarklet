if (window.location.href.indexOf("https://github.com") > -1) {
window.location.replace(
          "https://gitpod.io/#"+window.location.href
        );
}
else {
  alert ("This is not a Github Website. Try find a repository with https://github.com");
}
