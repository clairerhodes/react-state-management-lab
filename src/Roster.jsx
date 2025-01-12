const Roster = () => {
    // state variable for fighter roster
    const [zombieFighters, setZombieFighters] = useState(
        [
            {
              name: 'Survivor',
              price: 12,
              strength: 6,
              agility: 4,
              img: 'https://via.placeholder.com/150/92c952',
            },
            {
              name: 'Scavenger',
              price: 10,
              strength: 5,
              agility: 5,
              img: 'https://via.placeholder.com/150/771796',
            },
            {
              name: 'Shadow',
              price: 18,
              strength: 7,
              agility: 8,
              img: 'https://via.placeholder.com/150/24f355',
            },
            {
              name: 'Tracker',
              price: 14,
              strength: 7,
              agility: 6,
              img: 'https://via.placeholder.com/150/d32776',
            },
            {
              name: 'Sharpshooter',
              price: 20,
              strength: 6,
              agility: 8,
              img: 'https://via.placeholder.com/150/1ee8a4',
            },
            {
              name: 'Medic',
              price: 15,
              strength: 5,
              agility: 7,
              img: 'https://via.placeholder.com/150/66b7d2',
            },
            {
              name: 'Engineer',
              price: 16,
              strength: 6,
              agility: 5,
              img: 'https://via.placeholder.com/150/56acb2',
            },
            {
              name: 'Brawler',
              price: 11,
              strength: 8,
              agility: 3,
              img: 'https://via.placeholder.com/150/8985dc',
            },
            {
              name: 'Infiltrator',
              price: 17,
              strength: 5,
              agility: 9,
              img: 'https://via.placeholder.com/150/392537',
            },
            {
              name: 'Leader',
              price: 22,
              strength: 7,
              agility: 6,
              img: 'https://via.placeholder.com/150/602b9e',
            },
          ]
    );

    // add fighter to team
    const handleAddFighter = () => {}

    return (
        <>
            <div className="zombieFighters">
                {zombieFighters.map((fighter, index) => (
                    <div className="fighterCard" key={index}>
                        <ul>
                            <li>
                                <img src={fighter.img} alt={fighter.name} />
                            </li>
                            <li>{fighter.name}</li>
                            <li>Price: {fighter.price}</li>
                            <li>Strength: {fighter.strength}</li>
                            <li>Agility: {fighter.agility}</li>
                        </ul>
                        <button onClick={handleAddFighter}>Add</button>
                    </div>
                ))};
            </div>
        </>
    );
};

export default Roster;