const parks = document.querySelector('#parks');
const freeplaces = document.querySelector('#freeplaces');
const walletvalue = document.querySelector('#walletvalue');

const parkingData = [
    {
        id: '121',
        cost: '1.540',
        status: 'free',
    },
    {
        id: '122',
        cost: '1.540',
        status: 'free',
    },
    {
        id: '123',
        cost: '1.540',
        status: 'selected',
    },
    {
        id: '124',
        cost: '1.540',
        status: 'free',
    },
    {
        id: '125',
        cost: '1.540',
        status: 'occupied',
    },
    {
        id: '126',
        cost: '1.540',
        status: 'free',
    },
    {
        id: '127',
        cost: '1.540',
        status: 'occupied',
    },
    {
        id: '128',
        cost: '1.540',
        status: 'occupied',
    },
    {
        id: '129',
        cost: '1.540',
        status: 'free',
    },
    {
        id: '130',
        cost: '1.540',
        status: 'free',
    },
]

const pushParksData = ( data ) => {
    data.map((item) => {
        const { id, cost, status } = item;

        parks.innerHTML += `
            <section class='park park${status}'>
                <p class="dash"></p>
                <div class="inner">
                    <p class="id"> ${id} </p>
                    <div>
                        <p class="white65 font600">${status}</p>
                        <div class="flexgapsmall font600"> ${cost} <img src="/images/lix-yellow.svg" alt="lix-yellow" class="icons"> </div>
                    </div>
                    ${status === 'selected' ? `<button> <img src="/images/long-arrow-left.svg" alt="arrow left"> BUY </button>` : '' }
                </div>
            </section>
        `
    })
}

const setWalletValue = (value) => {
    walletvalue.textContent = value;
}
const setFreePlaces = (value) => {
    freeplaces.textContent = value;
}

document.addEventListener('keydown', evt => {
    if (evt.key === 'Escape') {
        alert('Escape pressed');
    }
});

document.addEventListener('keydown', evt => {
    if (evt.key === 'q') {
        alert('Q pressed');
    }
});

document.addEventListener('keydown', evt => {
    if (evt.key === 'e') {
        alert('E pressed');
    }
});

pushParksData(parkingData);
setWalletValue('130.000');
setFreePlaces('832');