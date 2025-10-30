import React, { createContext, useContext, useEffect, useState } from "react";

const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
    const [location, setLocation] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchLocationData = async (latitude, longitude) => {
            try {
                const res = await fetch(
                    `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
                );
                const data = await res.json();
                setLocation(data?.address?.state || null);
            } catch (err) {
                setError("Failed to fetch location data");
            } finally {
                setLoading(false);
            }
        };

        if (!navigator.geolocation) {
            setError("Geolocation not supported");
            setLoading(false);
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                fetchLocationData(latitude, longitude);
            },
            () => {
                setError("Unable to retrieve your location");
                setLoading(false);
            }
        );
    }, []);

    return (
        <LocationContext.Provider value={{ location, loading, error }}>
            {children}
        </LocationContext.Provider>
    );
};

export const useLocation = () => useContext(LocationContext);