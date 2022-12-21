import { useEffect } from "react";

export const About = () => {
  useEffect(() => {
    document.title = "About";
  }, []);
  return (
    <div>
      <h1>About</h1>
      <a href="https://github.com/enesyld61/1030520808_BS441_WebYazilimGelistirme.git">
        https://github.com/enesyld61/1030520808_BS441_WebYazilimGelistirme.git
      </a>
    </div>
  );
};
export default About;
