import './App.css';
import Profile from './Profile/Profile';
import imageIn from './mageInSrc.jpg';

function App() {
  const handleName = fullName => alert(fullName);
  return (
    <div className="App">
      <Profile  fullName ='React' bio='Props'  profession='Hooks' handleName={handleName} />
     <Profile> <img src={imageIn} alt='ff' style={{width: "50%"}}/> </Profile>
    </div>
  );
}

export default App;