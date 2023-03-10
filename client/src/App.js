import style from './App.module.css';

function App() {
  return (
    <div className={style.app}>
      <h1>Let's begin</h1>
      <nav className={style.navigation}>
        <ul>
          <li className="listItem"><img src="/white-origami-bird.png" alt="white origami" /></li>
          <li className="listItem"><a href="https://github.com/">Going to 1</a></li>
          <li className="listItem"><a href="https://github.com/">Going to 2</a></li>
          <li className="listItem"><a href="https://github.com/">Going to 3</a></li>
          <li className="listItem"><a href="https://github.com/">Going to 4</a></li>
          <li className="listItem"><a href="https://github.com/">Going to 5</a></li>
          <li className="listItem"><a href="https://github.com/">Going to 6</a></li>
          <li className="listItem"><a href="https://github.com/">Going to 7</a></li>
          <li className="listItem"><a href="https://github.com/">Going to 8</a></li>
          <li className="listItem"><a href="https://github.com/">Going to 9</a></li>
          <li className="listItem"><a href="https://github.com/">Going to 10</a></li>
          <li className="listItem"><a href="https://github.com/">Going to 11</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
