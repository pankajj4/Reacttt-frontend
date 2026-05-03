
const SearchBar = () => { // ---Search Bar FUNCTION #1---
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [value,setValue] = useState('');
  const [hideall , setHideAll] = useState(false);

  hideall ? sessionStorage.setItem("HideHeaderElems_exceptSearch",true) : sessionStorage.setItem("HideHeaderElems_exceptSearch",false)  ;
    
  // useEffect state for window inner width
  useEffect(() => {
    const handleResize =()=> setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);  
    return () => window.removeEventListener('resize', handleResize); 
  }, []);

// FullSearchWidth FUNCTION ----
function FullSearchWidth(){
  return(
  <div className='flex items-center justify-between w-full'>
    <input type='text' placeholder='Search...'  className='InputField border rounded-full p-2 mr-2 bg-white '/>
    <div className="size-8 flex justify-center items-center  text-themeIcon rounded-full " onClick={()=>{setHideAll(false)}}><X size={18} /></div>
  </div>);
}

  //search bar for mobile----
function SearchBarForMobile(){
  return(<>
    <div className="SearchBarMobile" onClick={()=>{setHideAll(true)}}> <Search  size={18}/> </div>
    {hideall ? <FullSearchWidth/> : null}
      
  </>);
}

// search bar for desktop----
  function SearchBarDesktop(){
    return(<>
    <label className='SearchBar'  >
      <input type='text' 
            className='InputField' 
            id='searchbar' 
            placeholder='Search...' 
            value={value} 
            onChange={(e)=>setValue(e.target.value)}
            /> 
      { value ? 
          (<div className='SearchIcons' onClick={()=>setValue('')}> <X size={18}/> </div>) : 
          (<div className="SearchIcons"> <Search size={18} /> </div>)  
        }
    </label>     
    </>);
  }
  
  // return function of search bar
  return (
    <>
        {windowWidth <= 431 ? SearchBarForMobile() : SearchBarDesktop()}
    </>
  );
}