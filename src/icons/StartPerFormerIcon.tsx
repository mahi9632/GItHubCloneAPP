const StartPerFormerIcon = () => (
    <svg
  width="35"
  height="35"
  viewBox="0 0 256 256"
  xmlns="http://www.w3.org/2000/svg"
>
  <circle cx="128" cy="128" r="124" fill="#ffffff"/>

  <defs>
    <radialGradient id="bgStar" cx="50%" cy="40%" r="65%">
      <stop offset="0%" stop-color="#fff4cc"/>
      <stop offset="100%" stop-color="#ffb703"/>
    </radialGradient>
  </defs>

  <circle cx="128" cy="128" r="110" fill="url(#bgStar)"/>

  <circle cx="128" cy="140" r="58" fill="#f6d54a" stroke="#1f2328" stroke-width="4"/>

  <circle cx="82" cy="118" r="20" fill="#1f2328"/>
  <circle cx="174" cy="118" r="20" fill="#1f2328"/>

  <polygon
    points="100,132 104,140 112,142 104,146 100,154 96,146 88,142 96,140"
    fill="#ff7b00"
  />
  <polygon
    points="156,132 160,140 168,142 160,146 156,154 152,146 144,142 152,140"
    fill="#ff7b00"
  />

  <path
    d="M96 160 Q128 180 160 160"
    fill="none"
    stroke="#1f2328"
    stroke-width="5"
  />

  <polygon
    points="128,40 136,60 158,60 140,74 148,96 128,82 108,96 116,74 98,60 120,60"
    fill="#ffd700"
    stroke="#b8860b"
    stroke-width="3"
  />
</svg>


);

export default StartPerFormerIcon;