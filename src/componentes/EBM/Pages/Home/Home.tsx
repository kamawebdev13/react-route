import Logo from '../../../../assets/images/logo.svg'

const Home = () => {
  return (
    <main className="w-full">
      <section className="w-full max-w-242.5 mx-auto min-h-[calc(100vh-80px)] bg-[url('./assets/images/hero-background.webp')] bg-cover bg-center bg-no-repeat flex flex-col items-center pt-16 px-4">

        {/* Logo Wrapper */}
        <div className="w-full max-w-[clamp(15rem,80vw,55rem)]">
          <img src={Logo} alt="logo" className="w-full h-auto block mx-auto pointer-events-none"
          />
        </div>

        {/* Título con sombra de borde */}
<svg 
  className="mt-[clamp(4rem,10vh,15rem)] w-full max-w-160"
  viewBox="0 0 640 100" 
  xmlns="http://www.w3.org/2000/svg"
>
  <defs>
    <style>{`@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@700&display=swap')`}</style>
    <filter id="titleShadow">
      <feDropShadow dx="2" dy="2" stdDeviation="2" floodColor="#000000" floodOpacity="0.4"/>
    </filter>
  </defs>
  <text
    x="50%" y="70"
    textAnchor="middle"
    fontFamily="'Fredoka', sans-serif"
    fontWeight="700"
    fontSize="35"
    fill="#ffffff"
    stroke="#8a9aaa"
    strokeWidth="7"
    paintOrder="stroke fill"
    filter="url(#titleShadow)"
  >
    MASTER ENGLISH GRAMMAR
  </text>
</svg>

<svg 
  className="w-full max-w-[30rem]"
  viewBox="0 0 480 90"
  xmlns="http://www.w3.org/2000/svg"
>
  <defs>
    <filter id="titleShadow2">
      <feDropShadow dx="2" dy="2" stdDeviation="2" floodColor="#000000" floodOpacity="0.4"/>
    </filter>
  </defs>
  <text
    x="50%" y="65"
    textAnchor="middle"
    fontFamily="'Fredoka', sans-serif"
    fontWeight="700"
    fontSize="35"
    fill="#ffffff"
    stroke="#8a9aaa"
    strokeWidth="8"
    paintOrder="stroke fill"
    filter="url(#titleShadow2)"
  >
    THROUGH FUN GAMES!
  </text>
</svg>

      </section>
    </main>
  );
};

export default Home;