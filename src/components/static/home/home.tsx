import React from 'react'
import './home.scss'

export interface OwnProps {
    mediaType: string;
}

export type HomeComponentProps = OwnProps;

const Home = (props: HomeComponentProps) => {
    const { mediaType } = props;
    return (
        <div className={`announcements-container ${mediaType}`}>
                <div className="post-card">
                    <h5>
                        Date: December, 2020 (what is this year....)
                        <br />
                        The DBFZ national championship has been in full swing for several weeks now. It's been great watching it and a real reminder to get this rather large visual / technical upgrade done!. Overall for you guys the biggest change is going to just be the visual layout and responsiveness of the site. I did not want to try and add a bunch of features while also converting over the technical back-end. (However I did get one feature launched to help show frame data, similar to other sites such as the Skullgirls wiki :D )
                        <br />
                        I have been dealing with a new job and a new house which has also made this whole process slower than I wanted. But it's here! ENJOY!
                        <br />
                        -KP
                    </h5>
                </div>
                <div className="post-card">
                    <h5>
                        Date: 02/25/20
                        <br />
                        SEASON 3 is upon us! 
                        <br />
                        Hopefully everyone is hyped about the changes and updates coming to Dragonball Fighterz. I wanted to keep everyone informed on how updates will be occuring with Framehameha! Right now I get a daily update from Google Sheets letting me know all of the changes that were updated to the sheets listed below. Once I get those updates I will be updating the site to reflect the most recent changes. Keep in mind, that this is alot of information and will take some time to settle down entirely. 
    
                        I look forward to seeing everyone out on the battlefield. Let's go!
                        <br />
                        -KP
                    </h5>
                </div>
                <div className="post-card">
                    <h5>
                        Hello Everyone,
                        <br />
                        Welcome to Frame-ha-me-ha! This was a personal project that I have been working on to try and bring together multiple assets and resources. Recently <a href="https://play.google.com/store/apps/details?id=com.Jonathan.Thats_Plus" target="_blank" rel="noopener noreferrer" role="button">That's Plus</a>(If you havent checked it out, you should.), was released by <a href="https://twitter.com/jonathan_tene" target="_blank" rel="noopener noreferrer" role="button">Jonathan Tene</a> which was a huge motivator to finish this project. 
                        Hopefully this can help fill a gap for any non android users out there. Or if you are looking to get this information on a PC/Mac without digging into the excel sheets. Speaking of those sheets this entire thing is not possible without <a href="https://twitter.com/RinSenpaiii" target="_blank" rel="noopener noreferrer" role="button">@Rin-senpaii</a> and <a href ="https://twitter.com/rafestation" target="_blank" rel="noopener noreferrer" role="button">@Turtleon</a> putting in an amazing amount of work on the doc's that enabled this kind of resource. Also thank you to <a href ="https://twitter.com/CoderDBFZ" target="_blank" rel="noopener noreferrer" role="button">@CoderDBFZ</a> for the hitbox viewer.
                        <br />
                        <br />
                        This resource is not maintained by anyone but <a href="https://twitter.com/_Kittenpower" target="_blank" rel="noopener noreferrer" role="button">myself</a> currently. I am updating and reflecting in a more digestable manner what they have created. None of the individuals are involved with this resource. If you would like to see their original data in all of its excel glory. You can view them:
                        <br />
                        <a href="https://docs.google.com/spreadsheets/d/1-p29UmRGIPF6n17ddOEtYfLcn_KRlE2VH6tE61P5UM8/edit#gid=768448487" target="_blank" rel="noopener noreferrer" role="button">Frame Data</a>
                        <br />
                        <a href="https://docs.google.com/spreadsheets/d/1IIpmO2wDU2KZV7tYQhcK3hB0Z_Mg1H18HFeDox9LZ9o/edit#gid=0" target="_blank" rel="noopener noreferrer" role="button">Assist Frame Data</a>
                        <br />
                        <a href="https://docs.google.com/spreadsheets/d/17K1onCbItyLc8njouC_9-j7PZBT9rMqpn_Je55BINl4/edit#gid=0" target="_blank" rel="noopener noreferrer" role="button">Super Damage</a>
                        <br />
                        <a href="https://docs.google.com/spreadsheets/d/1-GxpldVn3bnerBlUfzYUgdLzSOdQ0IWvN7Co-nV7qlQ/edit#gid=0" target="_blank" rel="noopener noreferrer" role="button">5L / 2L Data</a>
                        <br />
                        Thank you everyone who has contributed to the DBFZ community to make this resource a possibility, special shout-out to <a href="https://twitter.com/rathfgc" target="_blank" rel="noopener noreferrer" role="button">RathFGC</a> (Gotta rep our AZ fam) and ALL DBFZ content creators, for creating awesome videos that can help new and old comers alike. And remember to tech those dragon rushes.
                        <br />
                        -KP
                    </h5>
                </div>
            </div>
    )
}


export default Home