import{g as s}from"./assets/gallery-items-d77370d5.js";/* empty css                      */let t=null;const a=document.querySelector(".gallery"),i=o(s);a.innerHTML=i;a.addEventListener("click",m);function o(e){return e.map(({preview:l,description:c,original:r})=>`<li class="gallery__item"><a class="gallery__link" href=${r}><img class="gallery__image" src=${l} data-source=${r} alt=${c}/></a></li>`).join("")}function m(e){e.preventDefault(),e.target.nodeName==="IMG"&&(t=basicLightbox.create(`
    <img src=${e.target.dataset.source} width="800" height="600">
`),t.show(()=>document.addEventListener("keydown",n)))}function n(e){e.code==="Escape"&&t.close(()=>document.removeEventListener("keydown",n))}
//# sourceMappingURL=commonHelpers.js.map
