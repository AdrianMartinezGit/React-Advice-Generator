import Advice from "../Interfaces/Interface";

const getData = async () => {
    const promise = await fetch(`https://api.adviceslip.com/advice`);
    const data: Advice = await promise.json();

    console.log(data);

    return data;
}

export default getData;