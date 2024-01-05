import emotion1 from "./img/emotion1.png";
import emotion2 from "./img/emotion2.png";
import emotion3 from "./img/emotion3.png";
import emotion4 from "./img/emotion4.png";
import emotion5 from "./img/emotion5.png";

// 내가 선택한 경우(케이스)마다 이모션 이모티콘이
// 선택될 수 있게 컴포넌트를 만들어서 스위치 구문 코딩

export const getEmotionImgById = (emotionId) => {
  const targetEmotionId = String(emotionId);
  switch (targetEmotionId) {
    case "1":
      return emotion1;
    case "2":
      return emotion2;
    case "3":
      return emotion3;
    case "4":
      return emotion4;
    case "5":
      return emotion5;
    default:
      return null;
  }
};

export const getFormattedDate = (targetDate) => {
  let year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1;
  let date = targetDate.getDate();
  if (month <10) {
    month = `0${month}`;
  }
  if (date <10) {
    date = `0${date}`;
  }
  return `${year}-${month}-${date}`;
};

export const emotionList = [
  {
    id: 1,
    name: "완전좋음",
    img: getEmotionImgById(1),
  },
  {
    id: 2,
    name: "좋음",
    img: getEmotionImgById(2),
  },
  {
    id: 3,
    name: "그럭저럭",
    img: getEmotionImgById(3),
  },
  {
    id: 4,
    name: "나쁨",
    img: getEmotionImgById(4),
  },
  {
    id: 5,
    name: "끔찍함",
    img: getEmotionImgById(5),
  },
]

export const getMonthRangeByDate = (date) => {
  const beginTimeStamp = 
  new Date(date.getFullYear(), date.getMonth(), 1).getTime();
  const endTimeStamp = new Date(
    date.getFullYear(),
    date.getMonth() + 1, // 이 부분은 다음달을 나타 냅니다.
    0, 23, 59, 59).getTime(); // 이거 헷갈리죠? 23시 59분 59초입니다
    return {beginTimeStamp, endTimeStamp}
}

// getElementByTagName는 인수로 전달한 태그를 전부 배열로 변환
// 인수로 title을 전달하니 페이지 제목을 설정하는 <head>의 <title>
// 태그를 불러옵니다.
// InnerText를 통해서 제목을 변경합니다.
export const setPageTitle = (title) => {
  const titleElement = document.getElementsByTagName("title")[0];
  titleElement.innerText = title;
}

