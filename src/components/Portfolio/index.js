import React, { useState } from "react";
import Project from '../Project';
import { capitalizeFirstLetter } from '../../utils/helpers';


function Portfolio() {
    const [pages] = useState([
        {
            name: 'portfolio'
        }
    ]);

    const [currentPage] = useState(pages[0]);
    const [projects] = useState([
        {
            name: 'budget-tracker',
            description: 'MongoDB/Express/Node.js/JavaScript/Mongoose/Progressive Web Application',
            link: 'https://budget-tracker-2456.herokuapp.com/',
            repo: 'https://github.com/patty345/budget-tracker'
        },
        {
            name: 'park-finder',
            description: 'HTML/CSS/JavaScript/API',
            link: 'https://patty345.github.io/park-finder/',
            repo: 'https://github.com/patty345/park-finder'
        },
        {
            name: 'teach-bot',
            description: 'HTML/CSS/JavaScript/AI21API/MySQL2',
            link: 'https://teach-bot-ai.herokuapp.com/',
            repo: 'https://github.com/moonryc/Teach-Bot'
        },
        {
            name: 'weather-dashboard',
            description: 'HTML/CSS/JavaScript/API',
            link: 'https://patty345.github.io/Weather-Dashboard/',
            repo: 'https://github.com/patty345/Weather-Dashboard'
        },
        {
            name: 'note-taker',
            description: 'Nodejs/Express/Inquirer/NPM',
            link: 'https://note-taker-9625.herokuapp.com/',
            repo: 'https://github.com/patty345/note-taker'
        },
        {
            name: 'work-day-scheduler',
            description: 'HTML/JavaScript/CSS/API',
            link: 'https://patty345.github.io/Work-Day_Scheduler/',
            repo: 'https://github.com/patty345/Work-Day_Scheduler'
        },
        {
            name: 'password-generator',
            description: 'MongoDB/Express/Node.js/JavaScript/Mongoose/Progressive Web Application',
            link: 'https://patty345.github.io/Password_Generator/',
            repo: 'https://github.com/patty345/Password_Generator'
        }
    ])

    return(
        <section className="p-0">
              <div className="container-fluid p-0">
                <h1 className="text-center margin-top">{capitalizeFirstLetter(currentPage.name)}</h1>
                <hr className="my-4" />
                <div className="row no-gutters popup-gallery">
                   
                        {projects.map((project, idx) => (
                            <Project
                                project={project}
                                key={"project" + idx}
                            />
                        ))}
                    </div>
                
            </div>
        </section>
    )
}



export default Portfolio;