const image1 = require('./img/Cidade_Roxa.png').default
const image2 = require('./img/Cidade_Futurista.png').default
const image3 = require('./img/Cidade_Japonesa.png').default
const image4 = require('./img/Cidade_Moderna_Japonesa.png').default

    const imgs = [
      image1,
      image2,
      image3,
      image4
    ]

const element = document.querySelector('.carousel_img img')
    let index = 0

    setInterval(() => {
      index = (index + 1) % imgs.length;
      element.src = imgs[index];
    }, 2000);