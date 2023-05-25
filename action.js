const url = window.location.href;
console.log(url, "Now you can focus...");
function myFunc() {
  console.log('hello')
  if (location.href === "https://www.linkedin.com/feed/" || location.href === "https://www.linkedin.com/feed/?trk=homepage-basic_sign-in-submit"){
  const items = document.querySelector(".scaffold-layout__main")
  const toClean = items.children[2]
  toClean.innerHTML = ''
  }
 console.log(location.href)
}

let previousUrl = '';
const observer = new MutationObserver(function(mutations) {
  if (location.href === "https://www.linkedin.com/feed/" || location.href === "https://www.linkedin.com/feed/?trk=homepage-basic_sign-in-submit"){
    myFunc()
  }
});
const config = {subtree: true, childList: true};
observer.observe(document, config);