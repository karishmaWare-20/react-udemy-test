import './App.css'
import Card from './components/Card';
import Counter from './components/Counter';
function App() {
  return (
    <>
      <div className='w-full flex justify-between text-blue-600 dark:text-sky-400 border-2 p-4 rounded-xl mt-10 max-md:flex-col'>
      <h1>Learn React With chaipoint.com</h1>
      <h4>Karishma Ware</h4>
      </div>
       <div className='flex m-4 gap-8  max-md:flex-col'>
       <Counter/>
       <Card title="Mahatma Gandhi" description="Led major non-violent movements, including the Salt March (Dandi March) and the Quit India Movement, earning the title 'Father of the Nation'."
       imageUrl="https://media.gettyimages.com/id/521787164/photo/drawing-of-freedom-fighters-of-india-mohandas-karamchand-gandhi-india-asia.jpg?s=1024x1024&w=gi&k=20&c=MsRd4amAlz36hDADROS3fZWzP6RsYZui32Sogi0IlkE="/>   
       </div>
    </>

  )
}

export default App
