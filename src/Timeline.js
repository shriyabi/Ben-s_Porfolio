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


function PopUp({ title, description1, description2, description3, url, company, startDate, endDate, skills }) {
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
                <div className="modal-overlay">
                    <div className="modal w-[80vw] md:w-3/5">
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
                            <img src={url} className="experience-img w-auto h-[30vh] pt-5 pb-5"></img>
                            {/*<img src={url2} className="experience-img w-2/5 h-auto pt-5 pb-10"></img>*/}
                            </div>
                            <div class="text-base px-4 py-2 mt-2 w-full bg-blue-950 text-gray-300 text-semibold">
                                <div className="pb-1 text-[0.8em] leading-none md:text-sm lg:text-base">{description1}</div>
                                <br></br>
                                <div className="pb-1 text-[0.8em] leading-none md:text-sm lg:text-base">{description2}</div>
                                <br></br>
                                <div className="pb-1 text-[0.8em] leading-none md:text-sm lg:text-base">{description3}</div>
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

function Timeline() {
    return (
        <div className="flex flex-col justify-center w-4/5 lg:w-screen xl:w-3/5">
            <div className="flex inline-flex">
                <div className="text-center w-1/2">
                    <div className="experience rounded-tl-lg rounded-bl-lg rounded-tr-sm rounded-br-sm">
                        <div className="text-xs text-left font-light pl-2 lg:text-base">APRIL 2024 - PRESENT</div>
                        <div className="text-base font-bold text-center md:text-lg lg:text-xl">Data Manager</div>
                        <div className="text-xs font-normal text-right pr-2 italic md:text-sm md:text-lg"> For Michigan </div>
                        <PopUp title="Data Manager"
                            description1="
                            Leading the development and execution of data management strategies for For Michigan's campus organizing program, ensuring data integrity and actionable insights for optimization.
                            Implementing data collection systems for voter registrations and pledges to vote, tracking key metrics and providing leadership with timely reports to guide strategic decisions.
                            Collaborated with senior leadership and in-state allies to align campaign efforts with organizational objectives, using data analytics to innovate high-traffic canvassing and relational organizing tactics that enhanced student engagement and campaign growth.
                            "
                            url={forMich}
                            startDate="APRIL 2024"
                            endDate="PRESENT"
                            company="For Michigan"
                            skills="NGP Van, Spreadsheets, Data Management, Social Media Management" />
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center px-4">
                    <div className="point"></div>
                    <div className="line"></div>
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
                        <div className="text-xs text-left font-light pl-2 lg:text-base">FEBRURARY 2024 - APRIL 2024</div>
                        <div className="text-base font-bold text-center md:text-lg lg:text-xl">Data Fellow</div>
                        <div className="text-xs font-normal text-right pr-2 italic md:text-sm lg:text-lg"> For Michigan </div>
                        <PopUp title="Data Fellow"
                            description1="For Michigan is a college student GOTV organization under the America Votes network. I work directly under the state director to run, optimize, and advise on data."
                            url={forMich}
                            startDate="FEBRURARY 2024"
                            endDate="APRIL 2024"
                            company="For Michigan" 
                            skills="NGP Van, Spreadsheets"/>
                    </div>
                </div>
            </div>
            <div className="flex inline-flex">
                <div className=" text-center w-1/2">
                    <div className="experience rounded-tl-lg rounded-bl-lg rounded-tr-sm rounded-br-sm">
                    <div className="text-xs text-left font-light pl-2 lg:text-base">JANURARY 2024 - PRESENT </div>
                        <div className="text-base font-bold text-center md:text-lg lg:text-xl">GSP DEI Peer Facilitator</div>
                        <div className="text-xs font-normal text-right pr-2 italic md:text-sm lg:text-lg"> Global Scholars Program at the University of Michigan </div>
                        <PopUp title="GSP DEI Peer Facilitator"
                            startDate="JANURARY 2024"
                            endDate="PRESENT"
                            company="Global Scholars Program at the University of Michigan"
                            skills="Diversity, Equity, Inclusion, Leadership"
                        />
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
                        <div className="text-xs text-left font-light pl-2 lg:text-base">NOVEMBER 2023 - MARCH 2024</div>
                        <div className="text-sm font-bold text-center md:text-lg lg:text-xl">Deputy Campaigns and Lobbying Director</div>
                        <div className="text-xs font-normal text-right pr-2 italic md:text-sm lg:text-lg"> Michigan Federation of College Democrats </div>
                        <PopUp title="Deputy Campaigns and Lobbying Director"
                            description1="Developed a comprehensive political tracker for state and federal campaigns within Michigan. Created research on candidates possible candidates across Michigan for future MFCD involvement in races. Created multiple educational resources for chapters to increase the political participation of chapter members through various means. Spearheaded the creation of the advocacy and lobbying policy group for college students across the state"
                            url={mfcc}
                            startDate="NOVEMBER 2023"
                            endDate="MARCH 2024"
                            company="Michigan Federation of College Democrats"
                            skills="Microsoft Excel, Political Campaigns, Political Research and Tracking, Public Policy" />
                    </div>
                </div>
            </div>
            <div className="flex inline-flex">
                <div className=" text-center w-1/2">
                    <div className="experience rounded-bl-lg rounded-tl-lg rounded-tr-sm rounded-br-sm">
                    <div className="text-xs text-left font-light pl-2 lg:text-base">NOVEMBER 2023 - PRESENT</div>
                        <div className="text-sm font-bold text-center md:text-lg lg:text-xl">Policy Researcher and Presenter</div>
                        <div className="text-xs font-normal text-right pr-2 italic md:text-sm lg:text-lg"> Michigan Institute of Progressive Policy</div>
                        <PopUp title="Policy Researcher and Presenter"
                            description1="Drafted and presented a plan for election day holidays and started lobbying on the behalf of students."
                            url={mipp}
                            startDate="NOVEMBER 2023"
                            endDate="PRESENT"
                            company="Michigan Institute of Progressive Policy"
                            skills="Policy Research" />
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
                </div>
                <div className=" text-center w-1/2">
                    <div className="experience rounded-tr-lg rounded-br-lg rounded-tl-sm rounded-bl-sm">
                    <div className="text-xs text-left font-light pl-2 lg:text-base">SEPTEMBER 2023 - APRIL 2024</div>
                        <div className="text-sm font-bold text-center md:text-lg lg:text-xl">Research Assistant</div>
                        <div className="text-xs font-normal text-right pr-2 italic md:text-sm lg:text-lg"> University of Michigan Institute for Social Research </div>
                        <PopUp title="Data Manager"
                            description1="The Constituency-Level Elections Archive (CLEA): Coded the following elections: Kosovo 2001 and 2004, Pakistan 1970, United States 2022, Seychelles 2020, Italy 1897, Brazil Presidential 2010, Zambia 2006 and 2008 Presidential, and French Presidential 2012."
                            description2="Quantitative and Qualitative Data Checks for the following elections: Italy 1897, Seychelles 2020, Pakistan 1970, Whales 2016, and Brazil Presidential 2010."
                            url={urop}
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
                            description1="Opposition Candidate Research: conducted extensive research on opposition candidates for 18 frontline Congresswomen seeking reelection and for first-time Democratic women to aid diversity efforts in the House of Representatives. 
                            Currently EDW has raised over 21 million and have aided over 250 campaigns with vital infrastructure since it’s inception in 2018. 
                            "
                            description2="For Endorsement Press Releases:
                            Drafted persuasive press releases to endorse and promote Democratic candidates.
                            "
                            description3="For Campaign Data Management:
                            Developed and managed comprehensive election databases crucial for informing campaign strategies.
                            "
                            skills="Opposition Research, Press Releases, Campaign Database Management, Congressional Meeting Notes"
                            url={edw}
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
                <div className="text-center w-1/2"></div>
                <div className="flex flex-col justify-center items-center px-4">
                    <div className="point"></div>
                    <div className="line"></div>
                </div>
                <div className=" text-center w-1/2">
                    <div className="experience rounded-tr-lg rounded-br-lg rounded-tl-sm rounded-bl-sm">
                        <div className="text-xs text-left font-light pl-2 lg:text-base">AUGUST 2023 - PRESENT</div>
                        <div className="text-base font-bold text-center md:text-lg lg:text-xl">Member</div>
                        <div className="text-xs font-normal text-right pr-2 italic md:text-sm lg:text-lg">Global Scholars Program at the University of Michigan</div>
                        <PopUp title="Member"
                            description1="Created a large scale donor research database for a nonprofit focusing on climate change education"
                            url={gsp}
                            skills="Non-Profit Work"
                            startDate="AUGUST 2023"
                            endDate="PRESENT"
                            company="Global Scholars Program at the University of Michigan" />
                    </div>
                </div>
            </div>
            <div className="flex inline-flex">
                <div className=" text-center w-1/2">
                    <div className="experience rounded-tl-lg rounded-bl-lg rounded-tr-sm rounded-br-sm">
                        <div className="text-xs text-left font-light pl-2 lg:text-base">NOVEMBER 2022 -  APRIL 2023</div>
                        <div className="text-base font-bold text-center md:text-lg lg:text-xl">Student Body Representative</div>
                        <div className="text-xs font-normal text-right pr-2 italic md:text-sm lg:text-lg"> Student Services Council and Business Administration Council @ Muskegon Community College </div>
                        <PopUp title="Student Services Council and Business Administration Council Student Body Representative"
                            description1="Student Services: Represent all students and board on the council to vote on college administration petitions, and ongoing financial case repeals from students."
                            description2="Business Administration: Represent student body interest in meeting for increasing tuition rate for the 2023-24 academic year."
                            startDate="NOVEMBER 2022"
                            endDate="APRIL 2023"
                            url = {pres}
                            skills="Leadership, Social Work"
                            company="Student Services Council and Business Administration Council @ Muskegon Community College" />
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
                        <div className="text-xs text-left font-light pl-2 lg:text-base">AUGUST 2022 - APRIL 2023</div>
                        <div className="text-base font-bold text-center md:text-lg lg:text-xl">President</div>
                        <div className="text-xs font-normal text-right pr-2 italic md:text-sm lg:text-lg"> Muskegon Community College Student Government Association </div>
                        <PopUp title="President"
                            description1="
                            Provided a means of communication between the student body and the college administration, faculty and the Board of Trustees.
.Encouraged and promote interest and spirit in college activities and affairs through events and organizing.
.Provided a vital and appropriate voice for students in the governance of Muskegon Community
College pertaining to the students by holding meetings with the President and other faculty.
 .Protected the rights of the students of Muskegon Community College
.Lobbied on behalf of the college and Community College Association for Michigan Reconnect reform and college safety in Lansing.
 .Managed school club/organizational funds.
                            "
                            skills="Leadership, Lobbying, Social Work, Fund Management"
                            url={lobby}
                            startDate="AUGUST 2022"
                            endDate="APRIL 2023"
                            company="Muskegon Community College Student Government Association" />
                    </div>
                </div>
            </div>
            <div className="flex inline-flex">
                <div className=" text-center w-1/2">
                    <div className="experience rounded-bl-lg rounded-tl-lg rounded-tr-sm rounded-br-sm">
                    <div className="text-xs text-left font-light pl-2 lg:text-base">JULY 2022 - DECEMBER 2022</div>
                        <div className="text-base font-bold text-center md:text-lg lg:text-xl">Field Director</div>
                        <div className="text-xs font-normal text-right pr-2 italic md:text-sm lg:text-lg">Will Snyder for Michigan's 87th State House District</div>
                        <PopUp title="Field Director"
                            description1="Directed Successful Political Campaigns with High Voter Turnout: Led Will Snyder's State House 87th campaign to victory, securing a win in the August election with 39% in a competitive four-candidate race. 
                            Achieved a resounding victory in the November election with 62% voter support. 
                            Implemented strategic door-to-door canvassing and text banking initiatives that engaged over 7000 voters, contributing to higher voter turnout and campaign success."
                            description2="Established Efficient Data Management Systems for Targeted Outreach:
                            Utilized NPGVan and Scale to Win to create comprehensive turf and phone/text databases, optimizing voter targeting and outreach efforts.
                            Managed and updated databases, ensuring accurate voter information and effective outreach."
                            url={will}
                            startDate="JULY 2022"
                            endDate="DECEMBER 2022"
                            company="Will Snyder for Michigan's 87th State House District" 
                            skills="Political Campaigns, Campaign Strategy, Voter Engagement and Turnout, Canvassing and Text Banking Management"/>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center px-4">
                    <div className="point"></div>
                    <div className="line"></div>
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
                        <div className="text-xs text-left font-light pl-2 lg:text-base">JULY 2022 - DECEMBER 2022</div>
                        <div className="text-base font-bold text-center md:text-lg lg:text-xl">Field Director</div>
                        <div className="text-xs font-normal text-right pr-2 italic md:text-sm lg:text-lg">Terry Sabo for Michigan's 32nd State Senate District </div>
                        <PopUp title="Field Director"
                            description1="Achieved Remarkable Performance in a Challenging State Senate Race: 
                            Demonstrated exceptional campaign skills in the Terry Sabo State Senate 32nd race, achieving 47% support in the November 8th election despite initial projections. 
                            Mobilized an extensive campaign, knocking on over 20,000 doors, and engaging in text banking with 200,000 voters, contributing significantly to the narrow margin of the race."
                            description2="Led Successful Volunteer Canvas Launches: Spearheaded volunteer canvas launches, mobilizing supporters and amplifying outreach efforts. Provided proper training and guidance to volunteers, resulting in efficient canvassing operations and overall campaign success."
                            url={terry}
                            startDate="JULY 2022"
                            endDate="DECEMBER 2022"
                            company="Terry Sabo for Michigan's 32nd State Senate District" 
                            skills="Political Campaigns, Event Management"/>
                    </div>
                </div>
            </div>
            <div className="flex inline-flex">
                <div className=" text-center w-1/2">
                    <div className="experience rounded-bl-lg rounded-tl-lg rounded-tr-sm rounded-br-sm">
                    <div className="text-xs text-left font-light pl-2 lg:text-base">MAY 2022 - SEPTEMBER 2022</div>
                        <div className="text-base font-bold text-center md:text-lg lg:text-xl">West Michigan Regional Lead</div>
                        <div className="text-xs font-normal text-right pr-2 italic md:text-sm lg:text-lg">Rise</div>
                        <PopUp title="West Michigan Regional Lead"
                            description1="Promoted Civic Engagement and Voter Registration Among Young Adults: Served as West Michigan Regional Lead for Risefree.org, assisting 20,000 young adults aged 18-22 in voter registration. Advocated for affordable college and supported President Biden's student loan forgiveness initiative, empowering young voters and advancing important policy goals."
                            description2="Mentored and Managed a Team of Fellows for Enhanced Outreach: Recruited and hired dedicated fellows, fostering a highly motivated team focused on outreach measures. Conducted weekly meetings to provide guidance and support, enabling fellows to excel in their roles and contribute effectively to outreach efforts."
                            description3="Provided Expert Insights for Effective Outreach and Marketing Strategies: Collaborated with the State Director, offering valuable advice on impactful outreach and marketing efforts. Contributed to Team Michigan's success through innovative strategies that resonated with voters and strengthened campaign impact."
                            url={rise}
                            startDate="MAY 2022"
                            endDate="SEPTEMBER 2022"
                            company="Rise" 
                            skills="Civic Engagement, Voter Registration, Outreach and Marketing Strategy"/>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center px-4">
                    <div className="point"></div>
                    <div className="line"></div>
                </div>
                <div className="text-center w-1/2"></div>
            </div>
        </div>
    )
}

export default Timeline; 