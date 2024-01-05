// 커스텀훅 useDiary를 만듭니다. 직접 프로그래밍한 함수가 리액트 훅스
// 라는 것을 나타내기 위해 use앞에 꼭 붙이고. 고유데이터를 구분하는 id를 
// 인풋값으로 받습니다.


import { useContext, useEffect, useState } from "react";
import {DiaryStateContext} from "../App";
import { useNavigate } from "react-router-dom";
const useDiary = (id) => {
    const data = useContext(DiaryStateContext);
    const [diary, setDiary] = useState();
    const navigate = useNavigate();
    // useEffect를 이용해 id나 data값이 바뀔때마다 일기 데이터에서 id
    // 값과 일치하는 일기를 찾아 해당 일기 데이터를 업데이트 합니다.
    useEffect(()=>{
        const matchDiary = data.find((it)=> String(it.id) === String(id));
        if (matchDiary) {
            setDiary(matchDiary)
        }
        else{
            alert("일기 데이터가 존재하지 않습니다")
            navigate("/", {replace:true});
        }
    },[id, data])

    return diary;
}
export default useDiary;