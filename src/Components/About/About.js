import React from "react";
import "./About.css";
import jazli from "./jazli.jpeg";
import mei from "./mei.jpeg";
import amir from "./amir.jpeg";

const About = () => {
  return (
    <section className="body">
      <div>
        <br />
        <br />
        <h1 className="facts">ABOUT THIS WEBSITE</h1>
        <br />
        <br />
        <h3>
          We created this website to help Disney fans to get to know more about
          their favourite Disney most well-known characters ever. We mainly
          focus to insert all the characters' names, films that there are famous
          with, TV shows that they are also famous with, and many more. Some of
          the characters are, Lilo & Stitch, Mickey Mouse, Cinderella, Popeye,
          Toy Story, and many more. Browse our website now to find out more.
        </h3>
        <br />
        <br />
        <h1 className="facts">D-JAMZ GROUP</h1>
        <br />
        <br />
        <h3>
          We, D-JAMZ Group, consist of 3 persons in the group. We have two lead
          web developers and one assitant web developer. Want to know more about
          every single one of us?, meet us below.
        </h3>
        <div className="row">
          <div className="about_col">
            <img src={jazli} alt="jazli" />
            <h3>Jazli Aiman bin Jamaludin</h3>
            <p className="about-jazli">
              Our web developer. He loves to try something new & go hard with
              it. He sometimes has good idea in terms of designing web pages. He
              is hilarious sometimes, but he is also a very helpful guy in the
              team. He loves extreme activities, hiking, skateboarding and all
              that. So yeah, he is a full-of-chillin' guy to get to know with.
            </p>
          </div>
          <div className="about_col">
            <img src={mei} alt="mei" />
            <h3>Marianne</h3>
            <p className="about-mei">
              Our lovely assistant web developer. She loves to code as she is
              learning so many new things in coding. Cheerful, friendly, yet
              sporting girl in our team. She gives the ideas to make our site
              more interactive. Our beloved Sabahan, she is so in love in
              reading and watching Korean movies. Any k-Poppers out there?, meet
              Mei from D-JAMZ Group.
            </p>
          </div>
          <div className="about_col">
            <img src={amir} alt="amir" />
            <h3>Amir bin Zahari</h3>
            <p className="about-amir">
              Our web developer. Also known as our rapper. He loves to rap &
              hip-hop stuff as much as he loves to code. He is getting smarter
              about it from day to day. All the way from Subang to Cyberjaya, he
              is friendly, funny sometimes, & brilliant at most times. Any hip
              hop fans?, meet Amir from D-JAMZ Group.
            </p>
          </div>
        </div>
        <div className="footer">
          <p className="end">© 2022 D-JAMZ Group</p>
        </div>
      </div>
    </section>
  );
};

export default About;
