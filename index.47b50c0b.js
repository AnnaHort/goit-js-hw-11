const e=document.querySelector('[name="searchQuery"]');fetch(`https://pixabay.com/api/?key=38070095-9e6d535b4dc883ad57627f805&q=${e.value}&image_type=photo&orientation=horizontal&safeswarch=true`).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()})).then((e=>{console.log(e)})).catch((e=>console.log(e.status)));
//# sourceMappingURL=index.47b50c0b.js.map
