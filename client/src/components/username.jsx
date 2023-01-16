import React from "react";
import { Link } from "react-router-dom";

const UserName = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center h-screen">
        <div className="bg-slate-200 px-20 py-28 rounded-md">
          {/* title & sub title */}
          <div className="title_subTitle text-center">
            <h4 className="text-5xl font-bold mb-2">Hey, Again!</h4>
            <span>Explore more by connnecting with use</span>
          </div>

          {/* form */}
          <form className="text-center flex gap-6 flex-col">
            <div className="proifle-img flex items-center justify-center mt-6">
              <img
                className="w-20"
                src="https://cdn-icons-png.flaticon.com/512/147/147142.png"
                alt="profile_photo"
              />
            </div>

            <div className="textBox">
              <input
                className="w-full py-4 px-6 rounded-md"
                type="text"
                placeholder="Username"
              />
              <button
                className="w-full py-4 px-6 rounded-md bg-blue-700 text-white mt-4"
                type="submit"
              >
                Let's Go
              </button>
            </div>

            <div className="not-a-member">
              <span>
                Not a Menber{" "}
                <Link className="text-red-500" to="/register">
                  Register Now
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserName;
