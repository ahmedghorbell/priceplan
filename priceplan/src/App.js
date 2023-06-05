import './App.css';
import Card from './components/cards/Card';
import Navigation from './components/navigation/Navigation';
import Title from './components/title/Title';
import { UilRocket,UilStar,UilLightbulbAlt,UilBoltAlt    } from '@iconscout/react-unicons'
import Footer from './components/footer/Footer';
import Carousels from './components/carousel/Carousels'


function App() {
  const handleprice = () => {
    alert(`Do you really want to purchase this plan ?`);
  };
  return (
    <div className="App">
      <div className='navi'> <Navigation /></div>
      <div className='title'> <Title /></div>
      <div className='cartes'>
        <Card handleprice={handleprice} title="BASIC" level="For Begginers" icon={<UilStar/>}  price={39} empty1="24/7 Gym Access" empty2="Access to 2 Classes per week" >
        </Card>
        <Card handleprice={handleprice} title="STANDARD" level="Recommended" icon={<UilBoltAlt/>} price={59} empty1="24/7 Gym Access" empty2="Access to 4 Classes per week"
        empty3="Access to Challenges">
          
        </Card>
        <Card handleprice={handleprice} title="PREMIUM" level="For Serious" icon={<UilLightbulbAlt/>}  price={79} empty1="24/7 Gym Access" empty2="Unlimited Access to Classes"
        empty3="Access to Challenges" empty4="Access to Gym's Forum">
        </Card>
        <Card handleprice={handleprice} title="SPECIAL" level="The Best Will Do" icon={<UilRocket/>}  price={99} empty1="24/7 Gym Access" empty2="Unlimited Access to Classes"
        empty3="Access to Challenges" empty4="Access to Gym's Forum" empty5="Personnal Training" >
        </Card>
      </div>
      <div className='cars'><Carousels /></div>
      <div className='bot'><Footer /></div>
    </div>
  );
}

export default App;


