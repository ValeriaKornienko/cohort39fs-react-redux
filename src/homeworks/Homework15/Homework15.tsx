import Button from "../../components/Button/Button";
import Counter from "../../components/Counter/Counter";
import Input from "../../components/Input/Input";

import { HomeworkWrapper } from "./styles";


function Homework15 () {
    return (<HomeworkWrapper>
    <Input id="name" name="Name" placeholder="Enter your name" label="Name"/>
    {/* <Counter count={0} onPlus={() => {}} onMinus={() => {}}/> */}
    <Button name="Submit changes"/>
    </HomeworkWrapper>)
}

export default Homework15;