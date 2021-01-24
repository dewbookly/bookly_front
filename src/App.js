
import './App.css';
import bookimg from './sources/book2.jpg'


function App() {
  return (
    <div className="background">
      <p className="Title">Bookly</p>
      <div className = "searchBox">
        <p className="searchTitle">책 이름으로 검색하세요</p>
        <input className="searchBar"></input><i style={{marginLeft:'-25px'}} class="fas fa-search"></i>
      </div>

    </div>
  );
}

export default App;
