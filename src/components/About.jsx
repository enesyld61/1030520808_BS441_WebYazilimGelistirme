import { useEffect } from "react";

export const About = () => {
  useEffect(() => {
    document.title = "About";
  }, []);
  return (
    <div>
      <h1>About</h1>
      <p>Nothing here, for now.</p>
    </div>
  );
};
export default About;
