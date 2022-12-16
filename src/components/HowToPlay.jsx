import { useEffect } from "react";

export const HowToPlay = () => {
  useEffect(() => {
    document.title = "How To Play";
  }, []);
  return (
    <div>
      <h1>How To Play</h1>
      <p>Nothing here, for now.</p>
    </div>
  );
};
export default HowToPlay;
