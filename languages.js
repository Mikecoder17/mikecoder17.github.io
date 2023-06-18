let langs = document.querySelector(".langs"),
     link = document.querySelectorAll(".langs a"),
     title = document.querySelector(".title"),
     descr = document.querySelector(".description"),
     ticmenu = document.querySelector(".ticmenu"),
     irysymenu = document.querySelector(".irysymenu"),
     bajecznemenu = document.querySelector(".bajecznemenu"),
     shopbutton = document.querySelector(".shopbutton"),
     descbutton = document.querySelector(".descbutton"),
     shoptitle = document.querySelector(".shoptitle"),
     shopdesc = document.querySelector(".shopdesc"),
     irysydesc = document.querySelector(".irysydesc"),
     bajecznedesc = document.querySelector(".bajecznedesc"),
     michalkidesc = document.querySelector(".michalkidesc"),
     gametitle = document.querySelector(".gametitle"),
     movedesc = document.querySelector(".movedesc"),
     playwithfriend = document.querySelector(".playwithfriend"),
     playwithcomputer = document.querySelector(".playwithcomputer"),
     computerfirst = document.querySelector(".computerfirst")




link.forEach(el=>{
     el.addEventListener("click", ()=>{
          langs.querySelector(".active").classList.remove("active");
          el.classList.add("active");

          let attr = el.getAttribute("hreflang")

          title.textContent = data[attr].title
          descr.textContent = data[attr].description
          ticmenu.textContent = data[attr].ticmenu
          irysymenu.textContent = data[attr].irysymenu
          bajecznemenu.textContent = data[attr].bajecznemenu
          shopbutton.textContent = data[attr].shopbutton
          descbutton.textContent = data[attr].descbutton   
          shoptitle.textContent = data[attr].shoptitle
          shopdesc.textContent = data[attr].shopdesc
          irysydesc.textContent = data[attr].irysydesc
          bajecznedesc.textContent = data[attr].bajecznedesc
          michalkidesc.textContent = data[attr].michalkidesc 
          gametitle.textContent = data[attr].gametitle
          movedesc.textContent = data[attr].movedesc
          playwithfriend.textContent = data[attr].playwithfriend
          playwithcomputer.textContent = data[attr].playwithcomputer
          computerfirst.textContent = data[attr].computerfirst     

     })
})
