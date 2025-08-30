export function Card({image, title, description}) {
    return (
        <div className="bg-gray-900 text-white flex justify-center items-center min-h-screen">
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
          <img
            className="w-full h-48 object-cover"
            src={image}
            alt="Meal"
          />
          <div className="px-6 py-4 bg-gray-500">
            <div className="font-bold text-xl mb-2">{title}</div>
            <p className="text-gray-300 text-base">
              {description}
            </p>
          </div>
        </div>
      </div>
    )
}