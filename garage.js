const garage = document.querySelector('#garage');
const searchCars = document.querySelector('#search');
const all = document.querySelector('#all');
const favorites = document.querySelector('#favorites');
const legendary = document.querySelector('#legendary');

let garageData = [
    {
        name: 'chevrolet camaro',
        description: 'Some short description of this car',
        status: 'normal',
        favorite: false,
        legendary: false,
        category: ["electric", "pickup"]
    },
    {
        name: 'chevrolet camaro',
        description: 'Some short description of this car',
        status: 'normal',
        favorite: false,
        legendary: false,
        category: ["sports"]
    },
    {
        name: 'chevrolet camaro',
        description: 'Some short description of this car',
        status: 'normal',
        favorite: false,
        legendary: false,
        category: ["crossovers", "muscle"]
    },
    {
        name: 'chevrolet camaro',
        description: 'Some short description of this car',
        status: 'gold',
        favorite: true,
        legendary: false,
        category: ["sports", "electric"]
    },
    {
        name: 'chevrolet camaro',
        description: 'Some short description of this car',
        status: 'normal',
        favorite: false,
        legendary: false,
        category: ["pickup", "muscle"]
    },
    {
        name: 'chevrolet camaro',
        description: 'Some short description of this car',
        status: 'green',
        favorite: false,
        legendary: true,
        category: ["crossovers", "muscle", "electric"]
    },
    {
        name: 'chevrolet camaro',
        description: 'Some short description of this car',
        status: 'gold',
        favorite: true,
        legendary: false,
        category:["sport", "crossovers"]
    },
    {
        name: 'chevrolet camaro',
        description: 'Some short description of this car',
        status: 'normal',
        favorite: false,
        legendary: false,
        category:["muscle", "electric"]
    },
    {
        name: 'chevrolet camaro',
        description: 'Some short description of this car',
        status: 'normal',
        favorite: false,
        legendary: false,
        category: ["crossovers", "electric"]
    },
]

legendary.addEventListener('click', () => {
    let data = garageData.filter((item) => item.legendary === true )
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
        const { name, description, status } = item;

        // THE IMAGES DISPLAYED DEPENDS ON THE STATUS GIVEN DIRECTLY
        garage.innerHTML += `
            <section class="flexgapsmall cardetail ${status}">
                <img src="/images/${status === 'gold' ? `star-gold.svg` : 'star.svg'}" alt="star" class="star">
                <img src="/images/car-${status}.svg" alt="white car" class="whitecar">
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