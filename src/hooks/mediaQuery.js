import { createContext, useEffect, useState } from 'react';

export const MediaQueryContext = createContext({
    mobile: null,
    // active: null,
    // navOpen: null,
    // toggleNav: () => { },
    // toggleActive: (activeId) => { },
    // contents: [],
});

export default function MediaQueryContextProvider(props) {
    const mobile = matchMedia('(max-width: 950px)');

    const [isMobile, setMobile] = useState(mobile.matches);

    // Update state on window resize
    useEffect(() => {
        function handleScreenChange() {
            setMobile(mobile.matches);
        }
        mobile.addEventListener('change', handleScreenChange);
        return () => {
            mobile.removeEventListener('change', handleScreenChange);
        };
    });

    return (
        <MediaQueryContext.Provider
            value={{ isMobile }} >
            {props.children}
        </MediaQueryContext.Provider>
    );
}