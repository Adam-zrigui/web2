import { Route,  Routes } from "react-router-dom";
import Footer from "./components/EveryComponent/Footer";
import FourOFour from "./components/EveryComponent/Four-O-Four";
import Nav from "./components/EveryComponent/Nav";
import Home from "./components/Home";
import Start from "./components/lofr/Start";
import Intro from "./components/tutorial/html/intro";
import Basic from "./components/tutorial/html/basic";
import El from "./components/tutorial/html/el";
import Attr from "./components/tutorial/html/attr";
import Heading from "./components/tutorial/html/heading";
import Style from "./components/tutorial/html/style";
import Img from "./components/tutorial/html/img";
import Id from "./components/tutorial/html/id";
import Css from "./components/tutorial/html/css";
import Login from "./components/Login";
import Guide from "./components/lofr/Guide";
import Int from "./components/tutorial/css/Intro";
import Color from "./components/tutorial/css/Color";
import Bor from "./components/tutorial/css/Bor";
import Margin from "./components/tutorial/css/Margin";
import Padding from "./components/tutorial/css/Padding";
import Box from "./components/tutorial/css/Box";
import W from "./components/tutorial/css/W";
import Media from "./components/tutorial/css/Media";
import In from "./components/tutorial/git/Intro";
import Starting from "./components/tutorial/git/Starting";
import Staging from "./components/tutorial/git/Staging";
import Commit from "./components/tutorial/git/Commit";
import Github from "./components/tutorial/git/Github";
import Push from "./components/tutorial/git/Push";
import I from "./components/tutorial/sass/Intro";
import Var from "./components/tutorial/sass/Var";
import { useSelector } from "react-redux";
import { selectUser } from "./redux/UserSlice";
import Nest from "./components/tutorial/sass/Nest";
import Mport from "./components/tutorial/sass/Mport";
import Mixin from "./components/tutorial/sass/Mixin";
import Extend from "./components/tutorial/sass/Extend";
import Profile from "./components/Profile";
import Intr from "./components/tutorial/js/Intro";
import Out from "./components/tutorial/js/Out";
import Sta from "./components/tutorial/js/Sta";
import Syntax from "./components/tutorial/js/Syntax";
import Declare from "./components/tutorial/js/Declare";
import Data from "./components/tutorial/js/Data";
import Op from "./components/tutorial/js/Op";
import Func from "./components/tutorial/js/Func";
import Arr from "./components/tutorial/js/Arr";
import If from "./components/tutorial/js/If";
import For from "./components/tutorial/js/For";
import Meth from "./components/tutorial/js/Meth";
import While from "./components/tutorial/js/While";
import It from "./components/tutorial/react/Intro";
import Render from "./components/tutorial/react/Render";
import X from "./components/tutorial/react/x";
import Comp from "./components/tutorial/react/Comp";
import Cs from "./components/tutorial/react/Css";
import Props from "./components/tutorial/react/Props";
import Con from "./components/tutorial/react/Conp";
import Router from "./components/tutorial/react/Router";
import Hook from "./components/tutorial/react/Hook";
document.title = 'LOFR'
function App() {
  const user = useSelector(selectUser)
  return (
    <>
    <Nav />
    <Routes>
{ !user  ? <>
  <Route path='*' element={<FourOFour />} />
<Route path="/" element={<Home />} />
<Route path="/login" element={<Login />} />
</>   : <> 
<Route path="/tutorial/react/hooks" element={<Hook />} />
<Route path="/tutorial/react/route" element={<Router />} />
<Route path="/tutorial/react/conditions" element={<Con />} />
<Route path="/tutorial/react/props" element={<Props />} />
<Route path="/tutorial/react/css" element={<Cs />} />
<Route path="/tutorial/react/components" element={<Comp />} />
<Route path="/tutorial/react/jsx" element={<X />} />
<Route path="/tutorial/react/render" element={<Render />} />
<Route path="/tutorial/react/intro" element={<It />} />
<Route path="/tutorial/js/while" element={<While />} />
<Route path="/tutorial/js/methods" element={<Meth />} />
<Route path="/tutorial/js/for" element={<For />} />
<Route path="/tutorial/js/if" element={<If />} />
<Route path="/tutorial/js/array" element={<Arr />} />
<Route path="/tutorial/js/function" element={<Func />} />
<Route path="/tutorial/js/operators" element={<Op />} />
<Route path='/tutorial/js/dataTypes' element={<Data />} />
<Route path="/tutorial/js/declare" element={<Declare />} />
<Route path="/tutorial/js/syntax" element={<Syntax />} /> 
<Route path="/tutorial/js/statements" element={<Sta />} />
<Route path="tutorial/js/output" element={<Out />} />
<Route path="/tutorial/js/intro" element={<Intr />} />
<Route path={`/profile/${user.id}&username=${user.name}`} element={<Profile />} />
<Route path="/tutorial/sass/extend" element={<Extend />} />
<Route path="/tutorial/sass/mixin" element={<Mixin />} />
<Route path="/tutorial/sass/import" element={<Mport />} />
<Route path="/tutorial/sass/var" element={<Var />} />
<Route path="/tutorial/sass/nest" element={<Nest/>} />
      <Route path="/tutorial/sass/intro" element={<I />} />
      <Route path='/tutorial/git/push' element={<Push /> } />
    <Route path="/tutorial/git/github" element={<Github />} />    
    <Route path="/tutorial/git/commit" element={<Commit />} />
<Route path="/tutorial/git/stage" element={<Staging />} />
<Route path="/tutorial/git/started" element={<Starting /> } />
<Route path="/tutorial/git/intro" element={<In /> } />
<Route path="/tutorial/css/media" element={<Media />} />
<Route path="/tutorial/css/w" element={<W />} />
<Route path="/tutorial/css/box" element={<Box /> } />
<Route path="/tutorial/css/p" element={<Padding /> } />
<Route path="/tutorial/css/m" element={<Margin />} />
<Route path="/tutorial/css/bor" element={<Bor />} />
<Route path="/tutorial/css/color" element={<Color />} />
<Route path="/tutorial/css/intro" element={<Int /> } />
<Route path="/guide" element={<Guide />} /> 
    <Route path="/tutorial/html/css" element={<Css />} />
      <Route path="/tutorial/html/idss" element={<Id />} />
      <Route path='/tutorial/html/images' element={<Img />} />
      <Route path='/tutorial/html/inline' element={<Style />} />
      <Route path="/tutorial/html/heading" element={<Heading />}/>
      <Route path='/tutorial/html/attributes' element={<Attr />} />
    <Route path="/tutorial/html/elements" element={<El />}/>
    <Route path="/tutorial/html/basic" element={<Basic />}/>
      <Route path="/tutorial/html/intro" element={<Intro />}/>
<Route path="/tutorial/html/attributes" element={<Attr />} /> 
<Route path="/starting" element={<Start />} /> 
<Route path='*' element={<FourOFour />} />
<Route path="/" element={<Home />} />
<Route path="/login" element={<Login />} />
</>
}
</Routes>
    <Footer />
    
    </>
  );
}

export default App;
