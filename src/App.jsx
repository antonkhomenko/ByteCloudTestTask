import './App.css';
import Range from "./components/range/range.jsx";

const App = () => {
    return (
        <div className='content'>
            <Range title='Storage'/>
            <Range title='Transfer'/>
        </div>
    );
};

export default App;