import React, { createContext, useState, useEffect, useMemo } from "react";
import { fetchAllLaunches } from "../api/LaunchesAPI";

export const LaunchesContext = createContext();

export const LaunchesProvider = ({ children }) => {
  const [launchData, setLaunchData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetchAllLaunches()
      .then((data) => {
        setLaunchData(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(true);
        setIsLoading(false);
      });
  }, []);

  const contextValue = useMemo(
    () => ({
      launchData,
      isLoading,
      error,
    }),
    [launchData, isLoading, error]
  );

  return (
    <LaunchesContext.Provider value={contextValue}>
      {children}
    </LaunchesContext.Provider>
  );
};
