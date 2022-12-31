import "./Resume.css";
import ReactPrint from "react-to-print";
import { useRef } from "react";
export default function Resume({ values }) {
  const ref = useRef();
  const {
    title,
    CompName,
    Certificate,
    Location,
    Sdate,
    name,
    job_title,
    Nomber,
    LinkedIn,
    gmail,
    University,
    specialty,
    college,
    GPA,
    Technical_1,
    Technical_2,
    Technical_3,
    Technical_4,
    Technical_5,
    ex_d
  } = values;

  return (
    <div className="Resume">
      <div id="doc2" className="yui-t7">
        <div id="inner" ref={ref}>
          <div id="hd">
            <div className="yui-gc">
              <div className="yui-u first">
                <h1>{name}</h1>
                <h2>{job_title}</h2>
              </div>

              <div className="yui-u">
                <div className="contact-info">
                  <h3>
                    <a href={LinkedIn}>LinkedIn</a>
                    <br />
                    <a href={gmail}>gmail</a>
                  </h3>
                  <h3>{Nomber}</h3>
                </div>
              </div>
            </div>
          </div>

          <div id="bd">
            <div id="yui-main">
              <div className="yui-b">
                <div className="yui-gf">
                  <div className="yui-u first">
                    <h2>Technical</h2>
                  </div>
                  <div className="yui-u">
                    <ul className="talent">
                      <li>{Technical_1}</li>
                      <li>{Technical_2}</li>
                    </ul>

                    <ul className="talent">
                      <li>{Technical_3}</li>
                      <li>{Technical_4}</li>
                    </ul>

                    <ul className="talent">
                      <li>{Technical_5}</li>
                    </ul>
                  </div>
                </div>

                <div className="yui-gf">
                  <div className="yui-u first">
                    <h2>Experience</h2>
                  </div>

                  <div className="yui-u">
                    <div className="job">
                      <h2>{title}</h2>
                      <h3>{CompName}</h3>
                      <h4>{Sdate}</h4>
                      <p>
                        {ex_d} <br />
                        <span>Location : {Location}</span>
                        <br />
                        <a href={Certificate}>Certificate</a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="yui-gf last">
                  <div className="yui-u first">
                    <h2>Education</h2>
                  </div>
                  <div className="yui-u">
                    <h2>
                      {University} - {college}
                      <br />
                      {specialty}
                    </h2>
                    <h3>
                      <strong>{GPA} GPA</strong>{" "}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ReactPrint
        trigger={() => <button> print</button>}
        content={() => ref.current}
      />
    </div>
  );
}
