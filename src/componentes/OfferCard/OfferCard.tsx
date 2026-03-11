interface OfferCardProps {
  title: string;
  company: string;
  location: string;
  isUrgent: boolean;
}

const OfferCard = ({ title, company, location, isUrgent }: OfferCardProps) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow flex flex-col items-center text-center">
      <div>
        <h3 className="text-xl font-bold text-gray-800">
            {title}
        </h3>
        <p className="text-gray-500">{company}</p>
        
        <div className="mt-4 flex flex-wrap justify-center items-center gap-3">
          {/* Badge Ubicación */}
          <span className={`inline-flex items-center gap-1 rounded-full border px-3.5 py-1.5 text-sm font-semibold shadow-sm transition-colors ${
            location === 'Remote'
              ? 'border-blue-200 bg-blue-50 text-blue-700'
              : 'border-gray-200 bg-gray-50 text-gray-700'
            }`}>
            <span aria-hidden="true">📍</span>
            {location}
          </span>

          {/* Badge Urgente */}
          {isUrgent && (
            <span className="inline-flex items-center gap-1 rounded-full border border-red-100 bg-red-50 px-3.5 py-1.5 text-sm font-semibold text-red-700 shadow-sm">
              <span aria-hidden="true">🔥</span>
              Urgent
            </span>
          )}
        </div>

        <div className="mt-6">
          <button
            className="inline-flex items-center gap-2 rounded-lg bg-linear-to-r from-slate-800 to-slate-900 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:from-blue-900 hover:to-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 active:scale-95"
            onClick={() => alert(`Applying for ${title} at ${company}`)}
          >
            <span>Apply Now</span>
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default OfferCard