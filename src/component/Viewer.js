import "./Viewer.css";
import {emotionList,setPageTitle } from "../util";
import { useEffect } from "react";
//상세페이지 뷰어는 부모컴포넌트에서 content와 이모티콘데이터를 받습니다.
const Viewer = ({content, emotionId}) => {
    const emotionItem = 
    emotionList.find((it) => it.id === emotionId);
    console.log(emotionId);
    useEffect(() => {
        setPageTitle("오늘의 감정 페이지");
      },[]);
    return <div className="Viewer">
        <section>
            <h4>오늘의 감정</h4>
            <div className={[
                "emotion_img_wrapper",
                `emotion_img_wrapper_${emotionId}`
            ].join(" ")}>
                <img alt={emotionItem.name} src={emotionItem.img} />
                <div className="emotion_descript">{emotionItem.name}</div>
            </div>
        </section>
        <section>
            <h4>오늘의 일기</h4>
            <div className="content_wrapper">
                <p>{content}</p>
            </div>
        </section>
    </div>
}

export default Viewer;