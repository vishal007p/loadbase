import { Box, Grid } from "@mui/material";
import ContactUs from '../../assets/contactUs.jpg'
import Form from "../../Components/Form/Form";



const Contact = () => {
    return (
        <>
            <Box sx={{ width: '100%', background: '#FFFF00', height: '100%', textAlign: 'center', padding: '60px 0px' }}>
                <h1 style={{ fontSize: '5rem' }}>Contact Us</h1>
            </Box>


            <Box sx={{ width: '80%', height: '100%', margin: '60px auto' }}>
                <Grid container>
                    <Grid xs={6}>
                        <img src={ContactUs} alt="" style={{ width: '80%', height: '600px', borderRadius: '10px' }} />
                    </Grid>

                    <Grid xs={6}>
                        <Box  sx={{padding:'40px'}}>
                            <Form />
                        </Box>
                    </Grid>
                </Grid>
            </Box>

        </>

    )
}

export default Contact
