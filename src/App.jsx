import './App.css'
import { getInvoice } from './services/GetInvoice'

function App() {

  const invoice = getInvoice();

  return (
    <>
      <h1>Ejemplo factura</h1>

      <ul>
        <li>Id: {invoice.id}</li>
        <li>Nombre: {invoice.name}</li>
      </ul>
    </>
  )
}

export default App
