import { useState } from "preact/hooks";
import Dice from "./Dice";


const Main = () => {
	const [d4, setD4] = useState(0);
	const [d6, setD6] = useState(0);
	const [d8, setD8] = useState(0);
	const [d10, setD10] = useState(0);
	const [d12, setD12] = useState(0);
	const [d20, setD20] = useState(0);
	const [d100, setD100] = useState(0);

    return (
        <>
            <h1 class="w-1/2 lg:w-1/4 md:w-2/3 mx-auto text-center font-bold text-2xl mt-4 bg-accent p-3 rounded-2xl">Select Dice and Toss</h1>
            <Dice count={d4} setCount={setD4} faces={4} src="/D4.png" />
			<Dice count={d6} setCount={setD6} faces={6} src="/D6.png" />
			<Dice count={d8} setCount={setD8} faces={8} src="/D8.png" />
			<Dice count={d10} setCount={setD10} faces={10} src="/D10.png" />
			<Dice count={d12} setCount={setD12} faces={12} src="/D12.png" />
			<Dice count={d20} setCount={setD20} faces={20} src="/D20.png" />
			<Dice count={d100} setCount={setD100} faces={100} src="/D100.png" />
        </>
    );
};

export default Main;