import profileImage from '../../assets/profile.jpg';

const Dashboard = () => {
  return (
    <div className="flex h-screen items-center">
      <div className="flex p-10 ">
        <div className="flex-1 flex flex-col justify-center pl-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Clean UI/UX Design</h1>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. In ad saepe maiores vero illo voluptates veritatis nulla, unde libero consequatur officiis sed numquam beatae, cumque esse hic deserunt architecto blanditiis.
          </p>
          <div>
            <button className="bg-gray-900 text-white px-4 py-2 rounded mr-4 hover:bg-gray-800">
              Register Now
            </button>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 border border-gray-900 px-4 py-2 rounded hover:bg-gray-100"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <img src={profileImage} alt="Profile" className="h-80 mix-blend-darken rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
