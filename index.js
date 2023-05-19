
import navbar from "./components/navbar.js";
// console.log(navbar);

let navbar_div = document.getElementById('navbar');
navbar_div.innerHTML = navbar();

let carousel_div = document.getElementById('carousel');

function carousel() {
   

    let images = [`https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/2212/1042212-h-0e83e926cfc1`, `https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4839/1454839-h-bb4bcae07d95`, `https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/1246/1431246-h-55e527bfebe4`, `https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/1257/1431257-h-c0a136fb4fd0`, `https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/5418/1445418-h-3685fc747503`];

    let imgElement = document.createElement('img');
    imgElement.id = 'pic';

    imgElement.src = images[0];

    carousel_div.append(imgElement);

    let i=1;

    setInterval(function () {

        if(i === images.length) {
            i=0;
        }

        imgElement.src = images[i];

        carousel_div.append(imgElement);

        i++;

    }, 3000);
}
carousel();