const garage = document.querySelector('#garage');
const searchCars = document.querySelector('#search');
const all = document.querySelector('#all');
const favorites = document.querySelector('#favorites');
const legendary = document.querySelector('#legendary');
const electric = document.querySelector('#electric');
const sports = document.querySelector('#sports');
const pickup = document.querySelector('#pickup');
const muscle = document.querySelector('#muscle');
const crossovers = document.querySelector('#crossovers');

let garageData = [
    {
        name: 'chevrolet camaro',
        description: 'Some short description of this car',
        status: 'normal',
        favorite: false,
        legendary: false,
        category: ["electric", "pickup"],
        imageUrl: '/images/chevrolet-camaro.svg'
    },
    {
        name: 'chevrolet camaro',
        description: 'Some short description of this car',
        status: 'normal',
        favorite: false,
        legendary: false,
        category: ["sports"],
        imageUrl: '/images/chevrolet-camaro.svg'
    },
    {
        name: 'chevrolet camaro',
        description: 'Some short description of this car',
        status: 'normal',
        favorite: false,
        legendary: false,
        category: ["crossovers", "muscle"],
        imageUrl: '/images/chevrolet-camaro.svg'
    },
    {
        name: 'chevrolet camaro',
        description: 'Some short description of this car',
        status: 'gold',
        favorite: true,
        legendary: false,
        category: ["sports", "electric"],
        imageUrl: '/images/chevrolet-camaro.svg'
    },
    {
        name: 'chevrolet camaro',
        description: 'Some short description of this car',
        status: 'normal',
        favorite: false,
        legendary: false,
        category: ["pickup", "muscle"],
        imageUrl: '/images/chevrolet-camaro.svg'
    },
    {
        name: 'chevrolet camaro',
        description: 'Some short description of this car',
        status: 'green',
        favorite: false,
        legendary: true,
        category: ["crossovers", "muscle", "electric"],
        imageUrl: '/images/chevrolet-camaro.svg'
    },
    {
        name: 'chevrolet camaro',
        description: 'Some short description of this car',
        status: 'gold',
        favorite: true,
        legendary: false,
        category:["sports", "crossovers"],
        imageUrl: '/images/chevrolet-camaro.svg'
    },
    {
        name: 'chevrolet camaro',
        description: 'Some short description of this car',
        status: 'normal',
        favorite: false,
        legendary: false,
        category:["muscle", "electric"],
        imageUrl: '/images/chevrolet-camaro.svg'
    },
    {
        name: 'chevrolet camaro',
        description: 'Some short description of this car',
        status: 'normal',
        favorite: false,
        legendary: false,
        category: ["crossovers", "electric"],
        imageUrl: '/images/chevrolet-camaro.svg'
    },
    {
        name: 'chevrolet camaro',
        description: 'Some short description of this car',
        status: 'gold',
        favorite: true,
        legendary: false,
        category:["sports", "crossovers"],
        imageUrl: '/images/chevrolet-camaro.svg'
    },
    {
        name: 'chevrolet camaro',
        description: 'Some short description of this car',
        status: 'normal',
        favorite: false,
        legendary: false,
        category:["muscle", "electric"],
        imageUrl: '/images/chevrolet-camaro.svg'
    },
    {
        name: 'chevrolet camaro',
        description: 'Some short description of this car',
        status: 'normal',
        favorite: false,
        legendary: false,
        category: ["crossovers", "electric"],
        imageUrl: '/images/chevrolet-camaro.svg'
    },
    {
        name: 'chevrolet camaro',
        description: 'Some short description of this car',
        status: 'gold',
        favorite: true,
        legendary: false,
        category:["sports", "crossovers"],
        imageUrl: '/images/chevrolet-camaro.svg'
    },
    {
        name: 'chevrolet camaro',
        description: 'Some short description of this car',
        status: 'normal',
        favorite: false,
        legendary: false,
        category:["muscle", "electric"],
        imageUrl: '/images/chevrolet-camaro.svg'
    },
    {
        name: 'chevrolet camaro',
        description: 'Some short description of this car',
        status: 'normal',
        favorite: false,
        legendary: false,
        category: ["crossovers", "electric"],
        imageUrl: '/images/chevrolet-camaro.svg'
    },
]

electric.addEventListener('click', () => {
    let data = garageData.filter((item) => item.category.includes('electric') )
    pushGarageCars(data)
})

sports.addEventListener('click', () => {
    let data = garageData.filter((item) => item.category.includes('sports') )
    pushGarageCars(data)
})

pickup.addEventListener('click', () => {
    let data = garageData.filter((item) => item.category.includes('pickup') )
    pushGarageCars(data)
})

muscle.addEventListener('click', () => {
    let data = garageData.filter((item) => item.category.includes('muscle') )
    pushGarageCars(data)
})

crossovers.addEventListener('click', () => {
    let data = garageData.filter((item) => item.category.includes('crossovers') )
    pushGarageCars(data)
})

favorites.addEventListener('click', () => {
    let data = garageData.filter((item) => item.favorite)
    pushGarageCars(data)
})

all.addEventListener('click', () => {
    pushGarageCars(garageData)
})

const pushGarageCars = ( data ) => {
    garage.innerHTML = ''
    data.map((item) => {
        const { name, description, status, imageUrl } = item;

        // THE IMAGES DISPLAYED DEPENDS ON THE STATUS GIVEN DIRECTLY
        garage.innerHTML += `
            <section class="flexgapsmall cardetail ${status}">
                <img src="/images/${status === 'gold' ? `star-gold.svg` : 'star.svg'}" alt="star" class="star">
                <div class="carbox"> 
                    <div class="rectangle"> </div>
                    <img src=${imageUrl} alt="white car" class="whitecar">
                </div>
                <div>
                    <h4 class="font600 carname">${name}</h4>
                    <p class="white65 description">${description}</p>
                    ${ status === 'green' ? `<button><img src="/images/long-arrow-left.svg" alt="arrow left"> SELECT </button>` : ''}
                </div>
            </section>
        `
    })
}

document.addEventListener('keydown', evt => {
    if (evt.key === 'Escape') {
        alert('Escape pressed');
    }
});

document.addEventListener("mousedown", function(event) {
    if (event.button === 0) {
      console.log('left mouse button clicked')
    }
  });

searchCars.addEventListener('change', () => {
    console.log(searchCars.value)
})

pushGarageCars(garageData)