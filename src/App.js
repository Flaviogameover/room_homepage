import feature1 from "./images/desktop-image-hero-1.jpg";
import feature2 from "./images/desktop-image-hero-2.jpg";
import feature3 from "./images/desktop-image-hero-3.jpg";
import more1 from "./images/image-about-dark.jpg";
import more2 from "./images/image-about-light.jpg";
import { ReactComponent as IconMenu } from "./images/icon-hamburger.svg";
import { ReactComponent as Arrow } from "./images/icon-arrow.svg";
import { ReactComponent as IconLeft } from "./images/icon-angle-left.svg";
import { ReactComponent as IconRight } from "./images/icon-angle-right.svg";
import { ReactComponent as IconClose } from "./images/icon-close.svg";
import { useState } from "react";

const App = () => {
    const [curFeature, setCurFeature] = useState(0);
    const [hideModal, setHideModal] = useState(false);

    const feature_change = [
        {
            img: feature1,
            title: "Discover innovative ways to decorate",
            description:
                "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
        },
        {
            img: feature2,
            title: "We are available all across the globe",
            description:
                "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
        },
        {
            img: feature3,
            title: "Manufactured with the best materials",
            description:
                "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
        },
    ];

    const handleIncrease = () => {
        if (curFeature >= feature_change.length - 1) {
            setCurFeature(0);
        } else {
            setCurFeature(curFeature + 1);
        }
    };

    const handleDecrease = () => {
        if (curFeature <= 0) {
            setCurFeature(feature_change.length - 1);
        } else {
            setCurFeature(curFeature - 1);
        }
    };

    window.onresize = () => {
        setHideModal(false);
    };

    document.addEventListener("keydown", (event) => {
        if (event.key === "ArrowRight") {
            handleIncrease();
        } else if (event.key === "ArrowLeft") {
            handleDecrease();
        }
    });

    return (
        <div className="app">
            <div className={`overlay ${hideModal ? "block" : "none"}`}></div>
            <div className="home-feature">
                <div className="feature-slide">
                    <header>
                        <nav className="desktop">
                            <h2>room</h2>
                            <ul>
                                <li>
                                    <span>home</span>
                                </li>
                                <li>
                                    <span>shop</span>
                                </li>
                                <li>
                                    <span>about</span>
                                </li>
                                <li>
                                    <span>contact</span>
                                </li>
                            </ul>
                        </nav>
                        <nav className="mobile">
                            <div
                                className={`above ${
                                    hideModal ? "flex" : "none"
                                }`}
                            >
                                <div className="close-icon">
                                    <IconClose
                                        onClick={() => setHideModal(false)}
                                    />
                                </div>
                                <div className="items">
                                    <ul>
                                        <li>
                                            <span>home</span>
                                        </li>
                                        <li>
                                            <span>shop</span>
                                        </li>
                                        <li>
                                            <span>about</span>
                                        </li>
                                        <li>
                                            <span>contact</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="under">
                                <IconMenu onClick={() => setHideModal(true)} />
                                <div>
                                    <h2>room</h2>
                                </div>
                            </div>
                        </nav>
                    </header>
                    <img src={feature_change[curFeature].img} alt="banner" />
                    <div className="feature-buttons">
                        <button onClick={handleDecrease}>
                            <IconLeft />
                        </button>
                        <button onClick={handleIncrease}>
                            <IconRight />
                        </button>
                    </div>
                </div>
                <div className="feature-info">
                    <div className="feature-container">
                        <h1>{feature_change[curFeature].title}</h1>
                        <p className="very_dark_gray">
                            {feature_change[curFeature].description}
                        </p>
                        <a className="very_dark_gray" href="/">
                            SHOP NOW <Arrow />
                        </a>
                    </div>
                </div>
            </div>
            <div className="home-more">
                <div className="more-img">
                    <img src={more1} alt="black chair" />
                </div>
                <div className="more-info">
                    <h3>About our furniture</h3>
                    <p className="dark_gray">
                        Our multifunctional collection blends design and
                        function to suit your individual taste. Make each room
                        unique, or pick a cohesive theme that best express your
                        interests and what inspires you. Find the furniture
                        pieces you need, from traditional to contemporary styles
                        or anything in between. Product specialists are
                        available to help you create your dream space.
                    </p>
                </div>
                <div className="more-img">
                    <img src={more2} alt="white chair" />
                </div>
            </div>
        </div>
    );
};

export default App;
