import { Box } from "@mui/material";
//import Header from "../components/Header";
import Calculator from "../components/Calculator";

function Home() {
  return (
    <Box style={{
      width: "100vw",
      height: "100vh",
      background: 'black',
      display:'flex', 
      justifyContent:'center', 
      alignItems:'center'
    }}>
      <Calculator/>
        {/* <Header/> */}
    </Box>
  );
}

export default Home;