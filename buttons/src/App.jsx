import './App.css'
import './index.css'
import AddTocart from './components/AddTocart/addTocart'
import Delete from './components/Delete/Delete';
import More from './components/More/More';
import Search from './components/Search/Search';
import Contact from './components/Contact/Contact';
function App() {
  return (
    <>
      <h1 style={{textAlign:'center'}}>List of Buttons</h1>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '50px' }}>
        {/* AddTocart */}
        <AddTocart buttonName={'Add to cart'} bgColor={'blue'} textColor={'white'} borderRadius={'s-2xl'} />
        {/* Delete Button*/}
        <Delete buttonName={'Delete'} bgColor={'blue'} textColor={'white'} borderRadius={'2xl'} />
        {/* More */}
        <More buttonName={'Click more to see'} bgColor={'transparent'} textColor={'blue'} borderRadius={'2xl'} />
        {/* Search */}
        <Search buttonName={'Add to cart'} bgColor={'blue'} textColor={'white'} borderRadius={'sm'} />
        {/* Search */}
        <Contact buttonName={'Contact Us'} bgColor={'blue'} textColor={'white'} />
      </div>
    </>
  )
}

export default App
