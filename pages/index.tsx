import { useEffect } from 'react';
import play from '../playground';

const HomePage = () => {
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
