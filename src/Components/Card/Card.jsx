import { Box } from "@mui/material";
import Img from '../../assets/banner.webp'



const Card = ({ img, title, des }) => {
    return (
        <Box sx={{ width: '100%', height: '450px', boxShadow: ' rgba(0, 0, 0, 0.1) 0px 4px 12px', borderRadius: '10PX' }} className="card">
            <img src={img} alt="" style={{ width: '100%', height: '50%', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }} />

            <Box sx={{ padding: '20px' }}>

                <h2 style={{ margin: '20PX 0PX' }}>{title}</h2>
                <p>{des}</p>
            </Box>

        </Box>

    )
}

export default Card
