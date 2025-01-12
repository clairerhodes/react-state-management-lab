// src/App.jsx
import { useState } from 'react'
import './App.css'

const App = () => {

// create new state variable named team and money
const [team, setTeam] = useState([]);
const [money, setMoney] = useState(100);
const [totalAgility, setTotalAgility] = useState(0);
const [totalStrength, setTotalStrength] = useState(0);
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
const handleAddFighter = (newFighter) => {
  if (money >= newFighter.price) {
    newFighter.id = team.length;
    setMoney(money - newFighter.price);
    setTeam([...team, newFighter]);
  } else {
    console.log("Ya broke, get more money!");
  }
};

// remove fighter from team
const handleRemoveFighter = (index) => {
  setMoney(money + team[index].price);
  setTeam(team.filter((_, i) => i !== index));
};

// functions for total strength and agility
const totalStr = (total, fighter) => {
  return total + fighter.strength;
};

const totalAgi = (total, fighter) => {
  return total + fighter.agility;
};

// total score
const totalScore = (score) => {
  if (score === "str") {
    return team.reduce(totalStr, 0);
  } else if (score === "agi") {
    return team.reduce(totalAgi, 0);
  }
};

  return (
    <>
      <h1>Zombie Fighters</h1>
      <h2>Money: {money}</h2>
      <h2>Team Strength: {totalScore("str")}</h2>
      <h2>Team Agility: {totalScore("agi")}</h2>
      <h2>Team</h2>
      <ul>
        {team.length ? "" : <li>Pick your team!</li>}
        {team.map((fighter, index) => (
          <div className="fighterCard" key={index}>
            <li>
              <img src={fighter.img} alt={fighter.name} />
            </li>
            <li>{fighter.name}</li>
            <li>Price: {fighter.price}</li>
            <li>Strength: {fighter.strength}</li>
            <li>Agility: {fighter.agility}</li>
            <button onClick={() => handleRemoveFighter(index)}>Remove</button>
          </div>
        ))}
      </ul>
      <h2>Fighters</h2>
        <ul>
          {zombieFighters.map((fighter, index) => {
            <div className="fighterCard" key={index}>
              <li>
                <img src={fighter.img} alt={fighter.name} />
              </li>
              <li>{fighter.name}</li>
              <li>Price: {fighter.price}</li>
              <li>Strength: {fighter.strength}</li>
              <li>Agility: {fighter.agility}</li>
              <button onClick={() => handleAddFighter(fighter)}>Add</button>
            </div>
          })}
        </ul>
    </>
  );
};

export default App;

