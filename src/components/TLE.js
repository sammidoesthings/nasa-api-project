import axios from 'axios';
import { useState, useEffect } from 'react';
import { tleURL, keyConnect, tleKey } from '../KeyStorage'




function TlePage() {




    const [tleData, setTleData] = useState([])

    useEffect(() => {
        axios.get(`${tleURL}`)
            .then(response => {
                setTleData(response.data)
                return tleData;
            })
            .catch(error => {
                console.error(error)
            })
    },[]
    );

    const satellites = tleData.member

    console.log(tleData)


    //RETURN STARTS HERE
    //RETURN STARTS HERE
    //RETURN STARTS HERE
return (
        <div className="tle-container">

            <h1>🚀 TLE Page 🚀</h1>

            <p>Get your daily dose of space stuff!</p>

            tle data: {tleData.member(2)}



            {/* {tleData.map(satellites => {
                return ( 
                <div 
                    key={tleData.member}
                >
                    <p>{satellites[0].satelliteId}</p>
                </div>)
            })} */}


            {/* tle data: {tleData} */}

        {/* TLE CONTAINER ENDS HERE */}
        </div>
    )
}

export default TlePage