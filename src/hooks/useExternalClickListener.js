import { useEffect } from "react";

const useExternalClickListener = (ref, additionalRef, callback) => {
  useEffect(() => {
    const clickListener = (e) => {
      if (
        ref.current &&
        !ref.current.contains(e.target) &&
        !additionalRef.current.contains(e.target)
      ) {
        callback();
      }
    };

    document.addEventListener("click", clickListener);
    return () => document.removeEventListener("click", clickListener);
  }, [ref, additionalRef, callback]);
};

export default useExternalClickListener;
