export interface ProjectsListProps {
  title: string;
  date: string;
  stack: string;
  url: string;
  github: string;
  function: string;
  description: string;
  imageList: string[];
}

export const projectsList : {[key: string] : ProjectsListProps}  = {
  Emotipop : {
    title: "Emotipop",
    date: '2021.11 - 2021.12 (4인 팀프로젝트)',
    description: "복잡한 상황에서의 N빵 계산을 도와 누가 누구에게 얼마를 보내야 하는지 계산해 주는 모바일 앱입니다. 동아리 활동을 하던 당시 여러 모임에서 N빵 계산 시 어려움을 겪은 몇몇 상황에서 아이디어를 얻어 개발하였습니다. 이미 Android Native로 개발을 완료한 프로젝트였지만, React Native의 학습을 위해 이를 다시 React Native로 개발하였습니다. 이전 프로젝트와 달리 이번에는 전반적인 로직과 UI & UX를 개선하고 실제로 스토어에 출시까지 했다는 점에서 의미가 있습니다. 이제는 마음만 먹으면 모바일 앱도 개발하고 출시할 수 있다는 자신감을 준 프로젝트입니다.",
    stack: 'React Native, Recoil, TypeScript',
    url: 'www.naver.com',
    function: '로그인, 달력, 차트',
    github: 'www.naver.com',
    imageList: [
      'https://velog.velcdn.com/images/jungjaedev/post/967d6ec8-6ff7-4dce-992e-252b27d0f45f/image.webp',
      'https://velog.velcdn.com/images/jungjaedev/post/711c40e3-00e6-4ea8-ab3a-48d4e80c0dba/image.webp',
      'https://velog.velcdn.com/images/jungjaedev/post/e702280c-f777-4a44-b7c3-281c6f0e2cff/image.webp',
      'https://velog.velcdn.com/images/jungjaedev/post/28b01b3b-d1a2-4715-86c5-da9207c2f8cd/image.webp',
      'https://velog.velcdn.com/images/jungjaedev/post/0c7d66da-b0bb-4b67-8bcc-e8bf31e03bb3/image.webp',
      'https://velog.velcdn.com/images/jungjaedev/post/64e8f779-ebdd-45a1-9b13-ce0ab6c1bbe3/image.webp'
    ]
  }
}