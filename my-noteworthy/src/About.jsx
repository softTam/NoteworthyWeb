import MemberCard from "./MemberCard";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

function About() {
    const members = [
        {
            name: "Maya Rotenberg",
            description: "Tenor 1",
            image: "images/maya.jpg",
            info:
            {
                pronouns: "she/hers",
                majors: "Data Science",
                minors: "None",
                semBerkeley: "6th",
                semNoteworthy: "2nd",
                interests: "t1s, poke parlor before they removed the party discount, nilah sejuani, r/dataisbeautiful, tartaglia, peets coffee, open toed shoes, and my BRITA",
                moreInfo: "So I legit can’t think of anything to write here so I’ll just provide this useful data because I stan dataframes and data science and data and pandas (animal) and python (animal) and machines (animal) and learning (animal). https://docs.google.com/spreadsheets/d/15TmBXWZ5PRe1Dr2sG6V9TuS_vVeXQvUHj5EKHAkTGDY"
            }
        },
        {
            name: "Amanda Sakimura",
            description: "Tenor 1",
            image: "images/avatar.png",
            info:
            {
                pronouns: "she/hers",
                majors: "Data Science",
                minors: "None",
                semBerkeley: "6th",
                semNoteworthy: "2nd",
                interests: "t1s, poke parlor before they removed the party discount, nilah sejuani, r/dataisbeautiful, tartaglia, peets coffee, open toed shoes, and my BRITA",
                moreInfo: "So I legit can’t think of anything to write here so I’ll just provide this useful data because I stan dataframes and data science and data and pandas (animal) and python (animal) and machines (animal) and learning (animal). https://docs.google.com/spreadsheets/d/15TmBXWZ5PRe1Dr2sG6V9TuS_vVeXQvUHj5EKHAkTGDY"
            }
        },
        {
            name: "Alex Pease",
            description: "Bass",
            image: "images/alex.jpg",
            info:
            {
                pronouns: "she/hers",
                majors: "Data Science",
                minors: "None",
                semBerkeley: "6th",
                semNoteworthy: "2nd",
                interests: "t1s, poke parlor before they removed the party discount, nilah sejuani, r/dataisbeautiful, tartaglia, peets coffee, open toed shoes, and my BRITA",
                moreInfo: "So I legit can’t think of anything to write here so I’ll just provide this useful data because I stan dataframes and data science and data and pandas (animal) and python (animal) and machines (animal) and learning (animal). https://docs.google.com/spreadsheets/d/15TmBXWZ5PRe1Dr2sG6V9TuS_vVeXQvUHj5EKHAkTGDY"
            }
        },
        {
            name: "Bhaskar Roberts",
            description: "Tenor 2",
            image: "images/bhaskar.jpg",
            info:
            {
                pronouns: "she/hers",
                majors: "Data Science",
                minors: "None",
                semBerkeley: "6th",
                semNoteworthy: "2nd",
                interests: "t1s, poke parlor before they removed the party discount, nilah sejuani, r/dataisbeautiful, tartaglia, peets coffee, open toed shoes, and my BRITA",
                moreInfo: "So I legit can’t think of anything to write here so I’ll just provide this useful data because I stan dataframes and data science and data and pandas (animal) and python (animal) and machines (animal) and learning (animal). https://docs.google.com/spreadsheets/d/15TmBXWZ5PRe1Dr2sG6V9TuS_vVeXQvUHj5EKHAkTGDY"
            }
        },
        {
            name: "Ellington Chen",
            description: "Baritone",
            image: "images/ellington.jpg",
            info:
            {
                pronouns: "she/hers",
                majors: "Data Science",
                minors: "None",
                semBerkeley: "6th",
                semNoteworthy: "2nd",
                interests: "t1s, poke parlor before they removed the party discount, nilah sejuani, r/dataisbeautiful, tartaglia, peets coffee, open toed shoes, and my BRITA",
                moreInfo: "So I legit can’t think of anything to write here so I’ll just provide this useful data because I stan dataframes and data science and data and pandas (animal) and python (animal) and machines (animal) and learning (animal). https://docs.google.com/spreadsheets/d/15TmBXWZ5PRe1Dr2sG6V9TuS_vVeXQvUHj5EKHAkTGDY"
            }
        },
        {
            name: "Justin Wong",
            description: "Baritone",
            image: "images/justin.jpg",
            info:
            {
                pronouns: "she/hers",
                majors: "Data Science",
                minors: "None",
                semBerkeley: "6th",
                semNoteworthy: "2nd",
                interests: "t1s, poke parlor before they removed the party discount, nilah sejuani, r/dataisbeautiful, tartaglia, peets coffee, open toed shoes, and my BRITA",
                moreInfo: "So I legit can’t think of anything to write here so I’ll just provide this useful data because I stan dataframes and data science and data and pandas (animal) and python (animal) and machines (animal) and learning (animal). https://docs.google.com/spreadsheets/d/15TmBXWZ5PRe1Dr2sG6V9TuS_vVeXQvUHj5EKHAkTGDY"
            }
        },
        {
            name: "Jerry",
            description: "Baritone",
            image: "images/jerry.jpg",
            info:
            {
                pronouns: "she/hers",
                majors: "Data Science",
                minors: "None",
                semBerkeley: "6th",
                semNoteworthy: "2nd",
                interests: "t1s, poke parlor before they removed the party discount, nilah sejuani, r/dataisbeautiful, tartaglia, peets coffee, open toed shoes, and my BRITA",
                moreInfo: "So I legit can’t think of anything to write here so I’ll just provide this useful data because I stan dataframes and data science and data and pandas (animal) and python (animal) and machines (animal) and learning (animal). https://docs.google.com/spreadsheets/d/15TmBXWZ5PRe1Dr2sG6V9TuS_vVeXQvUHj5EKHAkTGDY"
            }
        },
        {
            name: "Athena Liu",
            description: "Tenor 1",
            image: "images/athena.jpg",
            info:
            {
                pronouns: "she/hers",
                majors: "Data Science",
                minors: "None",
                semBerkeley: "6th",
                semNoteworthy: "2nd",
                interests: "t1s, poke parlor before they removed the party discount, nilah sejuani, r/dataisbeautiful, tartaglia, peets coffee, open toed shoes, and my BRITA",
                moreInfo: "So I legit can’t think of anything to write here so I’ll just provide this useful data because I stan dataframes and data science and data and pandas (animal) and python (animal) and machines (animal) and learning (animal). https://docs.google.com/spreadsheets/d/15TmBXWZ5PRe1Dr2sG6V9TuS_vVeXQvUHj5EKHAkTGDY"
            }
        },
        {
            name: "Stephanus Yang",
            description: "Tenor 2",
            image: "images/stephanus.jpg",
            info:
            {
                pronouns: "she/hers",
                majors: "Data Science",
                minors: "None",
                semBerkeley: "6th",
                semNoteworthy: "2nd",
                interests: "t1s, poke parlor before they removed the party discount, nilah sejuani, r/dataisbeautiful, tartaglia, peets coffee, open toed shoes, and my BRITA",
                moreInfo: "So I legit can’t think of anything to write here so I’ll just provide this useful data because I stan dataframes and data science and data and pandas (animal) and python (animal) and machines (animal) and learning (animal). https://docs.google.com/spreadsheets/d/15TmBXWZ5PRe1Dr2sG6V9TuS_vVeXQvUHj5EKHAkTGDY"
            }
        }

    ]
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div><NavBar /></div>
            <div style={{ marginTop: '50px' }}>
                <h1 className="text-6xl font-bold">Members</h1>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', width: '80%', margin: '1rem auto', backgroundColor: 'rgb(119, 162, 237)' }}>
                {members.map((member, index) => (
                    <MemberCard key={index} name={member.name} description={member.description} image={member.image} info={member.info} style={{ flex: '0 0 30%', margin: '1rem' }} />
                ))}
            </div>
        </div>
    );
}

export default About;