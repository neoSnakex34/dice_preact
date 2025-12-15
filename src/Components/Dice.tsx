import getRandomIntInclusive from "../utils/random";

interface DiceProps {
    count: number;
    setCount: (count: number) => void;
    faces: number;
    src: string;
}



const Dice = ({ count, setCount, faces, src }: DiceProps) => {

    const decrement = () => { count > 1 ? setCount(count - 1) : setCount(0) };
    const increment = () => { setCount(count + 1) };

    const toss = (faces: number, times: number) => {
        if (count === 0) return ''; 
        const result = [];
        for (let i = 0; i < times; i++) {
            result.push(getRandomIntInclusive(1, faces));
        }
        setCount(0);
        return result.join(', ');
       
    }

    return (
        <>
        <div className="flex flex-col gap-4 border-b-2 pb-10  items-center justify-between mx-auto">
            <h2 className="mt-4 font-bold">d{faces}</h2>
            <h3 className="mb-2 -mt-3 text-sm">[1,{faces}]</h3>
            <img src={src} alt={`d${faces}`} className="w-38 h-auto lg:w-40 lg:h-40 md:w-25 md:h-25  mb-2"/>
            <div class="flex flex-row gap-3 items-center justify-center">

                <button className="font-bold btn btn-error btn-circle btn-lg" onClick={decrement}>-</button>
                <span className='text-lg'>{count}</span>
                
                <button className="btn btn-success btn-circle btn-lg" onClick={() => setCount(count + 1)}>+</button>
            </div>
                <div class="flex flex-col gap-2">

                <button className="btn btn-sm btn-base-100 font-bold" onClick={() => setCount(0)}>reset</button>
                <button className="font-bold btn btn-info" 
                    onClick={() => alert(`d${faces}: ${toss(faces, count)}`)}
                >TOSS</button>
                </div>
            </div>
        </>
    )
};

export default Dice;