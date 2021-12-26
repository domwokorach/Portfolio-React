import React from "react";
import { Player } from "video-react";
import "./video.css";

export default (props) => {
  return (
    <div className="video-clip">
      <p className="text-center">
        <b className="video-clip-tag">
          &#x3C;/Web Accessibility on Banking&#x3E;
        </b>
        <br />
        <br />
        <Player
          playsInline
          width="100px"
          height="100px"
          poster="img_clip-video.jpg"
          src="clip-video.mp4"
        />
        <p>
          By creating JavaScript together with my team, I played a key role
          within the special Signly partnership at Lloyds, which won the
          financial Innovation Awards 2017. In 2019, Signly is a BSL British
          Sign Language accessibility service that allows deaf customers to see
          a video pop up with a sign language video.
        </p>
        <br />
        <b className="video-clip-tag">&#x3C;/Work Life&#x3E;</b>
        <br />
        <br />
        <Player
          playsInline
          width="100px"
          height="100px"
          poster="img_0340_00000.jpg"
          src="img_0340.mp4"
        />
        <p>
          In the world of 1000 frameworks, I'm fighting for the cause of clean
          and well structured code. No bug can stop me. No build-tool will
          dominate me. When the tests fail and the linting breaks, I will
          remain.
        </p>
      </p>
    </div>
  );
};
