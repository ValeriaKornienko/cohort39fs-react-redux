import { useDispatch } from "react-redux";
import Feedback from "../../components/Feedback/Feedback";

import { PageWrapper } from "./styles";
import { FeedbackSliceActions, FeedbackSliceSelectors } from "../../store/redux/feedback/feedbackSlice";
import { useAppSelector } from "../../store/hooks";

function Homework16 () {
    const dispach = useDispatch()
    const like = useAppSelector(FeedbackSliceSelectors.like)
    const dislike = useAppSelector(FeedbackSliceSelectors.dislike)
    
    const onLike = () => {
        dispach(FeedbackSliceActions.like())
    }
    const onDislike = () => {
        dispach(FeedbackSliceActions.dislike())
        
    }
    const resetResults = () => {
        dispach(FeedbackSliceActions.reset())
    }
    
        return <PageWrapper>
            <Feedback like={like} dislike={dislike} onLike={onLike} onDislike={onDislike} resetResults={resetResults}/>
        </PageWrapper>
    }
    
    export default Homework16;
