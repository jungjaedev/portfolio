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
    description: "<p>부트캠프에서 팀프로젝트로 진행한 <strong>모바일 다이어리 어플리케이션</strong>입니다. 유미의 세포들에서 아이디어를 받아 개발한 프로젝트 입니다.</p> <br /> <p>React Native로 개발하여 실제 <span style='color: red'>스토어에 출시</span>까지 했다는 점에서 의미가 있습니다. 팀원들과 소통, 협업하여 마음만 먹으면 모바일 앱도 개발하고 출시할 수 있다는 자신감을 준 프로젝트입니다.</p>",
    stack: 'React Native, Redux, Node.js, Express, AWS(Ec2, Rds, S3)',
    url: 'https://play.google.com/store/apps/details?id=com.dropTheCode.EmotiPop',
    function: '로그인, 일기 작성, 달력 페이지, 차트 페이지',
    github: 'https://github.com/codestates/EmotiPop',
    imageList: [
      'https://velog.velcdn.com/images/jungjaedev/post/76d0bc8b-8570-4574-90a4-f29beaaa380b/image.png',
      'https://velog.velcdn.com/images/jungjaedev/post/3e53c41b-f8d2-46c5-bafb-a208815c7db0/image.png',
      'https://velog.velcdn.com/images/jungjaedev/post/042e303d-8b5b-48fb-9002-b31b6f8c23a9/image.png',
      'https://velog.velcdn.com/images/jungjaedev/post/cc1be862-fd2c-4c0c-9fe0-3236e459bc8f/image.png'
    ]
  },
  TodayNews : {
    title: "TodayNews",
    date: '2022.09 (개인 프로젝트)',
    description: "<p><strong>OPEN API를 활용한 기사 검색 서비스</strong>입니다. </p> <br /> <p>React Native로 개발하여 실제 <span style='color: red'>스토어에 출시</span>까지 했다는 점에서 의미가 있습니다. 팀원들과 소통, 협업하여 마음만 먹으면 모바일 앱도 개발하고 출시할 수 있다는 자신감을 준 프로젝트입니다.</p>",
    stack: 'React, Redux, Typescript, styled-components',
    url: 'https://www.notion.so/News-API-eeefa0495aec4209880b89e204ed86a8',
    function: '뉴스 검색 및 정렬, 즐겨찾기, 본문 수정 기능, 페이지네이션(무한스크롤)',
    github: 'https://github.com/codestates/EmotiPop',
    imageList: [
      'https://velog.velcdn.com/images/jungjaedev/post/24bd6669-4609-4984-a7e2-bb1a4bda6fea/image.png',
      'https://velog.velcdn.com/images/jungjaedev/post/71bf82ba-a7fd-457b-b77d-797fba431786/image.png',
      'https://velog.velcdn.com/images/jungjaedev/post/2be8f8d9-c6e8-41bc-8b4c-d5bea5a735d0/image.png',
      'https://velog.velcdn.com/images/jungjaedev/post/f23918be-00ef-48a5-8091-2f937354c4a7/image.png'
    ]
  },
}