import { useDispatch } from "react-redux";
import Counter from "../../components/Counter/Counter";


import { PageWrapper } from "./styles";
import { CounterSliceSelectors, CounterSliceActions } from "../../store/redux/counter/counterSlice";
import { useAppSelector } from "../../store/hooks";

function Lesson16 () {
const dispach = useDispatch()
const count = useAppSelector(CounterSliceSelectors.count)

const onPlus = () => {
    dispach(CounterSliceActions.plus())
}
const onMinus = () => {
    dispach(CounterSliceActions.minus())
    
}
const onMultiply = () => {
    dispach(CounterSliceActions.multiply(3))
}
const onDived = ()=>{
    dispach(CounterSliceActions.dived(2 ))
}

    return <PageWrapper>
        <Counter count={count} onPlus={onPlus} onMinus={onMinus} onDived={onDived} onMultiply={onMultiply}/>
    </PageWrapper>
}

export default Lesson16;