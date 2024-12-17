document.write(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <style>
        .ser4{
            height: 400px;
            width: 100%;
            /* background-color: red; */
            display: flex;
            justify-content: center;
        }

        .ser4left{
            height: 100%;
            width: 40%;
            /* background-color: yellow; */
            display: flex;
            flex-direction: column;
            justify-content: start;
            align-items: center;
        }

        .ser4right{
            height: 100%;
            width: 40%;
            /* background-color: aqua; */
            background-image: url('https://images.pexels.com/photos/57980/pexels-photo-57980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
            background-size: cover;
            background-position: center center;
            border-radius: 10px;
            background-repeat: no-repeat;
        }

        .ser4left>p{
            font-size: 20px;
            padding-left: 20px;
        }


        @media only screen and (max-width:450px){

            .ser4{
                height:fit-content;
                flex-direction: column-reverse;
            }

            .ser4left{
                width: 100%;
            }

            .ser4right{
                width: 100%;
                height: 320px;
            }
            
        }
        
    </style>
</head>
<body>

    <div class="ser4">
        <div class="ser4left">
           <h2>
                Event Planning
            </h2>

            <p>
                We specialize in organizing corporate events, weddings, and private parties, ensuring every detail is meticulously planned and executed. Our team is dedicated to creating memorable and seamless experiences, from venue selection to entertainment and catering, tailored to your specific needs and preferences.

            </p>
        </div>

        <div class="ser4right">
            
        </div>

    </div>  
</body>
</html>`)