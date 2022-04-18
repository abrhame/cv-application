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
      <a href="https://www.w3schools.com/react/showreact.asp?filename=demo2_react_css_inline_object" target="_blank" rel="noreferrer">github link</a>  
      </footer>
    </>
  );
}

export default Footer;