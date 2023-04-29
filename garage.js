const garage = document.querySelector('#garage');
const searchCars = document.querySelector('#search');
const all = document.querySelector('#all');
const favorites = document.querySelector('#favorites');
const electric = document.querySelector('#electric');
const sports = document.querySelector('#sports');
const pickup = document.querySelector('#pickup');
const muscle = document.querySelector('#muscle');
const crossovers = document.querySelector('#crossovers');
// const star = document.querySelector('.star');
const filters = [all, favorites, electric, sports, pickup, muscle, crossovers];

let garageData = [
    {
        carId:"1",
        name: 'chevrolet camaro',
        description: 'Some short description of this car',
        status: 'normal',
        favorite: false,
        category: ["electric", "pickup"],
        imageUrl: '/images/chevrolet-camaro.svg'
    },
    {
        carId:"2",
        name: 'chevrolet camaro',
        description: 'Some short description of this car',
        status: 'normal',
        favorite: false,
        category: ["sports"],
        imageUrl: '/images/chevrolet-camaro.svg'
    },
    {
        carId:"3",
        name: 'chevrolet camaro',
        description: 'Some short description of this car',
        status: 'normal',
        favorite: false,
        category: ["crossovers", "muscle"],
        imageUrl: '/images/chevrolet-camaro.svg'
    },
    {
        carId:"4",
        name: 'chevrolet camaro',
        description: 'Some short description of this car',
        status: 'favorite',
        favorite: true,
        category: ["sports", "electric"],
        imageUrl: '/images/chevrolet-camaro.svg'
    },
    {
        carId:"5",
        name: 'chevrolet camaro',
        description: 'Some short description of this car',
        status: 'normal',
        favorite: false,
        category: ["pickup", "muscle"],
        imageUrl: '/images/chevrolet-camaro.svg'
    },
    {
        carId:"6",
        name: 'chevrolet camaro',
        description: 'Some short description of this car',
        status: 'select',
        favorite: false,
        legendary: true,
        category: ["crossovers", "muscle", "electric"],
        imageUrl: '/images/chevrolet-camaro.svg'
    },
    {
        carId:"7",
        name: 'chevrolet camaro',
        description: 'Some short description of this car',
        status: 'favorite',
        favorite: true,
        category:["sports", "crossovers"],
        imageUrl: '/images/chevrolet-camaro.svg'
    },
    {
        carId:"8",
        name: 'chevrolet camaro',
        description: 'Some short description of this car',
        status: 'normal',
        favorite: false,
        category:["muscle", "electric"],
        imageUrl: '/images/chevrolet-camaro.svg'
    },
    {
        carId:"9",
        name: 'chevrolet camaro',
        description: 'Some short description of this car',
        status: 'normal',
        favorite: false,
        category: ["crossovers", "electric"],
        imageUrl: '/images/chevrolet-camaro.svg'
    },
    {
        carId:"10",
        name: 'chevrolet camaro',
        description: 'Some short description of this car',
        status: 'favorite',
        favorite: true,
        category:["sports", "crossovers"],
        imageUrl: '/images/chevrolet-camaro.svg'
    },
    {
        carId:"11",
        name: 'chevrolet camaro',
        description: 'Some short description of this car',
        status: 'normal',
        favorite: false,
        category:["muscle", "electric"],
        imageUrl: '/images/chevrolet-camaro.svg'
    },
    {
        carId:"12",
        name: 'chevrolet camaro',
        description: 'Some short description of this car',
        status: 'normal',
        favorite: false,
        category: ["crossovers", "electric"],
        imageUrl: '/images/chevrolet-camaro.svg'
    },
    {
        carId:"13",
        name: 'chevrolet camaro',
        description: 'Some short description of this car',
        status: 'favorite',
        favorite: true,
        category:["sports", "crossovers"],
        imageUrl: '/images/chevrolet-camaro.svg'
    },
    {
        carId:"14",
        name: 'chevrolet camaro',
        description: 'Some short description of this car',
        status: 'normal',
        favorite: false,
        category:["muscle", "electric"],
        imageUrl: '/images/chevrolet-camaro.svg'
    },
    {
        carId:"15",
        name: 'chevrolet camaro',
        description: 'Some short description of this car',
        status: 'normal',
        favorite: false,
        category: ["crossovers", "electric"],
        imageUrl: '/images/chevrolet-camaro.svg'
    },
]

filters.map((item) => {
    item.addEventListener('click', () => {
        item.classList.add('filteractive')
        const restFilters = filters.filter((filt) => filt !== item)
        restFilters.map((i) => i.classList.remove('filteractive'))
    })
})

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
        const { name, description, status, imageUrl, carId, favorite } = item;

        let image = 'star-normal.svg';
        let style = 'normal';
        if (favorite) { 
            image = 'star-favorite.svg'; 
            style = 'favorite'
        };
        if ( !favorite && status === 'select') image = 'star-select.svg';
        if ( status === 'select' ) style = 'select';

        // THE IMAGES DISPLAYED DEPENDS ON THE STATUS GIVEN DIRECTLY
        garage.innerHTML += `
            <section class="flexgapsmall cardetail ${style}" id=${carId}>
                <img src="/images/${image}" alt="star" class="star" onClick="toggleFavorite(${carId})">
                <div class="carbox"> 
                    <div class="rectangle"> </div>
                    <img src=${imageUrl} alt="white car" class="whitecar">
                </div>
                <div>
                    <h4 class="font600 carname">${name}</h4>
                    <p class="white65 description">${description}</p>
                    ${ status === 'select' ? `<button><img src="/images/long-arrow-left.svg" alt="arrow left"> SELECT </button>` : ''}
                </div>
            </section>
        `
    })
}

const toggleFavorite = (id) => {
    garageData = garageData.map((car) => {
        if ( String(id) === car.carId ) {
            return { ...car, favorite: !car.favorite};
        }
        else return {...car}
    })
    pushGarageCars(garageData)
}

document.addEventListener('keydown', evt => {
    if (evt.key === 'Escape') {
        alert('Escape pressed');
    }
});

document.addEventListener("mousedown", function(event) {
    if (event.button === 0) {
    //   console.log('left mouse button clicked')
    }
  });

searchCars.addEventListener('change', () => {
    console.log(searchCars.value)
})

pushGarageCars(garageData);