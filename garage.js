const garage = document.querySelector('#garage');
const searchCars = document.querySelector('#search');
const all = document.querySelector('#all');
const favorites = document.querySelector('#favorites');
const legendary = document.querySelector('#legendary');

const garageData = [
    {
        name: 'chevrolet camaro',
        description: 'Some short description of this car',
        status: 'normal'
    },
    {
        name: 'chevrolet camaro',
        description: 'Some short description of this car',
        status: 'normal'
    },
    {
        name: 'chevrolet camaro',
        description: 'Some short description of this car',
        status: 'normal'
    },
    {
        name: 'chevrolet camaro',
        description: 'Some short description of this car',
        status: 'gold'
    },
    {
        name: 'chevrolet camaro',
        description: 'Some short description of this car',
        status: 'normal'
    },
    {
        name: 'chevrolet camaro',
        description: 'Some short description of this car',
        status: 'green'
    },
    {
        name: 'chevrolet camaro',
        description: 'Some short description of this car',
        status: 'gold'
    },
    {
        name: 'chevrolet camaro',
        description: 'Some short description of this car',
        status: 'normal'
    },
    {
        name: 'chevrolet camaro',
        description: 'Some short description of this car',
        status: 'normal'
    },
]

const pushGarageCars = ( data ) => {
    data.map((item) => {
        const { name, description, status } = item;

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

searchCars.addEventListener('change', () => {
    console.log(searchCars.value)
})

pushGarageCars(garageData)