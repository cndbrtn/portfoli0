import React, { useEffect, useState } from 'react';
import { Typewriter, Hidden } from '../style';
import styled from 'styled-components';

const About = () => {

    const [hide, setHide] = useState('display: none;');

    const Hidden = styled.div`
    ${hide}
    `

    useEffect(() => {
        setTimeout(() => {
            setHide('display: block;');
        }, 1000)
    }, []);

    return (
        <Typewriter>
            <div>
                <h1>You have accessed file:/CND/About...</h1>
            </div>
            <Hidden>
                <div>
                    <img src='/img/profile-img.png' alt='Entity known as CND' />
                </div>
                <p>CODE NAME: CND
                    <br />
                    ALIAS: Cindy
                    <br />
                    LOCATION: Denver
                    <br />
                    CONTACT: cindy.brton@gmail.com
                    <br />
                    <br />
                    CND aka Cindy is a full stack MERN developer last known to be living in Denver CO. The entity known as CND is often found
                    working on coding projects for fun, learning new languages like Ruby, training their 1-year-old dog, and/or watering their
                    many plants. 

                    CND has a BFA in Painting and an MFA in Video and Performance art from Ringling College of Art and Design, and School of the
                    Museum of Fine Arts Boston/Tufts, respectively. A lifelong persuit of art and technical skills has given CND the flexibility
                    and creativity to succeed in many areas, including web development. Their knack for picking up new skills, languages, and 
                    concepts makes them an asset on any team.
                
                    CND has been known to choose coding over video games voluntarily, for the pure joy of problem solving and creating. They can be
                    obsessive and tenacious, unwilling to quit until the problem is solved. Always learning, always experimenting, always ready for
                    more.
                </p>
            </Hidden>
        </Typewriter>
    )
}

export default About;