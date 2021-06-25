import React from 'react';
import {
    FaFlipboard, FaAutoprefixer, FaPeriscope, FaPushed, FaGithub
} from "react-icons/fa";

const Process = () => {
    return (
        <div className="process_cards"> 
            <div className="process_card-diff">
                {/* a slider functionality is going to be here 👇👇 */}
                <h2>the process</h2>
                <h4>by following a structured, proven approach, your project is completed on-time,
                    on-budget and exactly as designed
                </h4>
            </div>

            <div className="process_card">
                <div className="process-img">
                    <FaFlipboard className="process-logo"/>
                </div>
                <h1 className="process-cardText">e<span>x</span>plore</h1>
                <div>
                    <p className="process-text" style={{paddingBottom: "2rem"}}>
                        The journey begins with our team listening to your aspirations for the project <span role="img">✔✔</span>
                    </p>
                </div>
            </div>

            <div className="process_card">
                <div className="process-img">
                    <FaAutoprefixer className="process-logo"/>
                </div>
                <h1 className="process-cardText"><span>d</span>esign</h1>
                <div>
                    <p className="process-text">
                        our collaborative design approach balances creativity and clarity for a well-defined
                        scope of work, budget and schedule.
                    </p>
                </div>
            </div>

            <div className="process_card">
                <div className="process-img">
                    <FaPeriscope className="process-logo"/>
                </div>
                <h1 className="process-cardText">pl<span>a</span>n</h1>
                <div>
                    <p className="process-text">
                        Disciplined planning secures all required approvals and permits, lines up the resources
                        and establishments the fixed price, fixed schedule. <span role="img">👨‍👧‍👦👫👨‍👦‍👦</span>
                    </p>
                </div>
            </div>

            <div className="process_card">
                <div className="process-img">
                    <FaPushed className="process-logo"/>
                </div>
                <h1 className="process-cardText">const<span>r</span>uct</h1>
                <div>
                    <p className="process-text">
                        with an experienced developers <span role="img">😎</span> at the helm, and with a focus on quality and efficiency.
                        our team execute the plan <span role="img">🤩🤩💻✊</span>
                    </p>
                </div>
            </div>

            <div className="process_card">
                <div className="process-img">
                    <FaGithub className="process-logo"/>
                </div>
                <h1 className="process-cardText">c<span>o</span>mplete</h1>
                <div>
                    <p className="process-text">
                        Then we can deploy your application and host it live to any domain name of your choice <span role="img">🧨✨🎇.</span> 
                        our maintenance cost is also affordable <span role="img">😉💻💻</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Process;