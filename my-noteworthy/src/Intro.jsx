import React from 'react';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';
import './Intro.css'

function Intro() {
  return (
    <div>

      <NavBar />

      <div id="thumbnail" style={{ width: '100%', height: 'calc(100vh - 30px)' }}>
        <img src="images/note_worthy.png" alt="" style={{ width: '100%', height: '100%' }} />
      </div>

      <div id="about-us" style={{ width: '100%', height: 'calc(100vh - 125px)' }}>
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white flex items-center justify-center">
          ABOUT US
        </h1>

        <p style={{ margin: '0rem 2rem' }}>
          We’re a lower-voices a cappella group known for our fun performances and fresh takes on popular songs! It always feels sunny when we perform, and not just because of our golden vests!</p>
        <p style={{ margin: '0rem 2rem' }}>
          Since our founding in 2000, we’ve gone million-view-viral on YouTube multiple times, released an album entirely composed of original songs, and performed at the 2022 UC Berkeley commencement.
        </p>
        <div id="bottom-half" style={{ marginTop: '5rem' }}>
          <div id="bottom-container">
            <h4 className="text-2xl font-bold dark:text-white flex justify-center items-center">Events</h4>
            <video className="" controls>
              <source src="https://www.youtube.com/watch?v=kW57PpibCMA" type="video/mp4" />
            </video>
          </div>
          <div id="bottom-container">
            <h4 className="text-2xl font-bold dark:text-white flex justify-center items-center">Hire Us</h4>
            <div>
              <p style={{ fontSize: '1rem', textAlign: 'center' }}>
                Please fill out this  
                <a style={{ color: 'blue', textDecoration: 'underline', fontWeight: 'bold' }}
                  href="https://noteworthy.studentorg.berkeley.edu/hire-us/#:~:text=fill%20out%20this-,form,-.%20Then%20we%E2%80%99ll%20respond"> FORM.</a>
              </p>
            </div>
          </div>
          <div id="bottom-container">
            <h4 className="text-2xl font-bold dark:text-white flex justify-center items-center">Follow Us</h4>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ flex: '1', margin: '0 10px' }}>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <img style={{ width: '100%', borderRadius: '10px' }} src="images/facebook_lg.png" alt="FB" />
                </a>
              </div>
              <div style={{ flex: '1', margin: '0 10px' }}>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <img style={{ width: '100%', borderRadius: '10px' }} src="images/instagram_lg.jpg" alt="" />
                </a>
              </div>
              <div style={{ flex: '1', margin: '0 10px' }}>
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                  <img style={{ width: '100%', borderRadius: '10px' }} src="images/youtube_lg.jpg" alt="" />
                </a>
              </div>
              <div style={{ flex: '1', margin: '0 10px' }}>
                <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
                  <img style={{ width: '120%', height: '110%', borderRadius: '10px' }} src="images/tiktok_lg.png" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"></script> */}
        {/* <script>
  tailwind.config = {
    prefix: 'tw-',
  }
</script> */}
      {/* </div> */}

      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-5xl dark:text-white flex items-center justify-center">
          OUR FAVORITE VIDEOS
        </h1>
  <section class="carousel" aria-label="Gallery">
    <ol class="carousel__viewport">
      <li id="carousel__slide1"
          tabindex="0"
          class="carousel__slide">
        <div class="carousel__snapper">
          <a href="#carousel__slide4"
             class="carousel__prev"></a>
          <a href="#carousel__slide2"
             class="carousel__next"></a>

          <iframe width="550" height="400" src="https://www.youtube.com/embed/n0p8MxT8AxI" title="Noteworthy &quot;Bet On It&quot;, Zac Efron - Welcome Back to A Cappella Fall 2022" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </li>
      <li id="carousel__slide2"
          tabindex="0"
          class="carousel__slide">
        <div class="carousel__snapper"></div>
        <a href="#carousel__slide1"
           class="carousel__prev"></a>
        <a href="#carousel__slide3"
           class="carousel__next"></a>
           <iframe width="550" height="400" src="https://www.youtube.com/embed/KZFrntXpisc" title="&quot;No Eyed Girl&quot; - Noteworthy Fall Show 2021" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </li>
      <li id="carousel__slide3"
          tabindex="0"
          class="carousel__slide">
        <div class="carousel__snapper"></div>
        <a href="#carousel__slide2"
           class="carousel__prev"></a>
        <a href="#carousel__slide4"
           class="carousel__next"></a>
           <iframe width="550" height="400" src="https://www.youtube.com/embed/7RPiGAzk4wA" title="Noteworthy &quot;Whatcha Say&quot; - Welcome Back to A Cappella Fall 2016" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </li>
      <li id="carousel__slide4"
          tabindex="0"
          class="carousel__slide">
        <div class="carousel__snapper"></div>
        <a href="#carousel__slide3"
           class="carousel__prev"></a>
        <a href="#carousel__slide1"
           class="carousel__next"></a>
           <iframe width="550" height="400" src="https://www.youtube.com/embed/udeym8-yr7g" title="The UC Men&#39;s Octet &quot;Lion King Medley&quot; - Welcome Back to A Cappella Fall 2016" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </li>
    </ol>
    <aside class="carousel__navigation">
      <ol class="carousel__navigation-list">
        <li class="carousel__navigation-item">
          <a href="#carousel__slide1"
             class="carousel__navigation-button"></a>
        </li>
        <li class="carousel__navigation-item">
          <a href="#carousel__slide2"
             class="carousel__navigation-button"></a>
        </li>
        <li class="carousel__navigation-item">
          <a href="#carousel__slide3"
             class="carousel__navigation-button"></a>
        </li>
        <li class="carousel__navigation-item">
          <a href="#carousel__slide4"
             class="carousel__navigation-button"></a>
        </li>
      </ol>
    </aside>
  </section>
</div>
    </div>);
}

export default Intro