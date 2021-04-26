import minBtn from "../assets/min-btn.svg";
import maxBtn from "../assets/restore-btn.svg";
import closeBtn from "../assets/close-btn.svg";
import resume from "../assets/gSingh.pdf";
const Terminal = () => {
  return (
    <div className="Terminal">
      <div className="header">
        <div className="title">info.js</div>
        <div className="navBtns">
          <img src={minBtn} alt="minimise button" />
          <img src={maxBtn} alt="maximise button" />
          <img src={closeBtn} alt="close button" />
        </div>
      </div>
      <div className="main">
        <div className="object">
          <div className="key">{"> gagan.location"}</div>
          <div className="value">Winnipeg, Manitoba</div>
        </div>
        <div className="object">
          <div className="key">{"> gagan.education"}</div>
          <div className="value">React Bootcamp - ComIT</div>
        </div>
        <div className="object">
          <div className="key">{"> gagan.contact"}</div>
          <div className="value">
            <a href="mailto:singh.gagandeep0034@gmail.com">
              singh.gagandeep0034@gmail.com
            </a>
          </div>
        </div>
        <div className="object">
          <div className="key">{"> gagan.resume"}</div>
          <div className="value">
            <a href={resume}>gSingh.pdf</a>
          </div>
        </div>
        <div className="object">
          <div className="key">{"> gagan.skills"}</div>
          <div className="value">
            [HTML, CSS, javaScript, React, jQuery, SASS,Less, Bootstrap, Git,
            Webpack, Linux]
          </div>
        </div>
        <div className="object">
          <div className="key">{"> gagan.languages"}</div>
          <div className="value">[English, Punjabi, Hindi, Urdu]</div>
        </div>
        <div className="object">
          <div className="key">{"> gagan.interests"}</div>
          <div className="value">
            [Coding, Book reading,Listening Podcasts, Writing, building PCs,
            Tweaking Raspberry π]
          </div>
        </div>
        <div className="lastLine">
          {">"} <div className="cursor"></div>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
