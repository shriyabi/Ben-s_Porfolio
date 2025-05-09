import React, { useState } from 'react';
import './Timeline.css';
import forMich from './4MichBlue.png';
import urop from './UROP.jpeg';
import mfcc from './MFCC.jpeg';
import edw from './edw.jpeg';
import pres from './lobby.jpeg';
import lobby from './pres.jpeg';
import mipp from './MIPP.jpeg';
import gsp from './gsp.png';
import will from './will.jpeg';
import rise from './rise.jpeg';
import terry from './IMG_5595.jpeg';
import ScrollAnimation from 'react-animate-on-scroll';
import { useSpring, animated } from '@react-spring/web'
import { useTransition, useSprings } from '@react-spring/web'
import "animate.css/animate.compat.css";

function PopUp({ title, description1, description2, description3, description4, description5, paragraph, url, company, startDate, endDate, skills }) {
    const [open, setOpen] = useState(false);
    const openModal = () => {
        setOpen(true); //using setOpen setter to change open value
    };
    const closeModal = () => {
        setOpen(false);
    };
    return (
        <div>
            <button className="text-xs text-red-700 hover:text-blue-950 hover:text-sm lg:text-sm hover:text-md" onClick={openModal}> Read More </button>
            {open && ( // Changed isOpen to open
                <div className="modal-overlay ">
                    <div className="modal w-[80vw] md:max-height-[90vh] overflow-y-auto scroll-smooth">
                        <div className="modal-header">
                            <div className="text-xl pt-5 pl-5 font-bold text-red-700 underline lg:text-2xl">{title}</div>
                            <button className="text-xs mr-2 ml-10 p-1 border border-solid rounded-full border-blue-950 hover:bg-red-700 hover:text-gray-300 lg:text-base" onClick={closeModal}> Close </button>
                        </div>
                        <div className="modal-header">
                            <div className="text-l pt-0 pl-5 font-bold text-blue-950 lg:text-2xl">{company}</div>
                        </div>
                        <div className="modal-header">
                            <div className="text-sm pt-0 pl-5 font-bold italic text-red-700 lg:text-base">{startDate} - {endDate} </div>
                        </div>
                        <div className="modal-body flex flex-col justify-center items-center">
                            <div className="inline-flex w-full flex justify-center items-center">
                                {url}
                                {/*<img src={url2} className="experience-img w-2/5 h-auto pt-5 pb-10"></img>*/}
                            </div>
                            <div class="text-base px-4 py-2 mt-2 w-full bg-blue-950 text-gray-300 text-semibold">
                                <div className="pb-1 text-[0.8em] leading-none md:text-sm lg:text-base">{paragraph}</div>
                                <br></br>
                                <div className="pb-1 text-[0.8em] text-left pb-3 leading-none md:text-sm lg:text-base">{description1}</div>
                                <div className="pb-1 text-[0.8em] leading-none pb-3 text-left md:text-sm lg:text-base">{description2}</div>
                                <div className="pb-1 text-[0.8em] text-left pb-3 leading-none md:text-sm lg:text-base">{description3}</div>
                                <div className="pb-1 text-[0.8em] text-left pb-3 leading-none md:text-sm lg:text-base">{description4}</div>
                                <div className="pb-1 text-[0.8em] text-left leading-none md:text-sm lg:text-base">{description5}</div>
                            </div>
                            <div class="text-red-700 bg-blue-950 w-full pt-3 pb-2 text-sm font-light text-left px-4 lg:text-base">
                                SKILLS:
                                <br></br>
                                {skills}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

function Transition({ children, className }) {
    const transitions = useTransition(true, {
        from: { opacity: 0, transform: 'scale(0.5)' },
        enter: { opacity: 1, transform: 'scale(1)' },
        leave: { opacity: 0, transform: 'scale(0.5)' },
        config: { duration: 300 }, // Adjust duration as needed
    });

    return transitions((style, item) =>
        item && <animated.div className={className} style={style}>{children}</animated.div>
    );
}

function Timeline() {
    return (
        <div className="flex flex-col justify-center w-4/5 lg:w-screen xl:w-3/5">
             <div className="flex flex-row">
                <div className="text-center w-1/2"></div>
                <div className="flex flex-col justify-center items-center px-4">
                    <div className="point"></div>
                    <div className="line"></div>
                </div>
                <div className=" text-center w-1/2">
                    <div className="experience rounded-tr-lg rounded-br-lg rounded-tl-sm rounded-bl-sm">
                        <div className="text-xs text-left font-light pl-2 lg:text-base">AUGUST 2025 -  </div>
                        <div className="text-base font-bold text-center md:text-lg lg:text-xl"> Business Analyst </div>
                        <div className="text-xs font-normal text-right pr-2 italic md:text-sm lg:text-lg"> Deloitte (Goverment and Public Service Division)
                         </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row">
                <div className="text-center w-1/2">
                    <div className="experience rounded-tl-lg rounded-bl-lg rounded-tr-sm rounded-br-sm">
                        <div className="text-xs text-left font-light pl-2 lg:text-base">MAY 2025 - PRESENT</div>
                        <div className="text-base font-bold text-center md:text-lg lg:text-xl">Data Director</div>
                        <div className="text-xs font-normal text-right pr-2 italic md:text-sm lg:text-lg"> Young Democrats of Michigan </div>
                     </div>
                </div>
                <div className="flex flex-col justify-center items-center px-4">
                    <div className="point"></div>
                    <div className="line"></div>
                </div>
                <div className="text-center w-1/2"></div>
            </div>
            <div className="flex flex-row">
                <div className="text-center w-1/2"></div>
                <div className="flex flex-col justify-center items-center px-4">
                    <div className="point"></div>
                    <div className="line"></div>
                </div>
                <div className=" text-center w-1/2">
                    <div className="experience rounded-tr-lg rounded-br-lg rounded-tl-sm rounded-bl-sm">
                        <div className="text-xs text-left font-light pl-2 lg:text-base">MAY 2025 - PRESENT </div>
                        <div className="text-base font-bold text-center md:text-lg lg:text-xl"> Co-Founder </div>
                        <div className="text-xs font-normal text-right pr-2 italic md:text-sm lg:text-lg"> Michigan Next
                         </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row">
                <div className="text-center w-1/2">
                    <div className="experience rounded-tl-lg rounded-bl-lg rounded-tr-sm rounded-br-sm">
                        <div className="text-xs text-left font-light pl-2 lg:text-base">APRIL 2024 - NOVEMBER 2024</div>
                        <div className="text-base font-bold text-center md:text-lg lg:text-xl">Data Manager</div>
                        <div className="text-xs font-normal text-right pr-2 italic md:text-sm lg:text-lg"> For Michigan, an America Votes Organization </div>
                        <PopUp title="Data Manager"
                            description1="
                            Developed and executed data strategies for a large-scale engagement program, streamlining data management across 41 universities using Excel, SQL, Google Data Studio, and Python to engage students. 
                            "
                            description2="Designed and implemented a targeting system integrating web data to reach previously untapped student populations, successfully registering 5,292 voters and 54,445 field sign-ups/PTVs."
                            description3="Implemented cross-platform systems using APIs and integrations to enhance connectivity and improve data flow, helping our team of 450 coordinate 13,951 shifts.
                            "
                            description4="Generated data insights using Google Data Studio and Powerpoint to create visualizations and reports on organizational metrics that facilitated data-driven decision-making among senior leadership.
                            "
                            description5="Created detailed tracking systems, including hiring and performance trackers documenting sizable engagement numbers, such as 57,468 doors knocked, 402,444 calls made, and 1,211,644 texts sent, along with 16,643 contacts."
                            url = {<img src={forMich} className="experience-img w-auto h-[30vh] pt-5 pb-5"></img>}
                            startDate="APRIL 2024"
                            endDate="PRESENT"
                            company="For Michigan"
                            skills="NGP VAN, Data Management, Empower, Blocks, Data Maintenance and Integrity, Google Sheets" />
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center px-4">
                    <div className="point"></div>
                    <div className="line"></div>
                </div>
                <div className="text-center w-1/2"></div>
            </div>
            <div className="flex flex-row">
                <div className="text-center w-1/2"></div>
                <div className="flex flex-col justify-center items-center px-4">
                    <div className="point"></div>
                    <div className="line"></div>
                </div>
                <div className=" text-center w-1/2">
                    <div className="experience rounded-tr-lg rounded-br-lg rounded-tl-sm rounded-bl-sm">
                        <div className="text-xs text-left font-light pl-2 lg:text-base">FEBRURARY 2024 - APRIL 2024</div>
                        <div className="text-base font-bold text-center md:text-lg lg:text-xl">Data Fellow</div>
                        <div className="text-xs font-normal text-right pr-2 italic md:text-sm lg:text-lg"> For Michigan, an America Votes Organization
                         </div>
                        <PopUp title="Data Fellow"
                            description1="For Michigan is a college student GOTV organization under the America Votes network. I work directly under the state director to run, optimize, and advise on data."
                            url = {<img src={forMich} className="experience-img w-auto h-[30vh] pt-5 pb-5"></img>}
                            startDate="FEBRURARY 2024"
                            endDate="APRIL 2024"
                            company="For Michigan"
                            skills="NGP Van, Spreadsheets" />
                    </div>
                </div>
            </div>
            <div className="flex inline-flex">
                <div className=" text-center w-1/2">
                    <div className="experience rounded-tl-lg rounded-bl-lg rounded-tr-sm rounded-br-sm">
                        <div className="text-xs text-left font-light pl-2 lg:text-base">NOVEMBER 2023 - MARCH 2024</div>
                        <div className="text-sm font-bold text-center md:text-lg lg:text-xl">Deputy Campaigns and Lobbying Director</div>
                        <div className="text-xs font-normal text-right pr-2 italic md:text-sm lg:text-lg"> Michigan Federation of College Democrats </div>
                        <PopUp title="Deputy Campaigns and Lobbying Director"
                            description1="Developed a comprehensive political tracker for state and federal campaigns within Michigan. Created research on candidates possible candidates across Michigan for future MFCD involvement in races. Created multiple educational resources for chapters to increase the political participation of chapter members through various means. Spearheaded the creation of the advocacy and lobbying policy group for college students across the state"
                            url = {<img src={mfcc} className="experience-img w-auto h-[30vh] pt-5 pb-5"></img>}
                            startDate="NOVEMBER 2023"
                            endDate="MARCH 2024"
                            company="Michigan Federation of College Democrats"
                            skills="Microsoft Excel, Political Campaigns, Political Research and Tracking, Public Policy" />
                    
                        
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center px-4">
                    <div className="point"></div>
                    <div className="line"></div>
                    <div className="line2"></div>
                </div>
                <div className="text-center w-1/2"></div>
            </div>
            <div className="flex inline-flex">
                <div className=" text-center w-1/2"></div>
                <div className="flex flex-col justify-center items-center px-4">
                    <div className="point"></div>
                    <div className="line"></div>
                    <div className="line2"></div>
                </div>
                <div className=" text-center w-1/2">
                    <div className="experience rounded-tr-lg rounded-br-lg rounded-tl-sm rounded-bl-sm">
                    <div className="text-xs text-left font-light pl-2 lg:text-base">SEPTEMBER 2023 - APRIL 2024</div>
                        <div className="text-sm font-bold text-center md:text-lg lg:text-xl">Research Assistant</div>
                        <div className="text-xs font-normal text-right pr-2 italic md:text-sm lg:text-lg"> University of Michigan Institute for Social Research </div>
                        <PopUp title="Data Manager"
                            description1="The Constituency-Level Elections Archive (CLEA): Coded the following elections: Kosovo 2001 and 2004, Pakistan 1970, United States 2022, Seychelles 2020, Italy 1897, Brazil Presidential 2010, Zambia 2006 and 2008 Presidential, and French Presidential 2012."
                            description2="Quantitative and Qualitative Data Checks for the following elections: Italy 1897, Seychelles 2020, Pakistan 1970, Whales 2016, and Brazil Presidential 2010."
                            url = {<img src={urop} className="experience-img w-auto h-[30vh] pt-5 pb-5"></img>}
                            startDate="SEPTEMBER 2023"
                            endDate="APRIL 2024"
                            company="University of Michigan Institute for Social Research"
                            skills="Elections, Qualitative and Quanitative Research Methodologies"
                        />
                    </div>

                </div>
            </div>
            <div className="flex inline-flex">
                <div className=" text-center w-1/2">
                    <div className="experience rounded-bl-lg rounded-tl-lg rounded-tr-sm rounded-br-sm">
                    <div className="text-xs text-left font-light pl-2 lg:text-base">AUGUST 2023 - OCTOBER 2023</div>
                        <div className="text-base font-bold text-center md:text-lg lg:text-xl">Intern</div>
                        <div className="text-xs font-normal text-right pr-2 italic md:text-sm lg:text-lg">Elect Democratic Women</div>
                        <PopUp title="Intern"
                            description1="Aided 18 national campaigns with vital infrastructure and opposition research.
                            "
                            description2="Drafted public endorsements of candidates on behalf of Congresswoman Frankel and meeting notes/agendas for Congressional Representatives."
                            description3="Wrote notes for Representatives during US House floor fundraising meetings, aiding in the 21 million to support Democratic Women. "
                            paragraph="Entering my first year at Michigan, I interned remotely for Elect Democratic Women, a group of the Democratic Women Subcaucus in the House of Representatives. Shadowing the National director, I aided in drafting opposition research, building out templates, and drafting endorsements for pivotal House and Senate Campaigns. The endorsements I drafted for the candidates and Representative Louis Frankel were released by EDW periodically throughout the cycle. I also executed creating congressional meeting notes, which led to fundraising efforts from high-profile donors aiding in the 21 million EDW used to elect Women up and down the Ballot in 2022. EDW gave not only an introduction to federal campaigns but also to the congressional world. Liz, the director, was a boss and a mentor who took every moment to teach more about the electoral campaign world and prepare me for future opportunities. "
                            skills="Opposition Research, Press Releases, Campaign Database Management, Congressional Meeting Notes"
                            url = {<img src={edw} className="experience-img w-auto h-[30vh] pt-5 pb-5"></img>}
                            startDate="AUGUST 2023"
                            endDate="OCTOBER 2023"
                            company="Elect Democratic Women" />
                    </div>

                </div>
                <div className="flex flex-col justify-center items-center px-4">
                    <div className="point"></div>
                    <div className="line"></div>
                </div>
                <div className="text-center w-1/2"></div>
            </div>
            <div className="flex inline-flex">
                <div className="text-center w-1/2"> </div>
                <div className="flex flex-col justify-center items-center px-4">
                    <div className="point"></div>
                    <div className="line"></div>
                    <div className="line2"></div>
                </div>
                <div className=" text-center w-1/2">
                    <div className="experience rounded-tr-lg rounded-br-lg rounded-tl-sm rounded-bl-sm">
                    <div className="text-xs text-left font-light pl-2 lg:text-base">JULY 2022 - DECEMBER 2022</div>
                        <div className="text-base font-bold text-center md:text-lg lg:text-xl">Campaign Intern</div>
                        <div className="text-xs font-normal text-right pr-2 italic md:text-sm lg:text-lg">Will Snyder for Michigan's 87th State House District</div>
                        <PopUp title="Field Director"
                            description1="Directed Successful Political Campaigns with High Voter Turnout: Led Will Snyder's State House 87th campaign to victory, securing a win in the August election with 39% in a competitive four-candidate race. 
                            Achieved a resounding victory in the November election with 62% voter support. 
                            Implemented strategic door-to-door canvassing and text banking initiatives that engaged over 7000 voters, contributing to higher voter turnout and campaign success."
                            description2="Established Efficient Data Management Systems for Targeted Outreach:
                            Utilized NPGVan and Scale to Win to create comprehensive turf and phone/text databases, optimizing voter targeting and outreach efforts.
                            Managed and updated databases, ensuring accurate voter information and effective outreach."
                            url = {<img src={will} className="experience-img w-auto h-[30vh] pt-5 pb-5"></img>}
                            paragraph="As President of Muskegon Community College, I represented the college in a pivotal time in college safety. I lobbied on Capitol Hill with the College President, the SGA advisor, and an attorney for a safety funding bill. During this time, I also managed the clubs and organization budgets and ensured we built a new system for clubs to thrive after many died out during the pandemic. We also created advertisements and marketing campaigns to get students involved on campus."
                            startDate="JULY 2022"
                            endDate="DECEMBER 2022"
                            company="Will Snyder for Michigan's 87th State House District"
                            skills="Political Campaigns, Campaign Strategy, Voter Engagement and Turnout, Canvassing and Text Banking Management" />
                    </div>

                </div>
            </div>
            <div className="flex inline-flex">
                <div className=" text-center w-1/2">
                    <div className="experience rounded-bl-lg rounded-tl-lg rounded-tr-sm rounded-br-sm">
                    <div className="text-xs text-left font-light pl-2 lg:text-base">JULY 2022 - DECEMBER 2022</div>
                        <div className="text-base font-bold text-center md:text-lg lg:text-xl">Campaign Intern</div>
                        <div className="text-xs font-normal text-right pr-2 italic md:text-sm lg:text-lg">Terry Sabo for Michigan's 32nd State Senate District </div>
                        <PopUp title="Field Director"
                            description1="Helped lead the State House 87th campaign, achieving a primary win with a 39% lead in a 4-way race and the November election with a significant 62% majority vote.
                            "
                            description2="Helped lead Terry Sabo's State Senate campaign, securing 47% of votes in a highly competitive race. "
                            description3="I managed the execution of door-to-door canvassing, reaching 25,000 voters."
                            description4="Wrote scripts and text-banked 200,000 voters."
                            paragraph="Shortly after starting with Rise, I got the political work bug. Then, candidate Will Snyder knocked on my door while I was away, but my mom told him I might be interested in volunteering. After three cold calls to Will, I met with him and his team. After quickly fulfilling the campaign's needs, we won the August primary in a heavily contested five-person race. The general election was less competitive, so I was sent to work for Representative Terry Sabo in the highly competitive State Senate race. With an extended need for campaign help, I became the field director, cutting terf, managing volunteers, creating phone and text banks, and working under the campaign manager. I undertook trainings at Blue Future Now and Progressive Turnout Project to further my impact. While we won the state house race and lost the state senate race, I realized through it that all campaigns held my heart. I loved the conversations with everyday people and how policies directly impact their lives. These campaigns being local was a massive blessing; I learned the ins and outs of every aspect of campaigns and did anything and everything to win. 
                            "
                            url = {<img src={terry} className="experience-img w-auto h-[30vh] pt-5 pb-5"></img>}
                            startDate="JULY 2022"
                            endDate="DECEMBER 2022"
                            company="Terry Sabo for Michigan's 32nd State Senate District"
                            skills="Canvassing and Text Banking Management, NPGVAN
                            " />
                    </div>

                </div>
                <div className="flex flex-col justify-center items-center px-4">
                    <div className="point"></div>
                    <div className="line"></div>
                    <div className="line2"></div>
                </div>
                <div className="text-center w-1/2"></div>
            </div>
            <div className="flex inline-flex">
                <div className="text-center w-1/2"></div>
                <div className="flex flex-col justify-center items-center px-4">
                    <div className="point"></div>
                    <div className="line"></div>
                </div>
                <div className=" text-center w-1/2">
                    <div className="experience rounded-tr-lg rounded-br-lg rounded-tl-sm rounded-bl-sm">
                    <div className="text-xs text-left font-light pl-2 lg:text-base">MAY 2022 - SEPTEMBER 2022</div>
                        <div className="text-base font-bold text-center md:text-lg lg:text-xl">West Michigan Regional Lead</div>
                        <div className="text-xs font-normal text-right pr-2 italic md:text-sm lg:text-lg">Rise</div>
                        <PopUp title="West Michigan Regional Lead"
                            description1="One of my notable achievements was spearheading civic engagement in West Michigan in collaboration with the state team. Our efforts resulted in over 20,000 young adults (aged 18-22) making pledges to vote, a testament to our ability to mobilize and engage a specific demographic. 
"                           description2="As a passionate advocate for affordable education, I took a stand for young adults burdened by student debt. I championed federal loan forgiveness initiatives to create a more equitable educational system where financial constraints would not hinder the pursuit of knowledge and personal growth. This commitment to social issues underscores my dedication to championing change."
                            description3="Provided Expert Insights for Effective Outreach and Marketing Strategies: Collaborated with the State Director, offering valuable advice on impactful outreach and marketing efforts. Contributed to Team Michigan's success through innovative strategies that resonated with voters and strengthened campaign impact."
                            paragraph="Rise was my first introduction to the political world. I began as a campus fellow at Muskegon Community College, getting pledges to vote, training volunteers, and aiding students in voting registration. After being a campus fellow for three months, I became the West Michigan Regional lead, where I managed our Western Michigan organizers. Rise taught me the importance of the youth vote in Michigan. During my time there, the conversations with college students about vital issues in 2022, such as abortion, represented the new age of voices coming to the surface. The youth vote turnout in 2022 was record high and heavily impacted the Democratic party, gaining the first trifecta state government in years and passing all three ballot proposals, including voting rights and prochoice protections alongside the overturn of the 1931 abortion ban. While I did not realize the impact of this position at the time, it proved to be one of the most important and pivotal in the state's history."
                            url = {<img src={rise} className="experience-img w-auto h-[30vh] pt-5 pb-5"></img>}
                            startDate="MAY 2022"
                            endDate="SEPTEMBER 2022"
                            company="Rise"
                            skills="Civic Engagement, Voter Outreach Programs" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Timeline; 