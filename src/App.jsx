import './App.css'
import Card from './components/Card';

function App() {
  return (
    <>
       <h1 className="text-blue-600 dark:text-sky-400 border-2 p-4 rounded-xl">Learn React With chaicode.com</h1>
       <div className='flex gap-8'>
       <Card title="Mahatma Gandhi" description="Led major non-violent movements, including the Salt March (Dandi March) and the Quit India Movement, earning the title 'Father of the Nation'."
       imageUrl="https://media.gettyimages.com/id/521787164/photo/drawing-of-freedom-fighters-of-india-mohandas-karamchand-gandhi-india-asia.jpg?s=1024x1024&w=gi&k=20&c=MsRd4amAlz36hDADROS3fZWzP6RsYZui32Sogi0IlkE="/>   
       </div>
    </>

  )
}

export default App
