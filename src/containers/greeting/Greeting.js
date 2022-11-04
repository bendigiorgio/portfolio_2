import "./Greeting.scss"
import WaveSvg from "../../components/waveSvg/WaveSvg";

export default function Greeting(){

    return(
        <>
        <section className="welcome-container" data-scroll-section>
            <div className="panel">
                <div id="bg-image">
                    <WaveSvg />
                </div>
                <div id="heading-text">

                        <h1 id="header-title">Ben Di Giorgio</h1>
                        <p id="sub-text">Take a look into my life</p>
                </div>
            </div>

                
        </section>
        </>
    );

}