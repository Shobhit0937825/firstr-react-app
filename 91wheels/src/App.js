import logo from './logo.svg';
import './App.css';
import ru from './images/ru.jpg'
import r5 from './images/r5.jpg'
import ppo from './images/ppo.jpg'

import cv from './images/cv.jpg'
function App() {
  return (
    <div className="App">
      <div class="main">
        <div class="card_outer">
           <h1>CARS</h1>
            <div class="inner_card"> 
                <div class="cards">
                    <div class="innner">
                        <div class="image">
                            <img src={ru} alt="loading" />
                        </div>
                        <div class="text_field">
                            <div class="space">
                                <a href="" class="heading"><h2>MG Hector</h2></a>
                            </div>
                            <div class="space">
                                <p>12.44 Lakh-17.33 Lakh</p>
                            </div>
                            <div class="space">
                                <button>View More Offer</button>
                            </div>
                         </div>    
                    </div>
                 </div>      
                 
                 <div class="cards">
                    <div class="innner">
                        <div class="image">
                            <img src={r5} alt="loading" />
                        </div>
                        <div class="text_field">
                            <div class="space">
                                <a href="" class="heading"><h2>TATA Harriar</h2></a>
                            </div>
                            <div class="space">
                                <p>15.44 Lakh-19.33 Lakh</p>
                            </div>
                            <div class="space">
                                <button>View More Offer</button>
                            </div>
                         </div>    
                    </div>
                 </div>      

                 <div class="cards">
                    <div class="innner">
                        <div class="image">
                            <img src={ppo} alt="loading" />
                        </div>
                        <div class="text_field">
                            <div class="space">
                                <a href="" class="heading"><h2>KIA Sonit</h2></a>
                            </div>
                            <div class="space">
                                <p>5.83 Lakh-9.49 Lakh</p>
                            </div>
                            <div class="space">
                                <button>View More Offer</button>
                            </div>
                         </div>    
                    </div>
                 </div>      

                 <div class="cards">
                    <div class="innner">
                        <div class="image">
                          <img src={cv} alt="loading" />
                        </div>
                        <div class="text_field">
                            <div class="space">
                                <a href="" class="heading"><h2>Tata Punch</h2></a>
                            </div>
                            <div class="space">
                                <p>7.83 Lakh-9.87 Lakh</p>
                            </div>
                            <div class="space">
                                <button>View More Offer</button>
                            </div>
                         </div>    
                    </div>
                 </div>      
          </div>
     <h2>View For More</h2>
               
        </div>
    </div>
    </div>
  );
}

export default App;
