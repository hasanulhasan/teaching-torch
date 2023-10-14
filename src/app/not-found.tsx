import Image from 'next/image';
import NotFoundImg from '../assets/not-found page.png'
import { Button } from 'antd';
const NotFoundPage = () => {
  return (
    <div style={{display: 'flex', justifyContent:'center'}}>
      <Image src={NotFoundImg} alt='page not found' width={700}></Image>
    </div>
  );
};

export default NotFoundPage;