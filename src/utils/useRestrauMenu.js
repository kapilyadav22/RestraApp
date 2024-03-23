import { useState, useEffect } from 'react'
import { menuUrl } from '../components/urlConstants'

const useRestrauMenu = (resId) => {

    const [restrauMenu, setrestrauMenu] = useState(null);

    useEffect(() => {
        getRestraurants();
    }, []);

    const getRestraurants = async () => {
        try {
            const data = await fetch(menuUrl + resId);
            const json = await data.json();
            setrestrauMenu(json.data);
        }
        catch (error) {
            console.log(error);
        }
    };

  return restrauMenu;
}

export {useRestrauMenu};