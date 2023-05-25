const url = window.location.href;
console.log(url, "Now you can focus...");
function myFunc() {
  console.log('hello')
  if (location.href === "https://www.linkedin.com/feed/"){
  const items = document.querySelector(".scaffold-layout__main")
  const toClean = items.children[2]
  toClean.innerHTML = ''
  }
 console.log(location.href)
}
myFunc()
let previousUrl = '';
const observer = new MutationObserver(function(mutations) {
  if (location.href === "https://www.linkedin.com/feed/"){
    myFunc()
  }
});
const config = {subtree: true, childList: true};
observer.observe(document, config);