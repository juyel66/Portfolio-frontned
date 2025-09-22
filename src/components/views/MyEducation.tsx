const MyEducation = () => {
  return (
    <div>
      <div>
        <div className="flex items-center justify-center">
          <h1 className="text-2xl md:text-3xl text-center text-white font-bold border-b-2 border-[#64B5F6] inline-block">
            My <span className="text-[#64B5F6]">Education</span>
          </h1>
        </div>
      </div>

      {/* ================= University & Academic ================= */}
      <div className="container mx-auto px-5 py-5 h-full">
        <div>
          <h1
            data-aos-duration="1000"
            data-aos="zoom-in-down"
            className="text-2xl font-semibold text-center text-blue-300 pt-10 pb-10"
          >
            Academic Educational Qualification
          </h1>
        </div>

        <div className="text-white">
          {/* University */}
          <div
            data-aos-duration="700"
            data-aos="fade-up"
            className="flex gap-10"
          >
            <div className="w-1/2 text-end hidden md:block">
              <h1 className="text-2xl font-semibold">
                Bachelor of Science (B.Sc.)
              </h1>
              <p className="text-xl">Computer Scinece & Engineering</p>
              <p className="text-xl"> </p>
              <h2>Uttara University, Dhaka</h2>
              <p>Session: 2025 - 2028</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="h-5 w-5 rounded-full bg-blue-300"></div>
              <div className="h-44 w-[2px] bg-blue-300"></div>
            </div>
            <div className="text block md:hidden">
              <h1 className="text-2xl font-semibold">
                Bachelor of Science (B.Sc) in Computer Science & Engineering
              </h1>
              
              <h2>Uttara University, Dhaka</h2>
              
              <p>Session: 2025 - 2028</p>
            </div>
            <div className="w-1/2 hidden md:block"></div>
          </div>

        
          {/* SSC */}
          <div
            data-aos-duration="1100"
            data-aos="fade-up"
            className="flex gap-10"
          >
            <div className="w-1/2 hidden md:block"></div>
            <div className="flex flex-col justify-center items-center">
              <div className="h-5 w-5 rounded-full bg-blue-300"></div>
              <div className="h-44 w-[2px] bg-blue-300"></div>
            </div>
            <div className="w-full md:w-1/2">
              <h1 className="text-2xl font-semibold">
                Diploma In Engineering
              
              </h1>
              <p className="text-xl">(Computer Technology)</p>
                <p>August 2020 - January 2024</p>
              <p>Result - 3.82 out of 4.00</p>
             
              
            </div>
          </div>
                    <div
            data-aos-duration="800"
            data-aos="fade-up"
            className="flex gap-10"
          >
            <div className="w-1/2 text-end hidden md:block">
              <h1 className="text-2xl font-semibold">
                
                  Secondary School Certificate (SSC)
                
              </h1>
               <h2>Bondiara High School, Pirganj, Thakurgaon</h2>
            
              <p>January 2015 - January 2019</p>
             
              
            
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="h-5 w-5 rounded-full bg-blue-300"></div>
              <div className="h-44 w-[2px] bg-blue-300"></div>
            </div>
            <div className="text block md:hidden">
              <h1 className="text-2xl font-semibold">
                Secondary School Certificate (SSC)
              </h1>
              <h2>Bondiara High School, Pirganj, Thakurgaon</h2>
              <p>January 2018 - December 2019</p>
              
            </div>
            <div className="w-1/2 hidden md:block"></div>
          </div>



        </div>

        {/* ================= Short Courses ================= */}
        <div>
          <h1
            data-aos-duration="1000"
            data-aos="zoom-in-down"
            className="text-2xl font-semibold text-center text-blue-300 pt-20 pb-10"
          >
            Special Short Courses
          </h1>
        </div>
        <div className="text-white">
          <div>
            <div
              data-aos-duration="800"
              data-aos="fade-up"
              className="flex gap-10"
            >
              <div className="w-1/2 hidden md:block"></div>
              <div className="flex flex-col justify-center items-center">
                <div className="h-5 w-5 rounded-full bg-blue-300"></div>
                <div className="h-44 w-[2px] bg-blue-300"></div>
              </div>
              <div className="w-full md:w-1/2">
                <h1 className="text-2xl font-semibold">
                  Complete Web Development
                </h1>
                <h2>Programming Hero</h2>
                <p>January 2024 - October 2024</p>
              </div>
            </div>

            <div
              data-aos-duration="1100"
              data-aos="fade-up"
              className="flex gap-10"
            >
              <div className="w-1/2 hidden md:block text-end">
                <h1 className="text-2xl font-semibold">
                  Industrial Attachment MERN stack Development
                </h1>
                <h2>Daffodil International Professional Training Institute(DIPTI)</h2>
                <p>July 2024 - November 2024</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <div className="h-5 w-5 rounded-full bg-blue-300"></div>
                <div className="h-44 w-[2px] bg-blue-300"></div>
              </div>
              <div className="w-full md:hidden">
                <h1 className="text-2xl font-semibold">
                  Industrial Attachment MERN stack Development
                </h1>
                <h2>Daffodil International Professional Training Institute(DIPTI)</h2>
                <p>July 2024 - November 2024</p>
              </div>
              <div className="w-1/2 hidden md:block"></div>
            </div>

            <div
              data-aos-duration="1400"
              data-aos="fade-up"
              className="flex gap-10"
            >
              <div className="w-1/2 hidden md:block"></div>
              <div className="flex flex-col">
                <div className="h-5 w-5 rounded-full bg-blue-300"></div>
              </div>
              <div className="w-full md:w-1/2">
                <h1 className="text-2xl font-semibold">
                  Next Level Web Development
                </h1>
                <h2>Programming Hero</h2>
                <p>November 2024 - May 2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyEducation;
