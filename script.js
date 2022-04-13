// Featured Speakers
const speakers = [
  {
    name: 'Vitalik Buterin',
    title: 'Co-fundator blockchain Ethereum',
    description: 'Buterin is a co-founder and inventor of Ethereum, described as a "decentralised mining network and software development',
    imageUrl: 'images/vitalik.png',
  },
  {
    name: 'Changpeng Zhao',
    title: 'Founder & Ceo of Binance',
    description: 'Zhao is the founder and CEO of one of the world\'s largest cryptocurrency exchanges.',
    imageUrl: 'images/zhao.png',
  },
  {
    name: 'Charlie Lee',
    title: 'Creator of Litecoin',
    description: 'Charlie Lee, the creator of Litecoin (LTC), one of the earliest altcoins, is best known as a highly successful entrepreneur in the emerging cryptocurrency industry.',
    imageUrl: 'images/lee.png',
  },
  {
    name: 'Anatoly Yakovenko',
    title: 'Founder blockchain Solana',
    description: 'Anatoly is the creator of Solana. He led development of operating systems at Qualcomm, distributed systems at Mesosphere, and compression at Dropbox.',
    imageUrl: 'images/yakovenko.png',
  },
  {
    name: 'Evan Duffield',
    title: 'Creator of Dash Coin',
    description: 'Duffield is responsible for creations like the X11 mining algorithm and Dash, a cryptocurrency.',
    imageUrl: 'images/evan.png',
  },
  {
    name: 'Bobby Bao',
    title: 'Co-founder of Crypto.com',
    description: 'Bobby Bao is a cofounder and managing director of CRYPTO.com, a payment and cryptocurrency platform founded in 2016.',
    imageUrl: 'images/bao.png',
  },
];

const firstSpeakers = document.querySelector('.featured-speakers');
const otherSpeakers = document.querySelector('.other-speakers');

for (let i = 0; i <= speakers.length - 1; i += 1) {
  const speaker = `
    <div class="speaker">
      <div class="speaker-img">
        <img src="${speakers[i].imageUrl}" alt="speaker" />
      </div>
      <div class="text-speaker">
        <h3>${speakers[i].name}</h3>
        <h4>${speakers[i].title}</h4>
        <div class="gray-line"></div>
        <p>${speakers[i].description}</p>
      <div>
    </div>
`;
  if (i < 2) {
    firstSpeakers.insertAdjacentHTML('beforeend', speaker);
  } else {
    otherSpeakers.insertAdjacentHTML('beforeend', speaker);
  }
}

// More button

const moreButton = document.querySelector('.button-speaker');
let moreOpen = false;

function otherSpeakersDisplay() {
  if (!moreOpen) {
    otherSpeakers.style.display = 'flex';
    moreButton.style.display = 'none';
    moreOpen = true;
  }
}

moreButton.addEventListener('click', otherSpeakersDisplay);