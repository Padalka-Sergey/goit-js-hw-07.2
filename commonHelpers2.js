import{g as n}from"./assets/gallery-items-d77370d5.js";/* empty css                      */const a=document.querySelector(".gallery"),i=c(n);a.innerHTML=i;a.addEventListener("click",m);function c(e){return e.map(({preview:l,description:r,original:t})=>`<li class="gallery__item">
            <a class="gallery__link" href=${t}>
                <img class="gallery__image"  src=${l} alt="${r}"/>
            </a>
         </li>`).join("")}function m(e){e.preventDefault(),e.target.nodeName==="IMG"&&new SimpleLightbox(".gallery a",{captionsData:"alt",captionDelay:250})}
//# sourceMappingURL=commonHelpers2.js.map
