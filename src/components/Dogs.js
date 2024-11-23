import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Dogs.css";

const Dogs = () => {
    const [state, setState] = useState({
        dogs: [],
        loading: true,
        error: null,
    });

    const webURL = `https://api.thedogapi.com/v1/images/search/?limit=15&order=DESC`;
    const navigate = useNavigate();


    const getData = async () => {
        try {
            const result = await axios.get(webURL);
            if (result.data.length > 0) {
                setState({
                    dogs: result.data,
                    loading: false,
                    error: null,
                });
            } else {
                setState({
                    dogs: [],
                    loading: false,
                    error: "No images found.",
                });
            }
        } catch (error) {
            setState({ dogs: [], loading: false, error: "Failed to load data" });
        }
    };

    useEffect(() => {
        getData();
    }, []);

    const handleAdoptClick = (dog) => {
        navigate("/adopt", { state: { data: dog, animalType: 'Dog' } });
    };

    const renderContent = () => {
        if (state.loading) return <p>Loading...</p>;
        if (state.error) return <p className="error">{state.error}</p>;


        if (state.dogs.length === 0) {
            return <p>No images available at the moment.</p>;
        }

        return (
            <div className="dog-gallery">
                {state.dogs.map((dog) => (
                    <div key={dog.id} className="dog-item">
                        <img className="dog-image" src={dog.url} alt="Dog" />
                        <button
                            className="adopt-button"
                            onClick={() => handleAdoptClick(dog)}
                        >
                            Adopt
                        </button>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div className="dog-container">
            <h1 className="galleryHeading">Dog Gallery</h1>
            <div className="content-container">
                <div className="images-section">{renderContent()}</div>
                <div className="video-section">
                    <iframe
                        className="gallery-video"
                        src="https://www.youtube.com/embed/Zb3Wzs2FcFE"
                        title="Dog Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Dogs;
