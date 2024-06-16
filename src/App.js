import Landingpage  from "./Landing";
import {About} from './About'
import Welcome from "./vision-mission"
import Product from "./Product"
import Team from './team'
import Footer from './footer'


const wezeshaApp =()=>{
  return(
    <div>
      <h1></h1>
      <Landingpage/>
      <About/>
      <Welcome/>
      <Product/>
      <Team/>
      <Footer/>
    </div>
  )
}
export default wezeshaApp;
