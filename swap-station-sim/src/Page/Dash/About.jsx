const styles = {
  contMargin: {
    marginTop: "40px",
    marginBottom: "60px",
  },
};

const About = () => {
  return (
    <div style={{ width: "100%" }} className="w3-margin-top">
      <div className="w3-blue w3-container w3-text-white">
        <div className="w3-container" style={styles.contMargin}>
          <p className="w3-center w3-xxxlarge">
            <b>Mazi Swap Station Simulation V:0.0.1</b>
          </p>
          <p className="w3-center w3-xxlarge" style={{ opacity: 0.5 }}>
            This is the swap station simulation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
