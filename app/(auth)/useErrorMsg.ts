import { useEffect, useState } from "react";

const useErrorMsg = (initialErrorMsg = '') => {
  const [errorMsg, setErrorMsg] = useState(initialErrorMsg);
  const hasError = errorMsg.length > 0;

  useEffect(() => {
    if (hasError) {
      const timer = setTimeout(() => {
        setErrorMsg('');
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [hasError]);
  
  return {
    errorMsg,
    setErrorMsg,
    hasError,
  }
};

export default useErrorMsg;