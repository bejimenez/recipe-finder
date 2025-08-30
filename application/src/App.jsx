import './App.css'
import { Card } from './components/Card'

function App() {

  const meal = {
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80"
  }
  return (
    <>
      <Card image={meal.image} title="Meal 1" description="Loren ipsum"/>
      <Card image="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80" title="Meal 2" description="Loren ipsum"/>
    </>
  )
}

export default App
