import React from 'react'


const Header = () => {
  const myStyle = {
    color: "white",
    backgroundColor: "#00477a",
    padding: "10px",
    fontFamily: "Sans-Serif",
    textAlign:"center"
  };
  return (
    <>
      <section  style={myStyle}>
      <h1>CV Generator</h1>
      </section>
    </>
  );
}

export default Header;