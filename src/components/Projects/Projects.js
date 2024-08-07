import React from "react";
import styles from "./ProjectsStyles.module.css"
import searchEngineLogo from "../../assets/search-engine.png"
import hotelReservationLogo from "../../assets/hotel.png"
import crawlerLogo from "../../assets/crawler.jpg"
import foodDeliveryLogo from "../../assets/food-delivery.png"
import cryptofolioLogo from "../../assets/cryptofolio-logo.png"
import playlistDownloaderLogo from "../../assets/playlistDownloader-logo.png"

import ProjectCard from "../../common/ProjectCard";


function Projects() {
    return (
        <section id="projects" className={styles.container}>
            <h1 className="sectionTitle">Projects</h1>
            <div className={styles.projectsContainer} >

                <ProjectCard 
                src={foodDeliveryLogo} 
                link="https://github.com/Moe131/food-delivery-app"
                title="Food Delivery Full Stack Mobile App"
                description = "A React Native full stack application designed to help users to sign up, find nearby restaurants and place food delivery or pick-up orders."
                />

                <ProjectCard 
                src={cryptofolioLogo} 
                link="https://github.com/Moe131/cryptofolio"
                title="CryptoFolio Web Application"
                description = "A ReactJS full-stack web application that allows users to sign up, track the current prices of various cryptocurrencies, and create and edit custom watchlists."
                />

                <ProjectCard 
                src={searchEngineLogo} 
                link="https://github.com/Moe131/Search_engine_web_app"
                title="Search Engine Web Application"
                description = "Search engine web application developed with Python and Flask that allows searching over hundreds of thousand of websites."
                />
                
                <ProjectCard 
                src={hotelReservationLogo} 
                link="https://github.com/Moe131/Hotel_Reservation_System"
                title="Hotel Reservation System"
                description = "Simple hotel reservation system built with Python and Tkinter to store, manage and delete bookings using SQLite database."
                />

                <ProjectCard 
                src={crawlerLogo} 
                link="https://github.com/Moe131/Web-Crawler"
                title="Web Crawler"
                description = "A Python-based web crawler designed to efficiently scrape, parse, and store data from websites avoiding loops and duplicate websites "
                />   

                <ProjectCard 
                src={playlistDownloaderLogo} 
                link="https://github.com/Moe131/playlist-downloader"
                title="Spotify Playlist Song Downloader"
                description = "This application allows you to download songs from a Spotify playlist by searching and downloading them from YouTube using Selenium and Pytube library."
                />   
            </div>
        </section>
    )
}

export default Projects;