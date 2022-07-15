export const font = ({ fs, fw, lh }) => `
  font-size: ${fs ? `${fs}px` : "16px"};
  font-weight: ${fw ?? 500};
  line-height: ${lh ? Number(lh / fs).toFixed(1) : 1.5};`;

export const flexCenter = ({ fw, ai, jc }) => `
display: flex;
flex-wrap: ${fw ?? "no-wrap"};
align-items:${ai ?? "center"};
justify-content:${jc ?? "center"};
  `;

export const centerBlock = `
  display: block;
  margin: 0 auto;
`;

export const widthHeight = (w, h) => `
  width: ${w}px;
  height: ${h ? `${h}px` : "auto"} ;
`;
