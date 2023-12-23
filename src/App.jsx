import './App.css'
import ClientView from './components/ClientView';
import CompanyView from './components/CompanyView';
import InvoiceView from './components/InvoiceView';
import ListItemsView from './components/ListItemsView';
import { getInvoice } from './services/GetInvoice'

function App() {

  const invoice = getInvoice();
  const {client, company, items} = invoice;
  const {address} = client;

  return (
    <>
      <InvoiceView title={"Ejemplo factura"} invoice={invoice}/>

      <ClientView titleClient={"Datos del cliente"} client={client} 
                  address={address}/>

      <CompanyView titleCompany={"Datos de la empresa"} company={company}/>
     
      <ListItemsView titleItems={"Productos de la factura"} items={items}/>

    </>
  )
}

export default App
