import { Box, Grid } from '@mui/material'
import Card from '../Card/Card';
import img1 from '../../assets/img1.webp';
import img2 from '../../assets/img2.webp';
import img3 from '../../assets/img3.webp';
import img4 from '../../assets/img4.webp';

const sercice = [
    {
        id: 1,
        img: img1,
        title: 'Load Boards',
        des: "Utilize our exclusive load board tab to find everyday loads for your Semi Trucks, Box Trucks, Hot Shots, and Cargo Vans."
    },


    {
        id: 2,
        img: img2,
        title: 'Available Dispatchers',
        des: "A freight dispatcher represents your trucking company in negotiating freight. They find new customers, book freight loads, complete paperwork and manage delivery schedules for you."
    },


    {
        id: 3,
        img: img3,
        title: 'Load Profit Calculator',
        des: "The drive time calculator tells you how long your trip will take and what is the estimated time of arrival at the destination point"
    },


    
    {
        id: 4,
        img: img4,
        title: 'Drive time Calculato',
        des: "The drive time calculator tells you how long your trip will take and what is the estimated time of arrival at the destination point"
    },
]

const Services = () => {
    return (




        <Box sx={{ width: '80%', margin: 'auto', padding: '100px 0px' }}>


            <Box sx={{ textAlign: 'center', padding: '20px 0px' }}>
                <h1>Additional App Features</h1>
                <Box  sx={{width:'100%', height:'100%', display:'flex', gap:'10px', justifyContent:'center', marginTop:'15px'}}>
                    <Box sx={{ background: 'black', width: '8px', height: '8px', borderRadius: '50%' }} />
                    <Box  sx={{ background: 'black', width: '8px', height: '8px', borderRadius: '50%' }} />
                    <Box  sx={{ background: 'black', width: '60px', height: '8px',borderRadius:'5px'  }} />
                </Box>
            </Box>

            <Box  sx={{marginTop:'40px'}}>

                <Grid container  >
                    {
                        sercice.map((list) => {
                            return (
                                <>
                                    <Grid xs={12}  sm={6}  md={6}  lg={3}>
                                        <Box sx={{ width: '95%', margin: 'auto' ,marginTop:"20px"}}>
                                            <Card  img={list.img}   title={list.title}  des={list.des}/>
                                        </Box>

                                    </Grid>
                                </>

                            )
                        })
                    }
                </Grid>
            </Box>

        </Box>


    )
}

export default Services;
