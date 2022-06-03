export const ShoppingBasket = (props) => (
  <svg width={24} height={24} fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <mask
      id='a'
      style={{
        maskType: 'alpha',
      }}
      maskUnits='userSpaceOnUse'
      x={0}
      y={0}
      width={24}
      height={24}
    >
      <path fill='#D9D9D9' d='M0 0h24v24H0z' />
    </mask>
    <g mask='url(#a)'>
      <path
        d='M5.25 20.5c-.25 0-.47-.075-.662-.225a1.096 1.096 0 0 1-.388-.6l-2.625-9.35a.52.52 0 0 1 .088-.563C1.804 9.587 2 9.5 2.25 9.5h5l4.125-6.175a.835.835 0 0 1 .263-.25.675.675 0 0 1 .712 0c.117.067.2.15.25.25L16.725 9.5h5.025c.25 0 .446.087.587.262a.52.52 0 0 1 .088.563l-2.625 9.35a1.18 1.18 0 0 1-.437.6c-.209.15-.438.225-.688.225H5.25Zm3.825-11h5.85l-2.95-4.4-2.9 4.4Zm2.925 7c.417 0 .77-.146 1.062-.438.292-.291.438-.645.438-1.062 0-.417-.146-.77-.438-1.062A1.444 1.444 0 0 0 12 13.5c-.417 0-.77.146-1.062.438A1.444 1.444 0 0 0 10.5 15c0 .417.146.77.438 1.062.291.292.645.438 1.062.438ZM5.5 19h13l2.2-8H3.3l2.2 8Z'
        fill='#1C1B1F'
      />
    </g>
  </svg>
);
