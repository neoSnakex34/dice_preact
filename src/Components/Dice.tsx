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
        return result.join(', ');
       
    }

    return (
        <>
        <div className="flex items-center justify-between mx-auto px-4 lg:px-10 md:px-6">
            <img src={src} alt={`d${faces}`} className="w-38 h-auto lg:w-40 lg:h-40 md:w-25 md:h-25  mb-2"/>
            <div>

                <button className="btn btn-sm btn-base-100 font-bold" onClick={() => setCount(0)}>reset</button>
                <button className="font-bold btn btn-error btn-circle btn-lg" onClick={decrement}>-</button>
                <span className='text-lg'>{count}</span>
                
                <button className="btn btn-success btn-circle btn-lg" onClick={() => setCount(count + 1)}>+</button>
                <button className="font-bold btn btn-info  btn-lg" 
                    onClick={() => alert(`d${faces}: ${toss(faces, count)}`)}
                >TOSS</button>
            </div>
            </div>
        </>
    )
};

export default Dice;