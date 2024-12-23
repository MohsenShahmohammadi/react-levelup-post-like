import "./App.css";
import Post from "./components/Post";
import {posts} from './data/manuallyData.js'

function App() {
  return (
    <>
      <div className="container">
        {posts.map((post) =>(
          <Post key={post.id} item={post} />
        ))}
      </div>
    </>
  );
}

export default App;
