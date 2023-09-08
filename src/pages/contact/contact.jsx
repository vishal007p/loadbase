import { Box, Grid } from "@mui/material";
import ContactUs from '../../assets/contactUs.jpg'
import Form from "../../Components/Form/Form";



const Contact = () => {
    return (
        <>
            <Box sx={{ width: '100%', background: '#FFFF00', height: '100%', textAlign: 'center', padding: '60px 0px' }}>
                <h1 style={{ fontSize: '5rem' }}>Contact Us</h1>
            </Box>


            <Box sx={{ width: {xs:'95%',sm:'90%',md:'80%'}, height: '100%', margin: '60px auto' }}>
                <Grid container>
                    <Grid xs={12}  sm={12} md={6}>

                        <Box  component="img" src={ContactUs}  sx={{width:{xs:'100%',sm:'95%',md:'80%'}, margin:'auto', height:{ xs:'400px',sm:"400px",md:'600px'}, borderRadius: '10px'}} />
                        
                    </Grid>

                    <Grid xs={12}  sm={12} md={6}>
                        <Box  sx={{padding:{xs:'20px',sm:'20px',md:'40px'}}}>
                            <Form />
                        </Box>
                    </Grid>
                </Grid>
            </Box>

        </>

    )
}

export default Contact
