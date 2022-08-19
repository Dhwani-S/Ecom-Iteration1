import React from "react";
import "./About.css";
import { Button, Avatar } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://www.instagram.com/purely_dhwani";
  };
  return (
    <div className="aboutSection">
      <div className="aboutSectionContainer">

        <div>
          <div className="about-left">


            {/* <span>
              We have successfully dispatched more than 10k orders nationally and internationally.
            </span> */}
          </div>
          <div className="aboutSectionContainer2">
            <div class="container">

              <div class="testimonials-box">


                <div class="testimonial">

                  <div class="testimonial-card">

                    <img src="../../../images/testimonial-1.jpg" alt="alan doe" class="testimonial-banner" width="80" height="80" />

                    <p class="testimonial-name">Dhrutika Mistry</p>

                    <p class="testimonial-title">Founder of <i>'Brand'</i></p>

                    <img src="../../../images/icons/quotes.svg" alt="quotation" class="quotation-img" width="26" />

                    <p class="testimonial-desc">
                      I have always been passionate about running this business about jewelry and clothing.
                      And by Gods' grace, I was able to do so...
                    </p>


                    <div id="visit">

                      <Button onClick={visitInstagram} color="primary">
                        <Avatar
                          style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
                          src="https://thumbs.dreamstime.com/b/red-dress-mannequin-illustration-white-background-red-dress-mannequin-illustration-white-background-216081943.jpg"
                          alt="BrandName"
                        />
                        <InstagramIcon />
                        Visit Instagram
                      </Button>
                    </div>

                  </div>


                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
