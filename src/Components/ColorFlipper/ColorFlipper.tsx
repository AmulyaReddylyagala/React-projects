import { useEffect, useRef, useState } from 'react'
import './ColorFlipper.css'
enum TABS {
    SIMPLE = 'SIMPLE',
    HEX = 'HEX'
}
export default function ColorFlipper() {
    const colors: string[] = ['aqua', 'red', 'pink', 'blue', 'orange', 'yellow']

    const [color, setColor] = useState<string>('yellow');
    const [selectedTab, setSelectedTab] = useState<TABS>(TABS.SIMPLE);
    const isFirstTimeRender = useRef<boolean>(true);


    // useEffect(() => {
    //     if (!isFirstTimeRender.current)
    //         ChangeColor()
    //     isFirstTimeRender.current = false;
    // }, [selectedTab])

    function ChangeColor(tab: TABS) {
        let ind = Math.floor(Math.random() * (colors.length - 1));
        if (tab == TABS.HEX)
            setColor(getRandomHexColor())
        else
            setColor(colors[ind])
    }

    async function changeTabState(tab: TABS) {
        setSelectedTab(tab);
        ChangeColor(tab)
        // ChangeColor();
    }

    function getRandomHexColor() {
        let hexcolor = '#'
        for (let i = 0; i <= 5; i++) {
            const num = Math.floor(Math.random() * 5)
            hexcolor += num;
        }
        return hexcolor;
    }

    function getStyle() {
        return { 'backgroundColor': color };
    }

    return (
        <div className='main'>
            <div className="nav">
                <h2>Color Flipper</h2>
                <div className="links">
                    <h3 className={selectedTab == TABS.SIMPLE ? 'active' : ''}
                        onClick={() => changeTabState(TABS.SIMPLE)}>Simple</h3>
                    <h3 className={selectedTab == TABS.HEX ? 'active' : ''}
                        onClick={() => changeTabState(TABS.HEX)}>Hex</h3>
                </div>
            </div>
            <div className="container" style={getStyle()} >
                <div className="color">
                    <h2>BackGroundColor:{color}</h2>
                    <button onClick={() => ChangeColor(selectedTab)}>Change color</button>
                </div>
            </div>
        </div>
    )
}



