document.write(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Responsive Navbar</title>
  <style>
    *{
  margin: 0;
  padding: 0;
}
body{
  min-height: 100vh;
  background: url('laptop.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
nav{
  background-color: white;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);
}
nav ul{
  width: 100%;
  list-style: none;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
nav li{
  height: 50px;
}
nav a{
  height: 100%;
  padding: 0 30px;
  text-decoration: none;
  display: flex;
  align-items: center;
  color: black;
}
nav a:hover{
  background-color: #f0f0f0;
}
nav li:first-child{
  margin-right: auto;
}
.sidebar{
  position: fixed;
  top: 0; 
  right: 0;
  height: 100vh;
  width: 250px;
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(12px);
  box-shadow: -10px 0 10px rgba(0, 0, 0, 0.1);
  list-style: none;
  display: none;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.sidebar li{
  width: 100%;
}
.sidebar a{
  width: 100%;
}
.menu-button{
  display: none;
}
@media(max-width: 800px){
  .hideOnMobile{
    display: none;
  }
  .menu-button{
    display: block;
  }
}
@media(max-width: 400px){
  .sidebar{
    width: 100%;
  }
}
  </style>
</head>
<body>
  <nav>
    <ul class="sidebar">
      <li onclick=hideSidebar()><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 96 960 960" width="26"><path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/></svg></a></li>
      <li><a href="#">Blog</a></li>
      <li><a href="#">Products</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Forum</a></li>
      <li><a href="#">Login</a></li>
    </ul>
    <ul>
      <li><a href="#">Coding2go</a></li>
      <li class="hideOnMobile"><a href="#">Blog</a></li>
      <li class="hideOnMobile"><a href="#">Products</a></li>
      <li class="hideOnMobile"><a href="#">About</a></li>
      <li class="hideOnMobile"><a href="#">Forum</a></li>
      <li class="hideOnMobile"><a href="#">Login</a></li>
      <li class="menu-button" onclick=showSidebar()><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 96 960 960" width="26"><path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"/></svg></a></li>
    </ul>
  </nav>

  <script>
    function showSidebar(){
      const sidebar = document.querySelector('.sidebar')
      sidebar.style.display = 'flex'
    }
    function hideSidebar(){
      const sidebar = document.querySelector('.sidebar')
      sidebar.style.display = 'none'
    }
  </script>
</body>
</html>`)