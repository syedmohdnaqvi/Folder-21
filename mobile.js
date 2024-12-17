document.write(`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .mobile {
        /* background-color: red; */
        width: 100%;
        height: 80px;
        display: flex;
      }

      .mobileleft {
        /* background-color: blue; */
        width: 50%;
        height: 100%;
        padding-left: 20px;
      }

      .mobileright {
        /* background-color: yellow; */
        width: 50%;
        height: 100%;
        display: flex;
        justify-content: end;
        align-items: center;
        padding-right: 10px;
      }

      .mobileright>button>div{
        border: solid 2px black;
        margin: 5px;
        width: 15px;
      }

      #mymenu>li{
        list-style: none;
      }

     </style>
  </head>
  <body>
    <div class="mobile">
      <div class="mobileleft">
        <img
          src="https://logos.textgiraffe.com/logos/logo-name/Syed-designstyle-popstar-m.png"
          height="100%"
          width="50%"
          alt=""
        />
      </div>

      <div class="mobileright">
        <button  id="show">
          <div></div>
          <div></div>
          <div></div>
        </button>
      </div>
    </div>



    <ul style="display: none;" id="mymenu">
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Gallery</li>
        <li>Reviews</li>
        <li>Contact</li>
    </ul>
    
    
    
    
    
    
    <script>

         document.getElementById("show").addEventListener("click", function(){
            a = document.getElementById("mymenu");
            b = document.getElementById("show");
            if(a.style.display == "block"){
                a.style.display = "none";
                b.innerHTML = "<div></div><div></div><div></div>";
 
            }else{
                a.style.display = "block";
                b.innerHTML = "X"
            }
         })
    </script>
  </body>
</html>
`)