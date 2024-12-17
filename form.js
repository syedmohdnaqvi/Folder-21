document.write(`
   
<div class="form">
    <p class="contactusheading">Contact Us</p>
    <div class="twoleftrightdivs">
        <div class="leftfive">
            <form onsubmit="data(event)" id="contact-form">
                <input
                    type="text"
                    name="name"
                    id="Name"
                    placeholder="Name"
                    required
                /><br /><br />
                <input
                    type="text"
                    name="service_name"
                    id="ServiceName"
                    placeholder="Service Name"
                    required
                /><br /><br />
                <input
                    type="number"
                    name="phone_number"
                    id="PhoneNumber"
                    placeholder="Phone"
                    required
                /><br /><br />
                <input
                    type="email"
                    name="email"
                    id="Email"
                    placeholder="Email"
                    required
                /><br /><br />
                <textarea
                    name="message"
                    id="Message"
                    placeholder="Message"
                    cols="30"
                    rows="10"
                    required
                ></textarea><br /><br />
                <button type="submit" class="btn3">SUBMIT</button>
            </form>
        </div>
        <div class="rightfive"></div>
    </div>
</div>



<p id='ans'></p>

<!-- Include EmailJS SDK -->
<script src="https://cdn.emailjs.com/dist/email.min.js"></script>
<script>
    // Initialize EmailJS with your User ID
    (function() {
        emailjs.init('-dowNhEpJmh7chrIx'); // Replace 'YOUR_USER_ID' with your actual user ID from EmailJS
    })();

    // Handling form submission
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Send form data using EmailJS
        emailjs.sendForm('service_drognfd', 'template_2mavcee', this)
            .then(function(response) {
                alert('SUCCESS!', response.status, response.text);
            }, function(error) {
                alert('FAILED...', error);
            });
    });



    //mmmmmmmmm


    
function data(event){
        
        
        event.preventDefault()
        a1=document.getElementById('Name').value
        a2=document.getElementById('ServiceName').value
        a3=document.getElementById('PhoneNumber').value
        a4=document.getElementById('Email').value
        a5=document.getElementById('Message').value


        const student ={
            a6:a1,
            a7:a2,
            a8:a3,
            a9:a4,
            a10:a5
        }
    console.log(student)
        document.getElementById('ans').innerHTML="I am "+student.a6+ "My Service is: "+student.a7+"My Number is: "+student.a8+"My Email is:"+student.a9+"My message is:" + student.a10
        console.log(student);

    }

</script>
   
   
   
    `)