let baza = [
    {
        id: 1,
        img: './assets/img/image.png',
        title: 'Mars Rug',
        coinimg: './assets/icons/Coin 1.png',
        coin: '100 Coin',
        mavjud: '24'
    },
    {
        id: 2,
        img: './assets/img/image 22 (1).png',
        title: 'Keyboard sticker',
        coinimg: './assets/icons/Coin 1.png',
        coin: '49 Coin',
        mavjud: '11'
    },
    {
        id: 3,
        img: './assets/img/image 23 (1).png',
        title: 'Smart watch',
        coinimg: './assets/icons/Coin 1.png',
        coin: '899 Coin',
        mavjud: '4'
    },
    {
        id: 4,
        img: './assets/img/image 24 (1).png',
        title: 'Wireless keyboard',
        coinimg: './assets/icons/Coin 1.png',
        coin: '350 Coin',
        mavjud: '0'
    },
    {
        id: 5,
        img: './assets/img/image 25 (1).png',
        title: 'Mouse',
        coinimg: './assets/icons/Coin 1.png',
        coin: '359 Coin',
        mavjud: '24'
    },
    {
        id: 6,
        img: './assets/img/image 26 (1).png',
        title: 'AirPods',
        coinimg: './assets/icons/Coin 1.png',
        coin: '499 Coin',
        mavjud: '11'
    },
    {
        id: 7,
        img: './assets/img/image 27 (1).png',
        title: 'PowerBank',
        coinimg: './assets/icons/Coin 1.png',
        coin: '899 Coin',
        mavjud: '5'
    },
    {
        id: 8,
        img: './assets/img/image 28 (1).png',
        title: 'USB flash drive',
        coinimg: './assets/icons/Coin 1.png',
        coin: '299 Coin',
        mavjud: '21'
    },
    {
        id: 9,
        img: './assets/img/image 29 (1).png',
        title: 'Smartphone',
        coinimg: './assets/icons/Coin 1.png',
        coin: '3699 Coin',
        mavjud: '2'
    },
    {
        id: 10,
        img: './assets/img/image 30 (1).png',
        title: 'PlayStation',
        coinimg: './assets/icons/Coin 1.png',
        coin: '7499 Coin',
        mavjud: '1'
    },
    {
        id: 11,
        img: './assets/img/image 31 (1).png',
        title: 'Yandex Station',
        coinimg: './assets/icons/Coin 1.png',
        coin: '1999 Coin',
        mavjud: '4'
    },
    {
        id: 12,
        img: './assets/img/image 32 (1).png',
        title: 'Planshet Samsung',
        coinimg: './assets/icons/Coin 1.png',
        coin: '4999 Coin',
        mavjud: '24'
    }
]

let wrapper = document.getElementById('wrapper')

const ReadFunction = (items = baza) => {
    wrapper.innerHTML = '';

    items.map((v) => {
        let div = document.createElement('div');
        div.classList.add('w-[22%]', 'h-[290px]', 'rounded-[30px]', 'shadow-lg', 'flex', 'flex-col', 'items-center', 'justify-center', 'gap-[50px]');
        div.innerHTML =
            `
            <div>
                <div>
                    <img class="w-[135px] h-[135px]" src="${v.img}" alt="">
                </div>
                <div class="flex flex-col items-center gap-[17px] ">
                    <p class="title font-[Inter] text-[black] font-[500] text-[15px]">${v.title}</p>
                    <div class="flex items-center gap-[15px]">
                        <img src="${v.coinimg}" alt="">
                        <p class="coin text-[#000000AB] font-[500] text-[16px] font-[Inter]">${v.coin}</p>
                    </div>
                </div>
            </div>
            <div>
                <p class="mavjud font-[Inter] text-[black] font-[300] text-[13px]">${v.mavjud} dona mavjud</p>
            </div>
        `;
        wrapper.appendChild(div);
    });
};


ReadFunction();

let input = document.getElementById('input');
let button = document.getElementById('button');

const SearchFunction = () => {
    let searchvalue = input.value.toLowerCase()
    let filteredtitle = baza.filter((v) => v.title.toLowerCase().includes(searchvalue));

    if (filteredtitle.length > 0) {
        ReadFunction(filteredtitle);
    } else {
        alert('Bunday Tovar Yoq');
        ReadFunction();
    }
};

button.addEventListener('click', () => {
    SearchFunction()
});