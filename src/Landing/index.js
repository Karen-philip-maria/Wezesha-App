
import "./index.css";
import farmer from '../images/farmer.jpg'
import logo from '../images/logo.png'

const Landingpage = () =>{
  return (
    <div>
        <div className="heading">
        <img src={logo} alt="logo"/>
          <div className="navbar">
            <a>Home</a>
            <a>About Us</a>
            <a>Products</a>
            <a>Our Team</a>
            <a>Contact Us</a>
          </div>
          
        </div>
        <div className="wezeshawelcometext">
        <div className="wezeshatext">
          <u className="Wezeshatexts">Wezesha</u> is a robust digital software solution that caters to the needs
          of <u className="wezeshatexts">farmers, SACCOs </u>and <u>cooperatives </u>enhancing their financial
          management and record-keeping capabilities.
        </div>
        <div>
          <img src={farmer} alt="farmer" className="landingpic"/>
        </div>
        </div>
        <button className="downloadButton">Download the App</button> <button className="dashboardButton">Get the Dashboard</button>
      </div>
  );
}
export default Landingpage;