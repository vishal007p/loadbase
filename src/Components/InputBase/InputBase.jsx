import { Box } from '@mui/material'


const InputBase = ({ placeholder, type , name}) => {
    return (

        <Box>
            <input type={type} placeholder={placeholder}  name={name}  style={{width:'90%', border:'none', borderBottom:'1px solid black', height:'40px', outline:'none', fontWeight:'500', fontFamily:'Roboto',}} />
        </Box>
    )
}

export default InputBase;
