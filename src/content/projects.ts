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
      'https://velog.velcdn.com/images/jungjaedev/post/967d6ec8-6ff7-4dce-992e-252b27d0f45f/image.webp',
      'https://velog.velcdn.com/images/jungjaedev/post/711c40e3-00e6-4ea8-ab3a-48d4e80c0dba/image.webp',
      'https://velog.velcdn.com/images/jungjaedev/post/e702280c-f777-4a44-b7c3-281c6f0e2cff/image.webp',
      'https://velog.velcdn.com/images/jungjaedev/post/28b01b3b-d1a2-4715-86c5-da9207c2f8cd/image.webp',
      'https://velog.velcdn.com/images/jungjaedev/post/0c7d66da-b0bb-4b67-8bcc-e8bf31e03bb3/image.webp',
      'https://velog.velcdn.com/images/jungjaedev/post/64e8f779-ebdd-45a1-9b13-ce0ab6c1bbe3/image.webp'
    ]
  }
}