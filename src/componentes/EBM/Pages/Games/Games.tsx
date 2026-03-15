// src/componentes/EBM/Pages/Games/Games.tsx
const Games = () => {
  return (
    <main className="min-h-screen p-s-md flex flex-col items-center">
      <h1 className="text-h-lg text-c-text drop-shadow-outline uppercase mb-s-lg">
        English Battle Games
      </h1>
      
      {/* Contenedor de Juegos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-s-md w-full max-w-c-mw-lg">
        {/* Ejemplo de Card de Juego */}
        <div className="bg-white rounded-r-mmd p-s-sm shadow-btn-sm hover:scale-105 transition-transform cursor-pointer">
          <div className="h-40 bg-c-active-two rounded-r-mmd mb-4 flex items-center justify-center">
            <span className="text-c-text font-bold">GAME PREVIEW</span>
          </div>
          <h2 className="text-h-sm text-c-text">Verb Tense Warrior</h2>
          <p className="text-c-text-two text-body">Fight the monsters using the correct verb forms!</p>
        </div>
        
        {/* Aquí puedes mapear o añadir más cards similares */}
      </div>
    </main>
  );
};

export default Games;