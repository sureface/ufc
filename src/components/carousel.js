import React, {Component} from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            speed: 1000,

            //=== its for auto Play carousel ===
            // autoplaySpeed: 2000,
            // cssEase: "linear"

            // === its for vertical carousel ===
            // vertical: true,
            // verticalSwiping: true,
        };
        return (
            <div className="carouselSlick">
                <Slider {...settings}>
                    <div className="slideBlock">
                        <div className="pple1">
                            <div className="card-glass">
                                <h1 className="textStyle">Magregor tupoy</h1>
                                <button type="button" className='btn watch btn-success'>Free watch Fight</button>
                            </div>
                        </div>
                    </div>
                    <div className="slideBlock">
                        <div className="pple2">
                            <div className="card-glass">
                                <h1 className="textStyle">Habib malades</h1>
                                <button type="button" className='btn watch btn-success'>Free watch Fight</button>
                            </div>
                        </div>

                    </div>
                    <div className="slideBlock">

                        <div className="pple3">
                            <div className="card-glass">
                                <h1 className="textStyle">Habib VS Magregor</h1>
                                <button type="button" className='btn watch btn-success'>Free watch Fight</button>
                            </div>
                        </div>

                    </div>
                    <div className="slideBlock">

                        <div className="pple4">
                            <div className="card-glass">
                                <h1 className="textStyle">Alexander VS Getji</h1>
                                <button type="button" className='btn watch btn-success'>Free watch Fight</button>
                            </div>
                        </div>

                    </div>
                </Slider>
            </div>
        );
    }
}