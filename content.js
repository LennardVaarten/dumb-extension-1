let images = ["https://i.guim.co.uk/img/media/e3378d756c18263fcba6ca9b195b3d10e44107cf/90_1884_7568_4537/master/7568.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=5c5f7c0fc479f8399b7a6dd1a5d31128",
    "https://images0.persgroep.net/rcs/zuAl0QlfRJLV66AEKI7kVqsOmNE/diocontent/169372761/_fitwidth/694/?appId=21791a8992982cd8da851550a453bd7f&quality=0.8&desiredformat=webp",
    "https://www.udiscovermusic.nl/wp-content/uploads/sites/5/2018/08/macca.jpg",
    "https://oor.nl/media/2021/05/paul_mccartney_press_2020.jpg"
];

console.log(images.length);

const imgs = document.getElementsByTagName("img");

for (let i = 0; i < imgs.length; i++) {
    const randomImg = Math.floor(Math.random() * images.length);
    imgs[i].src = images[randomImg];
}

const headers = document.getElementsByTagName("h3");
for (let i = 0; i < headers.length; i++) {
    headers[i].innerText = 'Macca';
}

function gotMessage(msg, sender, sendResponse) {
    console.log(msg.txt);
    reutrn true;
}