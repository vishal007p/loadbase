import { Box, Grid } from '@mui/material';







const HeroSection = ({Img,title,des}) => {
  return (
    <Box sx={{ width: '80%', margin: '60px auto' }}>
    <Grid container>
        <Grid xs={6}>
            <Box  sx={{textAlign:'center'}}>
                <img src={Img} alt="" style={{ width: '60%' }} />
            </Box>
        </Grid>

        <Grid xs={6}>
            <Box sx={{ textAlign: 'left', padding: '20px 0px' }}>
                <h1>{title}</h1>
                <Box sx={{ width: '100%', height: '100%', display: 'flex', gap: '10px', justifyContent: 'flex-start', marginTop: '15px' }}>
                    <Box sx={{ background: 'black', width: '8px', height: '8px', borderRadius: '50%' }} />
                    <Box sx={{ background: 'black', width: '8px', height: '8px', borderRadius: '50%' }} />
                    <Box sx={{ background: 'black', width: '60px', height: '8px', borderRadius: '5px' }} />
                </Box>
                <p  style={{marginTop:'20px'}}>{des}</p>
            </Box>

        </Grid>

    </Grid>

</Box>
  )
}

export default HeroSection
