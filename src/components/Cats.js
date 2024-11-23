import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Cats.css";

const Cats = () => {
    const [state, setState] = useState({
        cats: [],
        loading: true,
        error: null,
    });

    const webURL = `https://api.thecatapi.com/v1/images/search/?limit=15&order=DESC`;
    const navigate = useNavigate();

    const getData = async () => {
        try {
            const result = await axios.get(webURL);
            if (result.data.length > 0) {
                setState({ cats: result.data, loading: false, error: null });
            } else {
                setState({ cats: [], loading: false, error: "No images found." });
            }
        } catch (error) {
            setState({ cats: [], loading: false, error: "Failed to load data" });
        }
    };

    useEffect(() => {
        getData();
    }, []);

    const handleAdoptClick = (cat) => {
        navigate("/adopt", { state: { data: cat, animalType: 'Cat' } });
    };

    const renderContent = () => {
        if (state.loading) return <p>Loading...</p>;
        if (state.error) return <p className="error">{state.error}</p>;

        if (state.cats.length === 0) {
            return <p>No images available at the moment.</p>;
        }

        return (
            <div className="cat-gallery">
                {state.cats.map((cat) => (
                    <div key={cat.id} className="cat-item">
                        <img className="cat-image" src={cat.url} alt="Cat" />
                        <button
                            className="adopt-button"
                            onClick={() => handleAdoptClick(cat)}
                        >
                            Adopt
                        </button>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div className="cat-container">
            <h1 className="galleryHeading">Cat Gallery</h1>
            <div className="content-container">
                <div className="images-section">{renderContent()}</div>
                <div className="video-section">
                    <iframe
                        className="gallery-video"
                        src="https://www.youtube.com/embed/tNu4-G0SmRU"
                        title="Cat Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>

            </div>
        </div>
    );
};

export default Cats;
