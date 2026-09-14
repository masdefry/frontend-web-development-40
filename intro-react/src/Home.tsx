/*
  Class
  Function
*/
import { Link } from 'react-router';
import './Home.css';
function Home() {
  return (
    <>
      <h1 id='title'>Home Page</h1>
      <button>Submit</button>
      <Link id='' to='/profile'>
        <button>Go to Profile</button>
      </Link>
      <a href='/profile'>Goto Profile Page HREF</a>
    </>
  );
}

export default Home;
