function Hello(props) {
    const { name } = props;

    return (
        <div>
            <h1>Hello, Selamat Pagi {name} dan 
            selamat datang di React</h1>
            <p>My name is {name} - Frontend Enginer</p>
        </div>
    );
  }

  export default Hello;