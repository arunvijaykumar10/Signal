import ProfileWireframe from "./ProfileSettings";

const UserProfileWireframe = () => {
  return (
    <div className="bg-gray-50 p-6 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">User Profile & Preferences</h1>

        {/* Profile Content */}
        <div className="bg-white rounded-lg shadow p-6">
          <ProfileWireframe />
        </div>
      </div>
    </div>
  );
};

export default UserProfileWireframe;