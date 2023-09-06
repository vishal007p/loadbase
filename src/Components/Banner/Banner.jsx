import { Box, Button, Grid, Typography } from "@mui/material";
import BannerImg2 from '../../assets/BannerMockup.webp'
import { TypeAnimation } from 'react-type-animation';

import AndroidIcon from '@mui/icons-material/Android';
import AppleIcon from '@mui/icons-material/Apple';




const Banner = () => {
    return (
        <Box className="mainBanner">

            <Box sx={{ zIndex: '10', position: 'absolute', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', height: '100%' }}>

                <Box sx={{ width: { xs: '90%', sm: '70%' }, margin: 'auto' }}>

                    <Grid container   >
                        <Grid xs={12} sm={12} md={6}>
                            <Box sx={{ display: 'flex', alignItems: { xs: 'center', sm: 'center', md: 'flex-start' }, justifyContent: 'center', flexDirection: 'column', height: '100%' }} >
                                <Typography variant="h1" component="h2" sx={{ fontSize: '2.5rem', color: 'white', textAlign:{xs:'center',sm:'center',md:'left'} , fontWeight:'bold'}}>
                                    Welcome To  <TypeAnimation
                                        sequence={[
                                            'LoadBase', // Types 'One'
                                            1000, // Waits 1s
                                            'LoadBase', // Deletes 'One' and types 'Two'
                                            2000, // Waits 2s
                                            'LoadBase', // Types 'Three' without deleting 'Two'
                                            () => {
                                                console.log('Sequence completed');
                                            },
                                        ]}
                                        wrapper="span"
                                        cursor={true}
                                        repeat={Infinity}
                                        style={{ fontSize: '3rem', display: 'inline-block', color: '#FFFF00' }}
                                    />
                                </Typography>
                                <Typography variant="body1" sx={{ color: 'white', marginTop: '20px', fontSize: '1.5rem', lineHeight: '35px', textAlign: { xs: 'center', sm: 'center', md: 'left' } }}>
                                    Download the NEW Load Base App today and gain access to over 1,000 daily loads to keep
                                    your equipment on the road!
                                </Typography>
                                <Box sx={{ marginTop: '50px', display: 'flex', gap: '20px' }}>
                                    <Box>
                                        <Button sx={{ backgroundColor: '#FFFF00', color: 'black', fontWeight: '600', padding: '8px 20px', borderRadius: '20px', display:'flex', alignItems:'center', gap:'10px' }}> <AndroidIcon sx={{width:'20px'}} />   Google Play</Button>
                                    </Box>
                                    <Box>
                                        <Button sx={{ backgroundColor: '#FFFF00', color: 'black', fontWeight: '600', padding: '8px 20px', borderRadius: '20px', display:'flex', alignItems:'center', gap:'10px' }}> <AppleIcon  sx={{width:'20px'}}/> App Store</Button>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>

                        <Grid xs={12} sm={12} md={6}>
                            <Box sx={{ display: { xs: 'none', sm: 'block', md: 'block' } }}>
                                <img src={BannerImg2} alt="" style={{ width: '910px', height: '100%' }} />
                            </Box>
                        </Grid>

                    </Grid>
                </Box>
            </Box>


        </Box>
    )
}

export default Banner;
