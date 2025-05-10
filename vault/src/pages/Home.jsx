
import { useWeb3Context } from "../context/useWeb3Context";
const Home = () => {
const {updateWeb3State,web3State}=useWeb3Context()
    // console.log(useWeb3State)
    const {selectedAccounts}=web3State
    console.log(selectedAccounts)
    
    
  
    return ( 
        <>
        Home</>
     );
}
 
export default Home;
