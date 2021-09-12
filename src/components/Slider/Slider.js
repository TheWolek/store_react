import './Slider.scss';

function Slider() {
    return (
        <div className="sliderContainer">
            <div className="sliderContent">
                <div className="slide"></div>
            </div>
            <div className="sliderNav">
                <div className="sliderNavDot active" id="slider1"></div>
                <div className="sliderNavDot" id="slider2"></div>
                <div className="sliderNavDot" id="slider3"></div>
            </div>
        </div>
    );
}

export default Slider;