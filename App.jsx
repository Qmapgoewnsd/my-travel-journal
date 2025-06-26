import './App.css'
import Entry from './components/Entry'
import Header from './components/Header'
import Data from './Data'
function App() {
  const Elements = Data.map((x) => {
    return (
      <Entry 
        id={x.id}
        img={x.img}
        title={x.title}
        country={x.country}
        googleMapsLink={x.googleMapsLink}
        dates={x.dates}
        text={x.text}
      />
    )
  })
  return (
    <>
      <Header />
      <div>{Elements}</div>
    </>
  )
}

export default App
