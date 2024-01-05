// 세종류 버튼을 리액트 컴포넌트로 구현
// 버튼에 표시할 문자열 = text
// 버튼의 색상을 결정 = type
// 버튼 클릭 시 발생하는 이벤트핸들러 = onClick
// 버튼에 props로 전달되는 type에 따라 스타일을 달라지게 하려고 합니다.
import "./Button.css";
const Button = ({ text, type, onClick}) => {
    // 요소가 positive, negative인 배열에서 
    // 전달 type에 해당 요소가 있는지 includes 메서드로 확인
    // 오타 등의 이유로 전달 type이 사전에 정의된 값이 없는 경우
    // default 값을 변수 btn type에 저장합니다
    const btnType = 
    ["positive", "negative"].includes(type) ? type : "default";
    // 중괄호를 써서 복수의 데이터가 들어가는 객체 처리를 하였고
    // 대괄호를 써서 데이터의 배열처리를 하였습니다
    // props를 통해서 넘겨받은 type값을 기준으로 버튼의 이름을 
    // 지정하고 그 데이터처리를 배열로 복수데이터를 
    // 하나의 데이터 셋으로 처리한 것입니다
    // 만약에 오타 등의 이유로 type에 해당 값이 없다면 
    // default가 기본 값으로 설정됩니다
return <button className=
{["Button", `Button_${btnType}`].join(" ")} onClick={onClick}>
    {text}
    </button>;
};
// 아무런 type도 props로 전달되지 않을 때를 대비한 케이스를 지정합니다
// type 지정이 실패하면 default가 기본값으로 설정됩니다
Button.defaultProps = {
    type: "default",
};

export default Button;