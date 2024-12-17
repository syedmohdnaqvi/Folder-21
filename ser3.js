document.write(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <style>
        .ser5{
            height: 80px;
            width: 100%;
            /* background-color: aqua; */
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 50px;
        }

        .ser6{
            height: 400px;
            width: 100%;
            /* background-color: red; */
            display: flex;
            justify-content: center;
        }

        .ser6left{
            height: 100%;
            width: 40%;
            /* background-color: yellow; */
            background-image: url('https://images.pexels.com/photos/1870438/pexels-photo-1870438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
            background-size: cover;
            background-position: center center;
            border-radius: 10px;
            background-repeat: no-repeat;
        }

        .ser6right{
            height: 100%;
            width: 40%;
            /* background-color: aqua; */
            display: flex;
            flex-direction: column;
            justify-content: start;
            align-items: center;
        }

        .ser6right>p{
            font-size: 20px;
            padding-left: 20px;
        }


        @media only screen and (max-width:450px){

            .ser6{
                height:fit-content;
                flex-direction: column;
            }

            .ser6left{
                width: 100%;
                height: 320px;
            }

            .ser6right{
                width: 100%;
            }

        }
        
    </style>
</head>
<body>
    
    <div class="ser6">
        <div class="ser6left">

        </div>

        <div class="ser6right">
            <h2>
                Filming & Photography
            </h2>

            <p>
                Our professional team offers top-notch filming and photography services, capturing the essence of your special moments. Whether it’s a corporate event, wedding, or personal celebration, we use the latest equipment and techniques to deliver stunning visuals that tell your unique story.
            </p>
        </div>

    </div>  
</body>
</html>`)