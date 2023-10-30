import Play from "./components/csgo/Play";
import {React,useState} from "react";

function App() {

  const [singlCSGO,useSingleCSGO] = useState(true)

  return (
    <div className="App">
      <header>
        <div className="container-header">
          <div className="logo">
            <h1>UP1MEP</h1>
          </div>
          <div className="navblock">
            <nav>
              <a href="">About</a>
              <a href="">Skill</a>
              <a href="">Company</a>
              <a href="">Contact</a>
            </nav>
          </div>
        </div>
      </header>
      <main>
        <section>
          <article className="swip">
            <div className="container-about" id="about">
              <div className="upper-section">
                <div className="left-section--upper">
                  <div className="title">
                    <h1>About me</h1>
                    <div className="context-info">
                      <p>
                        – Good days, my name Eldos, <br />
                        Im Front-End Developer
                      </p>
                    </div>
                  </div>
                </div>
                <div className="right-section--upper">
                  <div className="title">
                    <h1>Educations</h1>
                    <div className="context-info">
                      <p>– Blue Certificate | <span>School</span></p>
                      <p>– PROlab Academy | <span>Front-End Developers</span></p>
                      <p>– Higher Education | <span>OshSU</span></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="down-section">
                <div className="left-section--down">
                  <div className="title">
                    <h1>Hobbies</h1>
                    <div className="context-info">
                      <a href="">CS:GO</a> 
                      <br />
                      <br />
                      <a href="">Mobilography</a> 
                      <br />
                      <br />
                      <a href="">Football</a> 
                      <br />
                      <br />
                      <a href="">VolleyBall</a> 
                      <br />
                      <br />
                      <a href="">Barista</a> 
                    </div>
                  </div>
                </div>
                <div className="right-section--down"></div>
              </div>
            </div>
          </article>
        </section>

        <section>
          <article className="fixed">
            <div className="container-skill">
              <div className="hard-skill">
                <div className="title">
                  <h1>Hard Skill</h1>
                  <div className="context-info">
                    <p>
                      – WordPress <br />
                      – JavaScript <br />
                      – React JSX <br />
                      – HTML <br />
                      - CSS <br />
                      <br />

                    </p>

                  </div>
                </div>
              </div>

              <div className="soft-skill">
                <div className="title">
                  <h1>Soft Skill</h1>
                  <div className="context-info">
                    <p>
                      – Communication <br />
                      – Sociability <br />
                      – Do less keep up the conversation <br />
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </article>
          <h3>LEV1ATHA</h3>
          <h3>PROlab</h3>
        </section>

        <section>
          <article className="company">
            <div className="container-company">

            </div>
          </article>
        </section>

      </main>
    </div>
  );
}

export default App;
