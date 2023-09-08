import { Box, Button } from "@mui/material"
import InputBase from "../InputBase/InputBase";
import emailjs from '@emailjs/browser';
import { useRef } from "react";



const Form = () => {

    const form = useRef();


    const sendEmail = (e) => {

        e.preventDefault();
    
        emailjs.sendForm('service_mrhnhqd', 'template_swk7lrd', form.current, '1CreWZxeadAhv4SY8')
          .then((result) => {
              console.log(result.text);

              alert("Sent Successfully")
          }, (error) => {
              console.log(error.text);
          });
      };

    
    return (
        <Box>
            <form  ref={form}   onSubmit={sendEmail}>


                <h1>Get In Touch</h1>

                <Box sx={{ marginTop: '30px' }}>
                    <InputBase  placeholder="First Name"  type="text"  name="name" />
                </Box>

                <Box sx={{ marginTop: '30px' }}>
                    <InputBase  placeholder=" Last Name" type="text" name="name" />
                </Box>

                <Box sx={{ marginTop: '30px' }}>
                    <InputBase placeholder="Email Address"  type="email" name="user_email" />
                </Box>

                <Box sx={{ marginTop: '30px' }}>
                    <textarea name="subject" id="" cols="30" rows="10" placeholder="Subject" style={{ width: '90%', border: 'none', borderBottom: '1px solid black', height: '80px', outline: 'none', fontWeight: '500', fontFamily: 'Roboto', }} ></textarea>
                </Box>


                <Box sx={{ marginTop: '30px' }}>
                    <textarea name="message" id="" cols="30" rows="10" placeholder="Your Message" style={{ width: '90%', border: 'none', borderBottom: '1px solid black', height: '80px', outline: 'none', fontWeight: '500', fontFamily: 'Roboto', }} ></textarea>
                </Box>

             

                <input type="submit" value="Send"  style={{cursor:'pointer', backgroundColor: '#FFFF00', color: 'black', fontWeight: '600', padding: '8px 20px', borderRadius: '20px',border:'none', marginTop:'20px' }}/> 
                
                
               </form>

        </Box>

    )
}

export default Form
