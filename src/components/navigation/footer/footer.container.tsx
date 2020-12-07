import React from "react";

import './footer.scss'

export interface OwnProps {
    mediaType: string;
}

export type FooterProps = OwnProps;
const FooterComponent = (props: FooterProps) => {
    const { mediaType } = props;
    return (
        <div className={`footer ${mediaType}`}>
            <div className='footer-contents'>
                <div className="footer-row">
                    <div className="footer-column">
                        <p>Resources</p>
                        <ul>
                            <li>
                                <a href='https://docs.google.com/spreadsheets/d/1-p29UmRGIPF6n17ddOEtYfLcn_KRlE2VH6tE61P5UM8/edit#gid=768448487' target='_blank' rel="noopener noreferrer">Turtleon's Frame Data</a>
                            </li>
                            <li>
                                <a href='https://docs.google.com/spreadsheets/d/1IIpmO2wDU2KZV7tYQhcK3hB0Z_Mg1H18HFeDox9LZ9o/edit#gid=0' target='_blank' rel="noopener noreferrer">Assist Frame Data</a>
                            </li>
                            <li>
                                <a href='https://docs.google.com/spreadsheets/d/17K1onCbItyLc8njouC_9-j7PZBT9rMqpn_Je55BINl4/edit#gid=0' target='_blank' rel="noopener noreferrer">Super Damage Data</a>
                            </li>
                            <li>
                                <a href='https://docs.google.com/spreadsheets/d/1-GxpldVn3bnerBlUfzYUgdLzSOdQ0IWvN7Co-nV7qlQ/edit#gid=0' target='_blank' rel="noopener noreferrer">5L/2L Data</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <p>Twitter's</p>
                        <ul>
                            <li>
                                <a href='https://twitter.com/_Kittenpower' target='_blank' rel="noopener noreferrer">My Twitter</a>
                            </li>
                            <li>
                                <a href='https://twitter.com/RinSenpaiii' target='_blank' rel="noopener noreferrer">Rin-senpai</a>
                            </li>
                            <li>
                                <a href='https://twitter.com/rafestation' target='_blank' rel="noopener noreferrer">Turtleon</a>
                            </li>
                            <li>
                                <a href='https://twitter.com/jonathan_tene' target='_blank' rel="noopener noreferrer">Jonathan Tene</a>
                            </li>
                            <li>
                                <a href='https://twitter.com/CoderDBFZ' target='_blank' rel="noopener noreferrer">CoderDBFZ</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <p>Feedback</p>
                        <a href='https://docs.google.com/forms/d/e/1FAIpQLSfYyAZx44XSa2ify29HGSfNycrPjpfY2gHu6BD2IPuCqVCjFg/viewform' target='_blank' rel="noopener noreferrer">Feedback Link</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterComponent;