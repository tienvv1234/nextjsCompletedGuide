import { useEffect } from 'react';
import play from '../playground';

const HomePage = (abc) => {
  console.log('abc');
  console.log(abc);
  const message: string = 'hello world';
//   const b: NodeJS.Process;
//   console.log(b.browser);
  const person: Person = {
    name: 'tien',
  };

  useEffect(() => {
    play();
  }, []);
  return <div>Welcome to Next.js!</div>;
};

// HomePage.getInitialProps = async (context) => {
//   console.log('I am on the server!');
//   console.log(context.req.url);
//   return 'server return';
// };

export default HomePage;
