import logo from './logo.svg';
import './App.css';

var currentTime = new Date().getHours();

var darkMode = "white";

if (currentTime >= 20 || currentTime <= 7) {
  darkMode = "darkBlue"
  
}
function App() {
  return (
    <div style ={{ backgroundColor : darkMode, width: 600 }}> 
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
    </div>
  );
}

export default App;
