import './App.css';
import Mainpage from './Pages/Mainpage';
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <div>
      <Mainpage/>
      <Analytics/>
    </div>
  );
}

export default App;
