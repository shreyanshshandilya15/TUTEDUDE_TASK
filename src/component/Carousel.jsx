// src/Carousel.js
import React, { useState } from 'react';
import './Carousel.css';

const Carousel = () => {
    const [images, setImages] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [fullscreenImage, setFullscreenImage] = useState(null);
    const imagesPerPage = 3;

    // Predefined array of image URLs
    const predefinedImages = [
        "/assets/1.jpg",
        "/assets/2.jpg",
        "/assets/3.jpg",
        "/assets/4.jpg",
        "/assets/5.jpg",
        "/assets/6.jpg",
        "/assets/7.jpg",
        "/assets/8.jpg",
        "/assets/9.jpg",
        "/assets/10.jpg",
        "/assets/11.jpg"
      ];

    const addImage = (url) => {
        setImages([...images, url]);
    };

    const totalPages = Math.ceil(images.length / imagesPerPage);
    const displayedImages = images.slice(currentPage * imagesPerPage, (currentPage + 1) * imagesPerPage);

    const nextPage = () => {
        if (currentPage < totalPages - 1) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    const openFullscreen = (url) => {
        setFullscreenImage(url);
    };

    const closeFullscreen = () => {
        setFullscreenImage(null);
    };

    return (
        <div className="carousel-container">
            <h2>Select Images to Add to Carousel</h2>
            <div className="image-selection">
                {predefinedImages.map((url, index) => (
                    <button key={index} onClick={() => addImage(url)} className="add-button">
                        Add Image {index + 1}
                    </button>
                ))}
            </div>

            {images.length > 0 && (
                <>
                    <h2>Image Carousel</h2>
                    <div className="carousel">
                        <div className="carousel-images">
                            {displayedImages.map((url, index) => (
                                <img key={index} src={url} alt={`Image ${index + 1}`} onClick={() => openFullscreen(url)} />
                            ))}
                        </div>
                    </div>

                    <div className="pagination">
                        <button onClick={prevPage} disabled={currentPage === 0}>&lt; Prev</button>
                        <span>
                            Page {currentPage + 1} of {totalPages}
                        </span>
                        <button onClick={nextPage} disabled={currentPage >= totalPages - 1}>Next &gt;</button>
                    </div>
                </>
            )}

            {fullscreenImage && (
                <div className="fullscreen">
                    <div className="overlay" onClick={closeFullscreen}></div>
                    <img className="fullscreen-image" src={fullscreenImage} alt="Full Screen" />
                    <span className="close-button" onClick={closeFullscreen}>&times;</span>
                </div>
            )}
        </div>
    );
};

export default Carousel;
