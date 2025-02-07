function Card({ title, value }) {
    return (
      <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
        <h3 className="text-lg font-semibold dark:text-white">{title}</h3>
        <p className="text-2xl font-bold mt-2 dark:text-gray-200">{value}</p>
      </div>
    );
  }
  
  export default Card;
  