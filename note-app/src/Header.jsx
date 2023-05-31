import react from 'react';
import logo from './Images/logo.jpg';



const Header = () => {

    const mystyle = {
        color: "white",
        padding: "10px",
        fontFamily: 'Dancing Script',
      };



    return (<>
        <div className="header">

            <img src={logo} alt="logo" width="70" height="60" />
            <h1 style={mystyle}>Ankit Notes</h1>

        </div>
    </>)

}
export default Header;