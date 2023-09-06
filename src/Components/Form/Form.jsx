import { Box, Button } from "@mui/material"
import InputBase from "../InputBase/InputBase"



const Form = () => {
    return (
        <Box>

            <h1>Get In Touch</h1>

            <Box sx={{ marginTop: '30px' }}>
                <InputBase />
            </Box>

            <Box sx={{ marginTop: '30px' }}>
                <InputBase />
            </Box>

            <Box sx={{ marginTop: '30px' }}>
                <InputBase />
            </Box>

            <Box sx={{ marginTop: '30px' }}>
                <textarea name="" id="" cols="30" rows="10" placeholder="Subject" style={{ width: '90%', border: 'none', borderBottom: '1px solid black', height: '80px', outline: 'none',fontWeight:'500', fontFamily:'Roboto', }} ></textarea>
            </Box>


            <Box sx={{ marginTop: '30px' }}>
                <textarea name="" id="" cols="30" rows="10" placeholder="Your Message" style={{ width: '90%', border: 'none', borderBottom: '1px solid black', height: '80px', outline: 'none',fontWeight:'500', fontFamily:'Roboto', }} ></textarea>
            </Box>

            <Box  sx={{marginTop:'30px'}}>
                <Button   sx={{backgroundColor: '#FFFF00', color: 'black', fontWeight: '600', padding: '8px 20px', borderRadius: '20px',}}>Send</Button>
            </Box>

        </Box>

    )
}

export default Form
