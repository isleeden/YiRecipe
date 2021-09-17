import { useEffect } from "react";

export default (ref, additionalRef, callback) => {
  useEffect(() => {
    const clickListener = (e) => {
      if (
        !ref.current.contains(e.target) &&
        !additionalRef.current.contains(e.target)
      ) {
        callback();
      }
    };

    document.addEventListener("click", clickListener);
    return () => document.removeEventListener("click", clickListener);
  }, []);
};
