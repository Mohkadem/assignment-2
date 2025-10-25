// Components
import Header from "./components/Header";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Steps from "./components/Steps";
import Contact from "./components/Contact";
// Style
import "./index.css";
// Main code
const App = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Work />
            <Steps />
            <Contact />
        </div>
    );
};

export default App;
