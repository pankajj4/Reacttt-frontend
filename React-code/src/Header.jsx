import './All.css';
import  {createContext , useContext, useState, useReducer, useEffect} from 'react';
import {Search , X , Moon , Sun, User} from 'lucide-react';
import { Button } from "@/components/ui/button"


export default function Maincomponent(){
  return(
    <div className='Header'>
          <HeadLogo />
          <SearchBar />
          <ThemeToggle/>
          <LoginSignUpICON/>
      
  </div>);
}


function HeadLogo (){
  return(<a href='#' className={`HeaderLogo`} ><img alt='logo' src="https://static.canva.com/web/images/8439b51bb7a19f6e65ce1064bc37c197.svg" className={` w-auto h-auto`} /></a> );
}


const SearchBar = () => { // ---Search Bar FUNCTION #1---

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [value, setValue] = useState('');
  const [hideall, setHideAll] = useState(false);

  const header = document.querySelector(".Header");

  
  
  if (hideall) {
    [...header.children].forEach(child => {
      if (!child.classList.contains("SearchBar")) {
        child.style.display = "none";
      }});
    }
    
    const Normal = () => {
      [...header.children].forEach(child => {
        child.style.display = "flex";
      });
    };
    
    // useEffect state for window inner width
    useEffect(() => {
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    
  // FullSearchWidth FUNCTION ----
  function FullSearchWidth() {
    return (
      <div className='flex items-center justify-between w-full'>
        <input
          type='text'
          placeholder='Search...'
          className='InputField border rounded-full p-2 mr-2 bg-white'
        />
        <div
          className="size-8 flex justify-center items-center text-themeIcon rounded-full"
          onClick={() => { Normal(); setHideAll(false); }}
        >
          <X size={18} />
        </div>
      </div>
    );
  }

  // search bar for mobile----
  function SearchBarForMobile() {
    return (
      <>
        <div
          className={`SearchBarMobile ${hideall && "hidden"}`}
          onClick={() => { setHideAll(true); }}
        > 
        <Search size={18} /> 
        </div>

        {hideall ? <FullSearchWidth /> : null}
      </>
    );
  }

  // search bar for desktop----
  function SearchBarDesktop() {
    return (
      <>
        <label className='SearchBar'>
          <input
            type='text'
            className='InputField'
            id='searchbar'
            placeholder='Search...'
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />

          {value ? 
            (<div className='SearchIcons' onClick={() => setValue('')}> <X size={18} /> </div>) : 
            (<div className="SearchIcons"><Search size={18} /></div>)}
        </label>
      </>
    );
  }

  // return function of SearchBar
  return (windowWidth <= 431 ? SearchBarForMobile() : SearchBarDesktop());
};


const ThemeToggle = () => {     // ThemeToggle  FUNCTION
  
  const Reducer = (state , action) => {
    const globaltheme = document.querySelector("body");
    
    if(action === 'DarkTheme'){
      globaltheme.setAttribute("class","dark");
      localStorage.setItem("theme","dark");
    }
    else{
      globaltheme.setAttribute("class",null); 
      localStorage.setItem("theme",null);
    }}

  const selectedTheme = localStorage.getItem("theme");
  (selectedTheme === "dark") ? Reducer('',"DarkTheme") : null;
  
  const [themeT , setthemeT] = useState( (selectedTheme === "dark") ? false  : true )
  const [state , dispatch] = useReducer( Reducer  , null );
   

  return (
    <div
      className="themeToggle"
      onClick={() => {
        setthemeT(!themeT);
        themeT ? dispatch("DarkTheme") : dispatch(null) ;
      }}
    >
      { themeT ? <Moon size={18}/> : <Sun size={18}/> } 
    </div>
  );
};


const LoginSignUpICON = () => {
  
  return (
    <Button variant="outline" size="lg" >
      <User /> Login
      {/* { (w < 440) ? "" : 'Signup' } */}
    </Button>
  );
};







