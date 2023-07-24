import React from 'react'
//import '../CSS/HomePage.css'
import logo from '../assets/logo.png';

export const HomePage = () => {
  return (
    <>
      <video preload="auto" playsinline="true" loop="loop" muted="true" autoplay="autoplay" width="3840" height="2160">
        <source src="https://flakeworks.com/images/home/header.mp4" type="video/mp4" />
      </video>

      <div className="portfolio-intro">

        <div className="portfolio-logo">
          <div>

            <img src={logo} width="500" />

          </div>
        </div>

      </div>

      <div className="portfolio-container">

        <div className="portfolio">

          <div className="portfolio-item">

            <div className="item-desc">

              <h2>Website Design & Development</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet eget sit amet tellus cras adipiscing enim eu. Id aliquet risus feugiat in ante metus dictum at tempor. Varius morbi enim nunc faucibus a.</p>
              <a href="/web" title="Web Design">View Work</a>

            </div>

            <div className="item-card">

              <div>
                <picture>
                  <img src="https://flakeworks.com/images/home/webdesign.png" alt="mushroom" width="400" height="200" />
                </picture>
                <div></div>
                <div></div>
              </div>

            </div>

          </div>

          <div className="portfolio-item">

            <div className="item-desc">

              <h2>Print Design</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet eget sit amet tellus cras adipiscing enim eu. Id aliquet risus feugiat in ante metus dictum at tempor. Varius morbi enim nunc faucibus a.</p>
              <a href="/print" title="Print Design">View Work</a>

            </div>

            <div className="item-card">

              <div>
                <picture>
                  <img src="https://flakeworks.com/images/home/printdesign.png" alt="mushroom" width="400" height="200" />
                </picture>
                <div></div>
                <div></div>
              </div>

            </div>

          </div>

          <div className="portfolio-item">

            <div className="item-desc">

              <h2>Social Media Advertising & Design</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet eget sit amet tellus cras adipiscing enim eu. Id aliquet risus feugiat in ante metus dictum at tempor. Varius morbi enim nunc faucibus a.</p>
              <a href="/social" title="Social Media">View Work</a>

            </div>

            <div className="item-card">

              <div>
                <picture>
                  <img src="https://flakeworks.com/images/home/social.png" alt="mushroom" width="400" height="200" />
                </picture>
                <div></div>
                <div></div>
              </div>

            </div>

          </div>

          <div className="portfolio-item">

            <div className="item-desc">

              <h2>Company Branding Design</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet eget sit amet tellus cras adipiscing enim eu. Id aliquet risus feugiat in ante metus dictum at tempor. Varius morbi enim nunc faucibus a.</p>
              <a href="/branding" title="Branding Design">View Work</a>

            </div>

            <div className="item-card">

              <div>
                <picture>
                  <img src="https://flakeworks.com/images/home/branding.png" alt="mushroom" width="400" height="200" />
                </picture>
                <div></div>
                <div></div>
              </div>

            </div>

          </div>

          <div className="portfolio-item">

            <div className="item-desc">

              <h2>Video Production & Editing</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet eget sit amet tellus cras adipiscing enim eu. Id aliquet risus feugiat in ante metus dictum at tempor. Varius morbi enim nunc faucibus a.</p>
              <a href="/video" title="Video Editing">View Work</a>

            </div>

            <div className="item-card">

              <div>
                <picture>
                  <img src="https://flakeworks.com/images/home/video.png" alt="mushroom" width="400" height="200" />
                </picture>
                <div></div>
                <div></div>
              </div>

            </div>

          </div>

          <div className="portfolio-item">

            <div className="item-desc">

              <h2>HTML / CSS</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet eget sit amet tellus cras adipiscing enim eu. Id aliquet risus feugiat in ante metus dictum at tempor. Varius morbi enim nunc faucibus a.</p>
              <a href="/code" title="Code Examples">View Work</a>

            </div>

            <div className="item-card">

              <div>
                <picture>
                  <img src="https://flakeworks.com/images/home/coding.png" alt="mushroom" width="400" height="200" />
                </picture>
                <div></div>
                <div></div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </>
  )
}
