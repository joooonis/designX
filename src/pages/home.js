import { push } from '../libs/router';

export default function Home({ target }) {
  const page = document.createElement('div');
  page.className = 'home';

  page.innerHTML = `<div
  class="relative overflow-hidden bg-gradient-to-b from-[rgba(255,244,228,1)] to-[rgba(240,246,238,1)] from-[7%] to-70% flex-col justify-center items-center h-[calc(100vh-2.5rem)] m-5"
>
  <div
    class="w-full absolute top-44 text-[#403227] title text-xl my-auto font-medium text-center"
  >
    The story of a liite dugeong, MIRAE
  </div>

  <div class="absolute bottom-0 origin-bottom left-16">
    <image class="leaf-1" src="./assets/svg/leaf-green-1.svg" width="40" />
  </div>
  <div class="absolute bottom-0 origin-bottom right-16 leaf-2">
    <image src="./assets/svg/leaf-green-2.svg" width="10" />
  </div>
  <div
    class="reveal bg-center bg-[length:110%_110%] bg-[url('./assets/mirae/background.png')] opacity-0 scale-110 mx-auto h-96 w-96 z-10 translate-y-60 items-center flex-col relative flex justify-center trnaslate-y-1/2"
  >
    <image
      class="absolute translate-y-1"
      src="./assets/mirae/body.png"
      width="440"
    />
    <image
      class="fin-1 absolute left-40 origin-top-left"
      src="./assets/mirae/fin-1.svg"
      width="70"
    />
    <image
      class="fin-2 absolute -z-10 left-[13.5rem] top-40 origin-top"
      src="./assets/mirae/fin-2.svg"
      width="36"
    />
    <image
      class="fin-3 absolute -z-20 left-60 top-36 origin-top"
      src="./assets/mirae/fin-3.svg"
      width="48"
    />
  </div>
  <div
    class="reveal translate-y-[28rem] z-10 opacity-0 items-center flex-col absolute top-1/4 w-full flex justify-center trnaslate-y-1/2"
  >
    <image
      class="hover:opacity-90 cursor-pointer -translate-y-16"
      src="./assets/svg/enter-button.svg"
      width="280"
    />
  </div>
  <div class="absolute bottom-0 origin-bottom right-24 leaf-3">
    <image src="./assets/svg/leaf-green-3.svg" width="16" />
  </div>
  <div class="relative" id="snow"></div>
</div>`;

  page.querySelector('.reveal').addEventListener('click', () => {
    push('new');
  });

  this.render = () => {
    target.appendChild(page);
  };

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };
}
