import React from 'react'


const Footer = () => {
  const myStyle = {
    color: "white",
    backgroundColor: "#8fc7f0",
    padding: "10px",
    fontFamily: "Sans-Serif",
    textAlign: "center",
    bottom:"0%"
  };
  return (
    <>
      <footer style={myStyle}>
      <p>Copyright © 2022 Abrham</p>
      <a href="https://github.com/abrhame/cv-application.git" target="_blank" rel="noreferrer">github link</a>  
      </footer>
    </>
  );
}

export default Footer;