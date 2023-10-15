import Image from 'next/image';
import NotFoundImg from '../assets/not-found page.png'
import Link from 'next/link';
const NotFoundPage = () => {
  return (
    <div style={{display: 'flex', justifyContent:'center', justifyItems: 'center',alignItems: 'center', flexDirection: 'column'}}>
      <Image src={NotFoundImg} alt='page not found' width={700}></Image>
      <Link href='/'><button className="inline-block mt-2 px-6 py-2.5 bg-blue-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-600">Go Home</button></Link>
    </div>
  );
};

export default NotFoundPage;