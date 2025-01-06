import {useState} from "react";

const Team = () => {
    const [team, setTeam] = useState([]);

    return (
        <>
            <h2>Team Strength: 0</h2>
            <h2>Team Agility: 0</h2>
            <h2>Team</h2>
            <ul>
                {team.map((fighter, index) => (
                    <li key={index}>{fighter.name}</li>
                ))}
            </ul>
        </>
    );
};

export default Team;