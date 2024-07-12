import{g as l}from"./assets/gallery-items-d77370d5.js";/* empty css                      */const r=document.querySelector(".gallery"),c=l.map(({preview:e,description:a,original:t})=>`<li class="gallery__item"><a class="gallery__link" href=${t}><img class="gallery__image" src=${e} data-source=${t} alt=${a}/></a></li>`).join("");r.innerHTML=c;r.addEventListener("click",s);function s(e){if(e.preventDefault(),e.target.nodeName!=="IMG")return;basicLightbox.create(`
    <img src=${e.target.dataset.source} width="800" height="600">
`).show(),console.dir(e.target)}
//# sourceMappingURL=commonHelpers.js.map
