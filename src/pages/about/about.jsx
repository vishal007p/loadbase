import { Box } from '@mui/material';
import AboutImg from '../../assets/banner.webp'
import HeroSection from '../../Components/HeroSection/HeroSection';


const About = () => {
    return (
        <>
            <Box sx={{ width: '100%', background: '#FFFF00', height: '100%', textAlign: 'center', padding: '60px 0px' }}>
                <h1 style={{ fontSize: '5rem' }}>About Us</h1>
            </Box>

            <HeroSection Img={AboutImg}  title="Our About" des="The Load Base app has a built-in easy-to-use profit calculator that helps users see if a load is profitable in seconds. Determining profitability for trucking companies can be a complicated process. As your company grows, it becomes crucial to regularly track how much money is coming in and how much is going out. Calculating revenue and profit per mile is the key to understanding your company's overall financial health. Knowing and anticipating costs for your company can mark the difference between success and failure in the trucking industry." />

        </>



    )
}

export default About;
