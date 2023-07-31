import React from "react";
import ReactDOM from "react-dom";

class Home extends React.Component{
    render(){
        return(
            <div>
                <h1 ><b><center>Shop With Us</center></b></h1>
                <h1><center>KEERTHI ORGANICS WELCOMES YOU</center></h1>
                <h1><u>With the Touch of nature</u></h1>
                
                <h3>Organic foods are produced through farming practices that only use natural substances.<br></br> This means avoiding all artificial chemicals, hormones, antibiotics, and GMOs.</h3>
                <center><img src="https://media.gettyimages.com/id/1247073860/photo/healthy-fresh-organic-vegetables-in-a-crate-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=_28r5elxratu0UWnold2uA2RF0f3Atvkv_kQoDfqG5Y=" alt="o1"></img></center>
                <p> it's recommended to buy organic for these fruits and vegetables: Nectarines – 97.3% of nectarines sampled were found to contain pesticides.<br></br> Celery – 94.5% of celery sampled were found to contain pesticides. Pears – 94.4% of pears sampled were found to contain pesticides.
                <br></br>So,We took the motive of producing organic food items without any pesticides that causes great Discomfort to our Human bodies</p>
                <center> <img src="https://media.gettyimages.com/id/1457478408/photo/variety-fresh-of-organic-fruits-and-vegetables-and-healthy-vegan-meal-ingredients-in-reusable.jpg?s=612x612&w=0&k=20&c=29qZP8f14cF-8pU_vukKJFVG5YqKQ1eHEbXJ0w_KVyc=" alt="O2" width="400px" height="300px"></img></center>
                
                
            </div>
        )
    }
}
ReactDOM.render(<Home/>,document.getElementById('root'));
export default Home;


