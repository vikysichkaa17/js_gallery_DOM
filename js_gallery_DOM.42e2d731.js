"use strict";document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector(".gallery"),t=document.querySelector(".gallery__large-img");e.addEventListener("click",function(e){e.preventDefault();var r=e.target;"IMG"===r.tagName&&(r=r.parentElement),"A"===r.tagName&&t.setAttribute("src",r.href)})});
//# sourceMappingURL=js_gallery_DOM.42e2d731.js.map
