import React from 'react';
import './App.css';
import Prop from './components/Prop';


function App() {
  return (
    <div className="App">

      <div className='title'>
        <h1 className='text-center'>All Netflix Series Download From Here</h1>
      </div>


      <div className='container'>
        <div className='row'>
          <div className='col-12 col-md-3 p-0 m-0'>
            <Prop
              img='https://media.gqindia.com/wp-content/uploads/2020/06/indian-horror-shows-and-movies-on-netflix-that-will-give-you-nightmares.jpg'
              name='Netflix'
              desc='This Is Netflix Series'
              btn='Watch Now'
            />
          </div>
          <div className='col-12 col-md-3 p-0 m-0'>
            <Prop
              img='https://www.scrolldroll.com/wp-content/uploads/2022/08/Family-Friendly-Hindi-Web-Series-on-Netflix-featured.jpg'
              name='Netflix'
              desc='This Is Netflix Series'
              btn='Watch Now'
            />
          </div>
          <div className='col-12 col-md-3 p-0 m-0'>
            <Prop
              img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfpFN0d3bNBwEeFb1Y1TFf5vHGaT8Dc0hG6g&usqp=CAU'
              name='Netflix'
              desc='This Is Netflix Series'
              btn='Watch Now'
            />
          </div>
          <div className='col-12 col-md-3 p-0 m-0'>
            <Prop
              img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKPOsaotHYQQS21I4cF60rlplRO0EH3rA62A&usqp=CAU'
              name='Netflix'
              desc='This Is Netflix Series'
              btn='Watch Now'
            />
          </div>
        </div>



        <div className='row mb-5'>
          <div className='col-12 col-md-3 p-0 m-0'>
            <Prop
              img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsMAp9gVJ-qzzD9Wl6AjVvwJZjrly_Bx7AVNrxnuhtm0g-dqyN3pPzpnA38n-ixDQkonk&usqp=CAU'
              name='Netflix'
              desc='This Is Netflix Series'
              btn='Watch Now'
            />
          </div>
          <div className='col-12 col-md-3 p-0 m-0'>
            <Prop
              img='https://assets.telegraphindia.com/telegraph/2022/May/1653567358_73075915_1561504783989199_472197.jpg'
              name='Netflix'
              desc='This Is Netflix Series'
              btn='Watch Now'
            />
          </div>
          <div className='col-12 col-md-3 p-0 m-0'>
            <Prop
              img='https://upload.wikimedia.org/wikipedia/en/thumb/1/12/The_Rain.png/220px-The_Rain.png'
              name='Netflix'
              desc='This Is Netflix Series'
              btn='Watch Now'
            />
          </div>
          <div className='col-12 col-md-3 p-0 m-0'>
            <Prop
              img='https://d1vzdswwroofzl.cloudfront.net/wp-content/uploads/2023/07/Best-Telugu-Dubbed-Web-Series-on-Netflix-2.jpg'
              name='Netflix'
              desc='This Is Netflix Series'
              btn='Watch Now'
            />
          </div>
        </div>
      </div>
    </div>
  );
}


export default App;








