const sizes = {
    xxlMax: '1440px',
    xlMax: '1280px',
    lgMax: '1024px',
    mdMax: '768px',
    smMax : "640pxpx",
    xsMax: '375.1px',
  };
  
  const devices = {
    xxlMax: `(max-width: ${sizes.xxlMax})`,
    xlMax: `(max-width: ${sizes.xlMax})`,
    lgMax: `(max-width: ${sizes.lgMax})`,
    mdMax: `(max-width: ${sizes.mdMax})`,
    smMax: `(max-width: ${sizes.smMax})`,
    xsMax: `(max-width: ${sizes.xsMax})`,
  };
  
  export default devices;
  