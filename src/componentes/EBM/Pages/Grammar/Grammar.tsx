// src/componentes/EBM/Pages/Grammar/Grammar.tsx
const Grammar = () => {
  return (
    <main className="min-h-screen p-s-md bg-white text-c-text">
      <div className="max-w-c-mw-md mx-auto">
        <h1 className="text-h-lg text-c-active-one border-b-4 border-c-active-two pb-2 mb-s-md">
          Grammar Guide
        </h1>
        
        <section className="flex flex-col gap-s-sm">
          <article className="bg-gray-50 p-4 rounded-r-mmd border-l-8 border-c-active-three">
            <h3 className="text-h-sm text-c-active-six">Present Simple</h3>
            <p className="text-body mt-2 leading-relaxed">
              Use this tense for habits, facts, and states that are generally true.
              <br /><strong>Example:</strong> I study English every day.
            </p>
          </article>
          
          {/* Repetir estructura para otros temas gramaticales */}
        </section>
      </div>
    </main>
  );
};

export default Grammar;