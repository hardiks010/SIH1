import React, { useEffect ,useState} from 'react'

const Testing = () => {
    const [position, setPosition] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        const getLocation = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const { latitude, longitude } = position.coords;
                        setPosition([latitude, longitude]);
                    },
                    (error) => {
                        console.error("Error getting location:", error);
                        setError("Unable to retrieve your location. Please make sure location services are enabled.");
                    },
                    {
                        enableHighAccuracy: true,
                        timeout: 10000,
                        maximumAge: 0, 
                    }
                );
            } else {
                console.error('Geolocation is not supported by this browser.');
                setError("Geolocation is not supported by this browser.");
            }
        };

        getLocation();
    }, []);
    const getUserLocaton =()=>{
        console.log(position);
    }
    return (
        <button onClick={getUserLocaton}>Get location</button>
    )
}

export default Testing