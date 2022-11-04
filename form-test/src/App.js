import './App.css';
import Form from './component/form';

function App() {

  const handleSubmit = (data) => console.log(data)

  return (
    <div className="App">
      <Form onSubmit={handleSubmit}/>
    </div>
  );
}

export default App;
