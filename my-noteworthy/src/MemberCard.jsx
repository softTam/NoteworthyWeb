
import { useState } from 'react';
import './MemberCard.css';
import MemberInfo from './MemberInfo';
import Popup from 'reactjs-popup';

function MemberCard({name, description, image, info}) {
    const [showInfo, setShowInfo] = useState(false);

    const openPopup = () => {
        document.body.style.overflow = 'hidden'; // Disable scrolling on the page behind the popup
    };
    
    const closePopup = () => {
        document.body.style.overflow = 'auto'; // Enable scrolling on the page behind the popup
    };

    return (
        <>
        <Popup 
            onOpen={openPopup}
            onClose={closePopup}
            trigger= {
            <div 
            style={{ position: 'relative', height: '400px', width: '250px', backgroundColor: 'white', zIndex: showInfo ? 1 : 'auto', margin: '1rem' }}
            >
            <a href="#" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
                <img src={image} style={{ width: '100%', height: '80%', objectFit: 'cover' }} />
                <h3 style={{ fontSize: '1.5rem', color: 'darkblue', fontWeight: 'bold', position: "center"}}>{name} </h3>
                <h4 style={{ fontSize: '1.0rem', color: 'red', fontWeight: 'bold', fontStyle:'italic', position: "center"}}>{description}</h4>
            </a>
            </div>
            }
            position="center"
        >
                <div className='member-info' style={{ overflowY: 'scroll', maxHeight: '88vh' }}>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <div style={{ flex: '0 0 50%', padding: '5vh' }}>
                        <img src={image} style={{ width: '100%', height: '150%', objectFit: 'cover' }} /> {/* Increased height to 120% */}
                    </div>
                    <div style={{ flex: '0 0 50%', padding: '5vh' }}>
                        <h1 style={{ fontSize: '3rem', color: 'darkblue', textAlign: 'left', margin: '2rem', marginBottom: '0.1rem' }}>{name}</h1>
                        <h2 style={{ fontWeight: 'bold', color: 'red', fontStyle: 'italic', fontSize: '1.5rem', margin: '1rem', marginLeft: '8rem' }}>{description}</h2>
                        <h4 style={{ display: 'inline', fontWeight: 'bold' }}>Pronouns: </h4> <p style={{ display: 'inline' }}>{info.pronouns}</p><br />
                        <h4 style={{ display: 'inline', fontWeight: 'bold' }}>Major(s): </h4> <p style={{ display: 'inline' }}>{info.majors}</p><br />
                        <h4 style={{ display: 'inline', fontWeight: 'bold' }}>Minor(s): </h4> <p style={{ display: 'inline' }}>{info.minors}</p><br />
                        <h4 style={{ display: 'inline', fontWeight: 'bold' }}>Semester(s) at Berkeley: </h4> <p style={{ display: 'inline' }}>{info.semBerkeley}</p><br />
                        <h4 style={{ display: 'inline', fontWeight: 'bold' }}>Semester(s) at Noteworthy: </h4> <p style={{ display: 'inline' }}>{info.semNoteworthy}</p><br />
                        <h4 style={{ display: 'inline', fontWeight: 'bold' }}>Interests: </h4> <p style={{ display: 'inline' }}>{info.interests}</p><br />
                        <h4 style={{ display: 'inline', fontWeight: 'bold' }}>More about me: </h4> <p style={{ display: 'inline' }}>{info.moreInfo}</p><br />
                    </div>
                </div>
                </div>
        </Popup>
        </>
    );
    
}

export default MemberCard;