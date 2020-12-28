module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs:"320px",
      sm: "576px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },

  
    textFillColor: (theme) => theme("transparent"),
    textStrokeWidth: (theme) => theme("3px"),

    extend: {
      colors: {
        footer: "#3e3e3e",
        "sidebar-text": "#818181",
        sidebar: "#111",
        transparent: "transparent",
        h3: "#17153b",
        btn:'#262261',
        yellowBtn:'#ffff00',
        clipColor1:'#f0e350',
        clipColor2:'#e52f7b'
      
      },

      fontSize: {
        h1: "4.25rem",
        globe: "5.625rem",
        1.3:'1.3rem',
        0.9:'0.9rem',
        2.5:'2.5rem',
        6.8:'6.8rem',
        5 :'5rem',
        10:'10rem',
        '2.5':'2.5rem',
        '3.12':'3.12rem',
        '3.43':'3.43rem'
      
     

      },
      fontFamily: {
        display: ['"Proxima Nova"', "sans-serif"],
        smallText:['Roboto', 'sans-serif']
      },

      lineHeight: {
        '0.9': "0.9",
        '1.65': "1.65",
        '1.2': "1.2",
        '0.8':'0.8',
        '1.4':'1.4',
         '1':'1'
    

      },

      spacing:
      {
        '75':'75rem'
      },
      backgroundSize:
      {
        '60':'60%'
      },

      margin:
      {
        '15':'-15px',
      },
    
    

    gradientColorStops: (theme) => ({
      primary: "#fff200",
      secondary: "#fdba12",
      third: "#dc1e45",
      fourth: "#fff200",
    }),
    
    backgroundImage: theme => ({
      'grated-pattern': "url('/images/svg/GratedBackground.svg'), linear-gradient(180deg, #f0e530, #e52f7b) ",
       'globe': "url('/images/globe.png')",
      
    }),
   
  }
   
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss-text-fill-stroke")()
  
],

}
  
