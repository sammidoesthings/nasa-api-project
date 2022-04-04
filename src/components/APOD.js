import axios from 'axios';
import {useState, useEffect} from 'react';
import { apodKey, keyConnect, apodURL } from '../KeyStorage';


function ApodPage() {

    //state stuff


    const [apodData, setApodData] = useState([])

    useEffect(() => {
        axios.get(`${apodURL}${keyConnect}${apodKey}`)
            .then(response => {
                setApodData(response.data)
                return apodData;
            })
            .catch(error => {
                console.error(error)
            })
    },[]
    );

    // console.log(apodData)


    // RETURN STARTS HERE
    // RETURN STARTS HERE
    // RETURN STARTS HERE
    return (
        <div className="apod-container">

            <h1>🚀 APOD 🚀</h1>

            <p>Get your daily dose of space stuff!</p>

            <p>apodData.copyright: {apodData.copyright}</p>
            <p>apodData.date: {apodData.date}</p>
            <p>apodData.explanation: {apodData.explanation}</p>
            <p>apodData.hdurl: <img src={apodData.hdurl} alt="hdurl"/></p>
            <p>apodData.media_type: {apodData.media_type}</p>
            <p>apodData.service_version: {apodData.service_version}</p>
            <p>apodData.title: {apodData.title}</p>
            <p>apodData.url: <img src={apodData.url} alt="url"/></p>

        {/* APOD CONTAINER ENDS HERE */}
        </div>
    )
}

export default ApodPage