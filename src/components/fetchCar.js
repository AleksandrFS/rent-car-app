import axios from "axios";

const BASE_URL = 'https://652457fdea560a22a4e9c538.mockapi.io/advert';

export const getCars = async () => {
    const resulData = await axios.get(BASE_URL);
    console.log(resulData.data)
}