import "./style/style.scss";

const About = () => {
  return (
    <div className="about-container container">
      <div className="row">
        <div className="col-12 p-5">
          <div className="card">
            <div className="card-body">
              <h1>About</h1>
              <p>
                This App prints a random epigram (like the `fortune`
                command-line tool, but on the web). Users can trigger loading
                another epigram and they can enable/disable automatic reloading.
                In addition, users can add their own epigrams.
              </p>
              <p>
                fortune is a simple program that displays random poignant,
                inspirational, silly or snide phrases from a database of
                quotations. The fortune command-line utility is part of the
                fortune-mod package.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
