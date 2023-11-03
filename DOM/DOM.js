//! JavaScript Tekli Seçiciler
      /*    const title = document.querySelector("h1");
      const title2 = document.getElementById("title")
      title.style.color = "red";
      title2.style.color = "blue" */
      /* document.querySelector("h1").style.color = "white";
      document.querySelector("h1").style.backgroundColor = "red";
      document.querySelector("h1").style.width = "250px";
      document.querySelector("h1").style.height = "100px";
      const title = document.querySelector("h1");
      title.innerText = "DOM";
      title.innerHTML = "<button>click</button>"; */
      /*  const list = document.querySelector("ul");
      document.querySelector("li").style.color = "red";
      document.querySelector("li:last-child").style.color = "blue";
      document.querySelector("li:nth-child(3)").style.color = "purple";
      document.querySelector("li:nth-child(2)").style.color = "purple";
      document.querySelector("li:nth-child(4)").style.color = "purple"; */

      //! JavaScript Çoklu Seçiciler
      /* const listItem = document.getElementsByClassName("list-item"); */
      /* const listItem = document.querySelectorAll(".list-item"); */
    /*   const list1 = document.querySelector(".list2")
      const listItems = list1.getElementsByTagName("li"); */
      const listItems = document.querySelectorAll("#list li")

      /*   for (let i = 0; i < listItems.length; i++) {
        listItem[i].style.color = "red"
      } */

      for (let list of listItems) {
        list.style.color = "blue";
      }