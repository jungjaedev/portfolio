interface ItemProps {
  title: string;
  imageList: string[];
}

export const skillsList : {[key: string] : ItemProps}  = {
  Frontend : {
    title: "Frontend",
    imageList: [
      'assets/frontend/html_js_css.png',
      'assets/frontend/react_sc_ts.png',
      'assets/frontend/redux.png',
      'assets/frontend/rn.png'
    ]
  },
  Backend : {
    title: "Backend",
    imageList: [
      'assets/backend/nodejs.png',
      'assets/backend/express.png',
      'assets/backend/mysql.png',
      'assets/backend/sequelize.png'
    ]
  },
  Etc: {
    title: "Etc",
    imageList: [
      'assets/etc/git.png',
      'assets/etc/s3.png',
      'assets/etc/rds.png',
      'assets/etc/ec2.png'
    ]
  }
}