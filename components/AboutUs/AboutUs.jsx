import React from "react";
import s from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <>
      <h2 className={s.aboutUsTitle}>ПРО НАС</h2>
      <div className={s.aboutUsWrapper}>
        <ul className={s.videoList}>
          <li className={s.videoItem}>
            <video
              className={s.video}
              width={350}
              height={550}
              autoPlay
              muted
              loop
            >
              <source src="/assets/video/IMG_1556.MP4" type="video/mp4" />
            </video>
          </li>

          <li className={s.videoItem}>
            <video
              className={s.video}
              width={350}
              height={550}
              autoPlay
              muted
              loop
            >
              <source src="/assets/video/IMG_1556.MP4" type="video/mp4" />
            </video>
          </li>
        </ul>

        <div>
          <h3 className={s.AboutUsSubTitle}>Ishop у Догобичі</h3>
          <p className={s.AboutUsDesc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea vitae
            vero possimus, placeat obcaecati voluptas quas dolore labore quam,
            enim repudiandae repellendus temporibus aspernatur expedita
            recusandae nihil eos debitis rerum sunt, maxime quasi? Illo quaerat
            commodi dolorum tenetur, culpa quibusdam. Iste illo id ducimus sit
            rerum, unde dolores amet dolor corporis aperiam accusamus numquam
            similique, repellendus inventore ipsam illum vero sequi eveniet
            voluptate delectus adipisci! Cupiditate quo qui, eum quidem
            aspernatur, sequi obcaecati quasi inventore molestias, nisi velit.
            Minima fugit, asperiores nobis ratione officiis sunt dolores optio,
            doloremque, temporibus consequatur ipsam quaerat ducimus praesentium
            quis labore veniam? Ducimus dolores corrupti saepe facilis, velit
            ut, quae alias deserunt odit deleniti, repellendus dolorem
            repudiandae culpa modi distinctio temporibus. Earum, atque?
            Consequuntur necessitatibus distinctio officia itaque alias quaerat
            nam quibusdam repellat? Fuga, quas quam animi incidunt magni ipsa
            excepturi nam! Eligendi ullam illo tenetur placeat voluptate est
            officia, ipsum alias quaerat excepturi? Atque totam eligendi, alias
            nemo quis qui deserunt veniam, nulla in, ea praesentium. Id libero
            facere provident asperiores porro! Dolor ad distinctio, architecto
            laudantium saepe aperiam quos, nisi officiis nobis ipsum repudiandae
            pariatur! Reprehenderit quisquam hic praesentium est et omnis
            ducimus, assumenda exercitationem nam expedita officiis earum sequi
            quis atque! Deleniti harum hic esse similique, dolor aut sint
            laborum? Modi ducimus nesciunt repudiandae debitis error dolore et
            repellendus nisi consectetur minima libero porro doloremque eum
            neque possimus, necessitatibus cum sint, dolorem, quae nobis.
            Dolore, itaque aspernatur? Nostrum molestiae laboriosam, repellat
            dignissimos sapiente eius veniam debitis facere aspernatur nobis in.
            Quo, recusandae iste. Quisquam tempore natus temporibus fuga
            sapiente magnam dignissimos tenetur, incidunt quis nesciunt quasi
            atque molestiae deleniti nobis aut vitae architecto a aperiam
            quaerat et accusantium placeat officia eius necessitatibus?
            Repudiandae sequi dolor, rem, quos maiores quidem quas molestias
            exercitationem quam dolorem deleniti, minima soluta vero dignissimos
            omnis alias dolore earum commodi odit cumque accusantium nobis!
            Alias, modi dolorum nam similique iusto velit minima nobis
            accusantium excepturi ipsa, veniam nesciunt odio odit, labore aut
            dolor. Saepe tempore ad officiis quis fugiat reiciendis. Perferendis
            officiis libero, sapiente, hic vel quisquam cumque ipsa quam, eaque
            distinctio ipsam perspiciatis facere. Inventore in quam alias earum
            sunt reprehenderit nesciunt reiciendis a quia, qui doloribus, eaque
            ullam expedita consequuntur tempore deleniti sapiente culpa aut
            assumenda mollitia ratione eveniet rem minima quaerat? Corrupti,
            impedit nesciunt temporibus cum repellat nam nobis natus? Deleniti
            ex repudiandae repellat enim cum consequuntur veritatis nostrum
            explicabo nesciunt, expedita, adipisci iure animi.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
