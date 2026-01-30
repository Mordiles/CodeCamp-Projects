export const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center bg-gray-300">
      <div className="grid grid-cols-3 gap-4 text-xs my-4">
        <ul className="flex flex-col items-center">
          <li>
            <a href="#">Fitness Dashboard</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
        </ul>

        <ul className="flex flex-col items-center">
          <li>
            <a href="#">Watch Videos</a>
          </li>
          <li>
            <a href="#">Discord</a>
          </li>
        </ul>

        <ul className="flex flex-col items-center">
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Terms & Conditions</a>
          </li>
        </ul>
      </div>

      <div className="text-center">
        <p className="text-gray-500 text-xs">
          © 2024 Fitness Dashboard. All Rights Reserved.
        </p>
        <span>🎮 🐦 💻 🏀</span>
      </div>
    </footer>
  );
};
