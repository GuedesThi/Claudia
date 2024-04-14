// import viteLogo from '/vite.svg'
import './App.css'
import { About } from './components/About'
import { Bonus } from './components/Bonus'
import { Depoimento } from './components/Depoimento'
import { Faq } from './components/Faq'
import { First } from './components/First'
import { Garantia } from './components/Garantia'
import { Pilar } from './components/Pilar'
import { Product } from './components/Product'
import { Recapitulando } from './components/Recapitulando'
import { Today } from './components/Today'


function App() {
  return (
    <>
      <First/>
      <Product/>
      <About/>
      <Pilar/>
      <Depoimento/>
      <Recapitulando/>
      <Bonus/>
      <Today/>
      <Garantia/>
      <Faq/>
    </>
  )
}

export default App
