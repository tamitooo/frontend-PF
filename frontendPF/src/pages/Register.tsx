import React, { useState } from "react";

import { useNavigate } from "react-router-dom";


const Register: React.FC = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    nombre: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex justify-center items-center w-full">
        <div className="w-[1100px] flex items-center justify-center">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col lg:flex-row items-start gap-20 justify-center items-center"
            >
              <h1 className="font-koulen font-bold text-left text-[57px] text-[#FCF7D5] m-0 p-0">
                Your Smart <br /> Tech <br />
                Journey <br /> Starts Here. 
              </h1>
              <div className="w-px h-80 mx-4 bg-white"></div>
              <section className="text-left">
                <h1 className="font-koulen font-bold text-center text-[48px] text-white">
                  Create An Account
                </h1>

                <div className="mt-3">
                  <div className="mb-3">
                    <label className="ml-5 font-judson block text-[26px] font-medium text-white mb-1">
                      Name
                    </label>
                    <div className="flex items-center justify-center">
                      <input
                        value={userData.nombre}
                        onChange={(e) =>
                          setUserData({ ...userData, nombre: e.target.value })
                        }
                        className="w-[472px] p-3 pl-5 bg-[#D9D9D9] text-primary font-jaldi italic placeholder-[#6D6D6D]"
                        placeholder="Enter your name"
                        type="text"
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="ml-5 font-judson block text-[26px] font-medium text-white mb-1">
                      Email
                    </label>
                    <div className="flex items-center justify-center">
                      <input
                        value={userData.email}
                        onChange={(e) =>
                          setUserData({ ...userData, email: e.target.value })
                        }
                        className="w-[472px] p-3 pl-5 bg-[#D9D9D9] text-primary font-jaldi italic placeholder-[#6D6D6D]"
                        placeholder="Enter your email"
                        type="email"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="ml-5 font-judson block text-[26px] font-medium text-white mb-1">
                      Password
                    </label>
                    <div className="flex items-center justify-center">
                      <input
                        value={userData.password}
                        onChange={(e) =>
                          setUserData({ ...userData, password: e.target.value })
                        }
                        className="w-[472px] p-3 pl-5 bg-[#D9D9D9] text-primary font-jaldi italic placeholder-[#6D6D6D]"
                        placeholder="Enter your password"
                        type="password"
                      />
                    </div>
                  </div>

                  {error && (
                    <p className="text-red-500 text-center font-Judson mb-4">{error}</p>
                  )}

                  <div className="flex justify-center">
                    <button
                      type="submit"
                      className="pb-8 font-koulen text-[30px] bg-transparent border-none outline-none text-amarillo3 hover:underline transition duration-200"
                    >
                      Register
                    </button>
                  </div>
                </div>
              </section>
            </form>
          </div>
      </div>
    </div>
  );
};

export default Register;
