document.write(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <style>
        .ser1{
            height: 80px;
            width: 100%;
            /* background-color: aqua; */
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 50px;
        }

        .ser2{
            height: 400px;
            width: 100%;
            /* background-color: red; */
            display: flex;
            justify-content: center;
        }

        .ser2left{
            height: 100%;
            width: 40%;
            /* background-color: yellow; */
            background-image: url('https://images.pexels.com/photos/1157557/pexels-photo-1157557.jpeg?auto=compress&cs=tinysrgb&w=600');
            background-size: cover;
            background-position: center center;
            border-radius: 10px;
            background-repeat: no-repeat;
        }

        .ser2right{
            height: 100%;
            width: 40%;
            /* background-color: aqua; */
            display: flex;
            flex-direction: column;
            justify-content: start;
            align-items: center;
        }

        .ser2right>p{
            font-size: 20px;
            padding-left: 20px;
        }


        @media only screen and (max-width:450px){

            .ser2{
                height:fit-content;
                flex-direction: column;
            }

            .ser2left{
                width: 100%;
                height: 320px;
            }

            .ser2right{
                width: 100%;
            }
            
            .btn1{
                margin-left:2%;
            }



            
        }
        
    </style>
</head>
<body>
    <div class="ser1">

        Our Services

    </div>


    <div class="ser2">
        <div class="ser2left">

        </div>

        <div class="ser2right">
            <h2>
                Party Booking 
            </h2>

            <p>
                We help book the best places for parties in Dubai, from luxury hotels to cozy cafes and stylish restaurants. Our strong connections with top venues mean you get the best rates and top service. We make sure your party is fun and unforgettable. Whether it’s a big celebration or a small gathering, we handle all the details. Let us make your event in Dubai special and stress-free.

            </p>
        </div>

    </div>  
</body>
</html>`)