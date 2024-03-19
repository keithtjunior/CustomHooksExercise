import { useState } from "react";
import {v1 as uuid} from "uuid";
import axios from "axios";

// toggle flip state hook
export const useFlip = () => {
    const [value, setValue] = useState(true);

    const flip = () => setValue(val => !val);
    return [value, flip];
}

// fetch data using axios hook
export const useAxios = (url) => {
    const [items, setItems] = useState([]);

    const fetchItems = async (subdir=null) => {
        if(typeof subdir === 'string') url = `${url}/${subdir}`;
        await axios.get(url)
        .then(res => setItems(items => [...items, { ...res.data, id: uuid() }]))
        .catch(err => console.log(err));
    }
    return [items, fetchItems];
}