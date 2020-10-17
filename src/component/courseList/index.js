import React from 'react'
import { Card } from 'antd';

const { Meta } = Card;

const CourseList = ({ course }) => {
  return (
    <Card
      hoverable
      cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
    >
      <Meta title={"Course " + course} description="www.instagram.com" />
    </Card>
  )
}

export default CourseList;