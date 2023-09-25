import navValues from "@/helpers/navValues";
import Banner from "./banner";
import React, { useCallback } from "react";
import { useState } from "react";
import ComponentPicker from "./componentPicker";

const navigationContext = React.createContext(navValues.home);

//this has children in the <Banner> tag
const App = () => {
    const navigate = useCallback(
        (navTo, param) => setNav({current: navTo, param, navigate}),
        []
    );

    const [nav, setNav] = useState({current: navValues.home, navigate});
    return (
        <>
            <navigationContext.Provider value={nav}>
                <Banner>
                    <div>
                        Providing Pizzas all over the country!
                    </div>
                </Banner>
                <ComponentPicker currentNavLocation={nav.current} />
            </navigationContext.Provider>
        </>
    );
};

export {navigationContext};
export default App;