!function(){function n(n){return n&&n.__esModule?n.default:n}var e={};Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")};var a={};function t(n,e){for(var a=0;a<e.length;a++){var t=e[a];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(n,e,a){e&&t(n.prototype,e);a&&t(n,a);return n};var o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(n,e,a){e in n?Object.defineProperty(n,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[e]=a;return n};var s=function(){"use strict";function t(){n(e)(this,t),n(o)(this,"API_KEY","38070095-9e6d535b4dc883ad57627f805"),n(o)(this,"BASE_URL","https://pixabay.com/api/"),n(o)(this,"query",null),n(o)(this,"page",1)}return n(a)(t,[{key:"fetchPhotos",value:function(){return fetch("".concat(this.BASE_URL,"?key=").concat(this.API_KEY,"&q=").concat(this.query,"&image_type=photo&orientation=horizontal&safesearch=true&page=").concat(this.page,"&per_page=40")).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()}))}}]),t}();var c=document.querySelector(".search-form"),r=document.querySelector(".gallery"),i=(document.querySelector(".load-more"),c.firstElementChild),l=new s;c.addEventListener("submit",(function(n){n.preventDefault();var e=i.value.trim();if(!e)return console.log("Sorry, there are no images matching your search query. Please try again.");l.query=e,l.fetchPhotos().then((function(n){if(!n.hits.length)return console.log("Sorry, there are no images matching your search query. Please try again.");r.innerHTML=n.hits.map((function(n){var e=n.tags,a=n.largeImageURL,t=n.webformatURL,o=n.likes,s=n.views,c=n.comments,r=n.downloads;return'\n          \n          <div class="photo-card">\n          <a class="gallery__link" href="'.concat(a,'">\n          <img src="').concat(t,'" alt="').concat(e,'" loading="lazy"/>\n          </a>\n    \n          <div class="info">\n            <p class="info-item">\n              <b class="info-desc"><span class = "info-name" >Likes ').concat(o,'</span> <span class = "info-value">').concat(o,'</span></b>\n            </p>\n            <p class="info-item">\n              <b class="info-desc"><span class = "info-name" >Views ').concat(s,'</span> <span class = "info-value" >').concat(s,'</span></b>\n            </p>\n            <p class="info-item">\n              <b class="info-desc"><span class = "info-name" >Comments ').concat(c,'</span> <span class = "info-value">').concat(c,'</span></b>\n            </p>\n            <p class="info-item">\n              <b class="info-desc"><span class = "info-name" >Downloads ').concat(r,'</span> <span class = "info-value">').concat(r,"</span></b>\n            </p>\n          </div>\n         \n        </div>")})).join("")})).catch(console.warn)}))}();
//# sourceMappingURL=index.70f350de.js.map
