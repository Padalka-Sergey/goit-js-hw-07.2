import{g as s}from"./assets/gallery-items-d77370d5.js";/* empty css                      */let t=null;const a=document.querySelector(".gallery"),o=i(s);a.innerHTML=o;a.addEventListener("click",m);function i(e){return e.map(({preview:n,description:c,original:r})=>`<li class="gallery__item"><a class="gallery__link" href=${r}><img class="gallery__image" src=${n} data-source=${r} alt=${c}/></a></li>`).join("")}function m(e){e.preventDefault(),e.target.nodeName==="IMG"&&(t=basicLightbox.create(`
    <img src=${e.target.dataset.source} width="800" height="600">
`),t.show(()=>document.addEventListener("keydown",l)))}function l(e){console.log("Слушатель ESC"),e.code==="Escape"&&t.close(()=>document.removeEventListener("keydown",l))}
//# sourceMappingURL=commonHelpers.js.map
