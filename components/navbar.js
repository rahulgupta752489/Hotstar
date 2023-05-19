
function navbar() {

    return  `<div id="lhs">
    <a href="home.html"><img src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg" alt=""></a>
    <h4>TV</h4>
    <h4>Movies</h4>
    <h4>Sports</h4>
    <h4>Disney</h4>
    </div>

   <div id="rhs">
    <a href="search.html"> <button>Search Movies</button></a>
    <button >SUBSCRIBE</button>
    <div><a href="login.html"> LOGIN</a> </div>
   </div>`;
   
}

export default navbar;
// two ways of writting this.
// 1. export default navbar;   for one export.
// 2. export {navbar}          for multiple exp.
// from mumbai it is going to surat (navbar.js  to  home.html)
