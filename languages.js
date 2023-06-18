import {data} from 'languages_data';

let langs = document.querySelector(".langs"),
     link = document.querySelectorAll(".langs a"),
     title = document.querySelector(".title"),
     descr = document.querySelector(".description");
     ticmenu = document.querySelector(".ticmenu");

  
     irysymenu = document.querySelector(".irysymenu");
     bajecznemenu = document.querySelector(".bajecznemenu");
     shopbutton = document.querySelector(".shopbutton");
     descbutton = document.querySelector(".descbutton");

     shoptitle = document.querySelector(".shoptitle");
     shopdesc = document.querySelector(".shopdesc");


     irysydesc = document.querySelector(".irysydesc");
     bajecznedesc = document.querySelector(".bajecznedesc");
     michalkidesc = document.querySelector(".michalkidesc");



     movedesc = document.querySelector(".movedesc");
     playwithfriend = document.querySelector(".playwithfriend");
     playwithcomputer = document.querySelector(".playwithcomputer");
     computerfirst = document.querySelector(".computerfirst");
     authordesc = document.querySelector(".authotdesc");



link.forEach(el=>{
     el.addEventListener("click", ()=>{
          langs.querySelector(".active").classList.remove("active");
          el.classList.add("active");

          let attr = el.getAttribute("language")

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
          
          movedesc.textContent = data[attr].movedesc
          playwithfriend.textContent = data[attr].playwithfriend
          playwithcomputer.textContent = data[attr].playwithcomputer
          computerfirst.textContent = data[attr].computerfirst
          authordesc.textContent = data[attr].authotdesc
     

     })
})

// let data = {
//      polish: {
//           title: "Irysy - sklep z cukierkami",
//           description: "Chyba każdy pamięta krówkę ciągutkę albo niesamowity, ponadczasowy i kultowy smak irysów...",
//           ticmenu: "Kółko i krzyżyk",
//           irysymenu: "Irysy",
//           bajecznemenu: "Bajeczne",
//           shopbutton:"Przejdź do sklepu",
//           descbutton:"O naszych cukierkach",
//           shoptitle:"Nasz sklep z cukierkami",
//           shopdesc:"Raj dla wszystkich miłośników słodyczy - niepowtarzalny sklep z cukierkami. Oferujemy szeroki wybór pysznych i kolorowych cukierków, od klasycznych smaków po unikalne i egzotyczne kompozycje.",
//           irysydesc:"Irysy to kultowe polskie cukierki o niezwykłym smaku i teksturze. Są wykonane z delikatnej masy karmelowej, pokrytej czekoladą. Ich unikalna kombinacja słodyczy i lekkości sprawia, że są nieodłącznym elementem wspomnień dzieciństwa i ulubionym smakołykiem wielu osób.",
//           bajecznedesc:"Bajeczne to wyjątkowe cukierki o magicznym smaku. Ich kolorowe i fantazyjne wzory wzbudzają wyobraźnię, a ich słodki i owocowy smak przywołuje uczucie czarowniczych opowieści. Bajczne są nie tylko smaczne, ale także pięknie prezentują się jako dekoracja na słodkie stoły i przyjęcia.",
//           michalkidesc:"Michałki to popularne polskie łakocie o intensywnym orzechowym smaku. Są wykonane z karmelu i prażonych orzechów, tworząc niezwykle chrupiącą i aromatyczną kompozycję. Ich unikalna tekstura i doskonałe połączenie słodkości z orzechowym posmakiem czynią je niezwykle rozkosznym przysmakiem.",
          
//           movedesc:"Ruch gracza",
//           playwithfriend:"Graj ze znajomym",  
//           playwithcomputer:"Graj z komputerem",
//           computerfirst: "Komputer zaczyna",
//           authordesc:"Autor: Mikecoder", 
//      },
     
//      english: {
//           title: "Irysy - sweetshop",
//           description: "I think everyone remembers the cow caramel or the amazing, timeless, and iconic taste of irises...",
//           ticmenu: "TicTacToe",
//           irysymenu: "Irises",
//           bajecznemenu: "Bajeczne",
//           shopbutton: "Go to the store",
//           descbutton: "About our candies",
//           shoptitle: "Our candy store",
//           shopdesc:"A paradise for all candy lovers - a unique candy store. We offer a wide selection of delicious and colorful candies, ranging from classic flavors to unique and exotic combinations.",
         
//           irysydesc: "Irises are iconic Polish candies with a remarkable taste and texture. They are made of delicate caramel mass covered in chocolate. Their unique combination of sweetness and lightness makes them a nostalgic childhood treat and a favorite indulgence for many.",
//           bajecznedesc:"Bajeczne candies are unique sweets with a magical flavor. Their colorful and imaginative patterns spark the imagination, while their sweet and fruity taste evokes the feeling of enchanting stories. Bajeczne candies are not only delicious but also make beautiful decorations for sweet tables and parties.",
//           michalkidesc:"Michałki are popular Polish sweets with an intense nutty flavor. They are made of caramel and roasted nuts, creating an incredibly crunchy and aromatic composition. Their unique texture and perfect balance of sweetness with a nutty aftertaste make them a delightful treat.",
         
//           movedesc: "Player's move",
//           playwithfriend: "Play with a friend",
//           playwithcomputer: "Play with the computer",
//           computerfirst: "Computer starts",
//           authordesc: "Author: Mikecoder",
//      },
     
// }