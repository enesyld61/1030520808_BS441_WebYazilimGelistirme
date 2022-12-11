import { useEffect } from "react";

export const Multiplayer = () => {
  useEffect(() => {
    document.title = "Multiplayer";
  }, []);
  return (
    <div>
      <h1>Multiplayer</h1>
    </div>
  );
};
export default Multiplayer;
