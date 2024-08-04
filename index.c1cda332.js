for(var e=document.documentElement.querySelectorAll(".population"),t=document.documentElement.querySelector(".total-population"),n=document.documentElement.querySelector(".average-population"),o=0,l=0;l<e.length;l++)o+=+e[l].outerText.split(",").join("");var r=o/e.length;t.innerHTML=o.toLocaleString("en-US"),n.innerHTML=r.toLocaleString("en-US");
//# sourceMappingURL=index.c1cda332.js.map
