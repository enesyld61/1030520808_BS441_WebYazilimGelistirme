import { useEffect } from "react";

export const NotFound = () => {
  useEffect(() => {
    document.title = "Not Found!";
  }, []);
  return (
    <div>
      <h2>404 Not Found!</h2>
    </div>
  );
};
export default NotFound;
