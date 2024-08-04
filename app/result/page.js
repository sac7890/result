import Navabar from "@/components/Navbar";

const page = () => {
  return (
    <div>
      <Navabar isLoggedIn={true} />

      <div className="flex flex-col md:flex-row my-8 mx-6 justify-between md:mx-24">
        <div className="col-md-4">
          <div className=" border-[#347ab7] border-2 rounded-lg mb-6">
            <div className="w-full bg-[#347ab7] text-white text-2xl flex items-center py-2 px-4 ">
              Welcome
            </div>
            <div className="p-3">
              <table className="border divide-y">
                <tbody className="bg-white divide-y">
                  <tr>
                    <th className="font-[Verdana] ftext-[15px] width:125px">
                      Roll No.:
                    </th>
                    <td className="text-[#003A6A] font-[Verdana] text-[15px]">
                      21124090
                    </td>
                  </tr>
                  <tr>
                    <th className="font-[Verdana] text-[15px]">Name:</th>
                    <td className="text-[#003A6A;  font-[Verdana] text-[15px]">
                      SACHIN CHAUDHARY
                    </td>
                  </tr>
                  <tr>
                    <th className="font-[Verdana] text-[15px]">Course:</th>
                    <td className="text-[#003A6A; font-[Verdana] text-[15px]">
                      B.Tech
                    </td>
                  </tr>
                  <tr>
                    <th className="font-[Verdana] text-[15px]">Branch :</th>
                    <td className="text-[#003A6A; font-[Verdana] text-[15px]">
                      INFORMATION TECHNOLOGY
                    </td>
                  </tr>

                  <tr>
                    <th className="font-[Verdana] text-[15px]">Semester:</th>
                    <td className="text-[#003A6A; font-[Verdana] text-[15px]">
                      6th
                    </td>
                  </tr>

                  <tr>
                    <th className="font-[Verdana] text-[15px]">Batch:</th>
                    <td className="text-[#003A6A; font-[Verdana] text-[15px]">
                      2021
                    </td>
                  </tr>

                  <tr>
                    <th className="font-[Verdana] text-[15px]">
                      Father's Name:
                    </th>
                    <td className="text-[#003A6A; font-[Verdana] text-[15px]">
                      Sh. MAHIPAL SINGH
                    </td>
                  </tr>

                  <tr>
                    <th className="font-[Verdana] text-[15px]">
                      Mother's Name:
                    </th>
                    <td className="text-[#003A6A] font-[Verdana] text-[15px]">
                      Smt. USHA DEVI
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className=" border-[#347ab7] border-2 rounded-lg">
            <div className="w-full bg-[#347ab7] text-white text-2xl flex items-center py-2 px-4 ">
              Result - Examination (June 2024)
            </div>
            <div className="p-3">
              <div className="row">
                <div className="col-md-12">
                  <table className="border divide-y">
                    <tbody className="bg-white divide-y">
                      <tr>
                        <th
                          className="font-[Verdana] w-[90px] w- text-[14px]"
                          align="center"
                        >
                          Course Code
                        </th>
                        <th className="font-[Verdana] text-[14px]">
                          Course Title
                        </th>
                        <th className="font-[Verdana] width: 50px;text-[14px] text-align:center">
                          Course Credits
                        </th>
                        <th className="font-[Verdana] width: 50px;text-[14px] text-align:center">
                          Grade
                        </th>
                        <th className="font-[Verdana] width: 50px;text-[14px] text-align:center">
                          Attendance Grade
                        </th>
                        <th className="font-[Verdana] width: 50px;text-[14px] text-align:center">
                          Credits Earned
                        </th>
                      </tr>

                      <tr>
                        <td className="text-[#000000] font-[Verdana] text-[15px]">
                          ITPC-302
                        </td>
                        <td className="text-[#000000] font-[Verdana] text-[15px]">
                          Soft Computing Concepts
                        </td>
                        <td
                          className="text-[#000000] font-[Verdana] text-[15px]"
                          align="center"
                        >
                          3
                        </td>
                        <td
                          className="text-[#000000] font-[Verdana] text-[15px] font-bold"
                          align="center"
                        >
                          C
                        </td>
                        <td
                          className="text-[#000000] font-[Verdana] text-[15px]"
                          align="center"
                        >
                          8
                        </td>
                        <td
                          className="text-[#000000] font-[Verdana] text-[15px] "
                          align="center"
                        >
                          3
                        </td>
                      </tr>
                      <tr>
                        <td className="text-[#000000] font-[Verdana] text-[15px]">
                          ITPC-304
                        </td>
                        <td className="text-[#000000] font-[Verdana] text-[15px]">
                          Object-Oriented Modeling and Design with UML
                        </td>
                        <td
                          className="text-[#000000] font-[Verdana] text-[15px]"
                          align="center"
                        >
                          3
                        </td>
                        <td
                          className="text-[#000000] font-[Verdana] text-[15px] font-bold"
                          align="center"
                        >
                          C
                        </td>
                        <td
                          className="text-[#000000] font-[Verdana] text-[15px]"
                          align="center"
                        >
                          9
                        </td>
                        <td
                          className="text-[#000000] font-[Verdana] text-[15px]"
                          align="center"
                        >
                          3
                        </td>
                      </tr>
                      <tr>
                        <td className="text-[#000000] font-[Verdana] text-[15px]">
                          ITPC-306
                        </td>
                        <td className="text-[#000000] font-[Verdana] text-[15px]">
                          Mobile Application Development
                        </td>
                        <td
                          className="text-[#000000] font-[Verdana] text-[15px]"
                          align="center"
                        >
                          3
                        </td>
                        <td
                          className="text-[#000000] font-[Verdana] text-[15px] font-bold"
                          align="center"
                        >
                          B
                        </td>
                        <td
                          className="text-[#000000] font-[Verdana] text-[15px]"
                          align="center"
                        >
                          8
                        </td>
                        <td
                          className="text-[#000000] font-[Verdana] text-[15px]"
                          align="center"
                        >
                          3
                        </td>
                      </tr>
                      <tr>
                        <td className="text-[#000000] font-[Verdana] text-[15px]">
                          ITPC-308
                        </td>
                        <td className="text-[#000000] font-[Verdana] text-[15px]">
                          Machine Learning Concepts
                        </td>
                        <td
                          className="text-[#000000] font-[Verdana] text-[15px]"
                          align="center"
                        >
                          3
                        </td>
                        <td
                          className="text-[#000000] font-[Verdana] text-[15px] font-bold"
                          align="center"
                        >
                          B
                        </td>
                        <td
                          className="text-[#000000] font-[Verdana] text-[15px]"
                          align="center"
                        >
                          8
                        </td>
                        <td
                          className="text-[#000000] font-[Verdana] text-[15px]"
                          align="center"
                        >
                          3
                        </td>
                      </tr>
                      <tr>
                        <td className="text-[#000000] font-[Verdana] text-[15px]">
                          ECOE-364
                        </td>
                        <td className="text-[#000000] font-[Verdana] text-[15px]">
                          Soft Computing
                        </td>
                        <td
                          className="text-[#000000] font-[Verdana] text-[15px]"
                          align="center"
                        >
                          3
                        </td>
                        <td
                          className="text-[#000000] font-[Verdana] text-[15px] font-bold"
                          align="center"
                        >
                          C
                        </td>
                        <td
                          className="text-[#000000] font-[Verdana] text-[15px]"
                          align="center"
                        >
                          8
                        </td>
                        <td
                          className="text-[#000000] font-[Verdana] text-[15px]"
                          align="center"
                        >
                          3
                        </td>
                      </tr>
                      <tr>
                        <td className="text-[#000000] font-[Verdana] text-[15px]">
                          ITPE-055
                        </td>
                        <td className="text-[#000000] font-[Verdana] text-[15px]">
                          Software Project Management Concepts
                        </td>
                        <td
                          className="text-[#000000] font-[Verdana] text-[15px]"
                          align="center"
                        >
                          4
                        </td>
                        <td
                          className="text-[#000000] font-[Verdana] text-[15px] font-bold"
                          align="center"
                        >
                          D
                        </td>
                        <td
                          className="text-[#000000] font-[Verdana] text-[15px]"
                          align="center"
                        >
                          9
                        </td>
                        <td
                          className="text-[#000000] font-[Verdana] text-[15px]"
                          align="center"
                        >
                          4
                        </td>
                      </tr>
                      <tr>
                        <td className="text-[#000000] font-[Verdana] text-[15px]">
                          ITPC-301
                        </td>
                        <td className="text-[#000000] font-[Verdana] text-[15px]">
                          Minor Project
                        </td>
                        <td
                          className="text-[#000000] font-[Verdana] text-[15px]"
                          align="center"
                        >
                          2
                        </td>
                        <td
                          className="text-[#000000] font-[Verdana] text-[15px] font-bold"
                          align="center"
                        >
                          C
                        </td>
                        <td
                          className="text-[#000000] font-[Verdana] text-[15px]"
                          align="center"
                        >
                          8
                        </td>
                        <td
                          className="text-[#000000] font-[Verdana] text-[15px]"
                          align="center"
                        >
                          2
                        </td>
                      </tr>
                      <tr>
                        <td className="text-[#000000] font-[Verdana] text-[15px]">
                          ITPC-322
                        </td>
                        <td className="text-[#000000] font-[Verdana] text-[15px]">
                          Soft Computing Concepts Laboratory
                        </td>
                        <td
                          className="text-[#000000] font-[Verdana] text-[15px]"
                          align="center"
                        >
                          1
                        </td>
                        <td
                          className="text-[#000000] font-[Verdana] text-[15px] font-bold"
                          align="center"
                        >
                          C
                        </td>
                        <td
                          className="text-[#000000] font-[Verdana] text-[15px]"
                          align="center"
                        >
                          9
                        </td>
                        <td
                          className="text-[#000000] font-[Verdana] text-[15px]"
                          align="center"
                        >
                          1
                        </td>
                      </tr>
                      <tr>
                        <td className="text-[#000000] font-[Verdana] text-[15px]">
                          ITPC-324
                        </td>
                        <td className="text-[#000000] font-[Verdana] text-[15px]">
                          Object-Oriented Modeling and Design with UML Laboratory
                        </td>
                        <td
                          className="text-[#000000] font-[Verdana] text-[15px]"
                          align="center"
                        >
                          1
                        </td>
                        <td
                          className="text-[#000000] font-[Verdana] text-[15px] font-bold"
                          align="center"
                        >
                          C
                        </td>
                        <td
                          className="text-[#000000] font-[Verdana] text-[15px]"
                          align="center"
                        >
                          8
                        </td>
                        <td
                          className="text-[#000000] font-[Verdana] text-[15px]"
                          align="center"
                        >
                          1
                        </td>
                      </tr>
                      <tr>
                        <td className="text-[#000000] font-[Verdana] text-[15px]">
                          ITPC-326
                        </td>
                        <td className="text-[#000000] font-[Verdana] text-[15px]">
                          Mobile Application Development Laboratory
                        </td>
                        <td
                          className="text-[#000000] font-[Verdana] text-[15px]"
                          align="center"
                        >
                          1
                        </td>
                        <td
                          className="text-[#000000] font-[Verdana] text-[15px] font-bold"
                          align="center"
                        >
                          B
                        </td>
                        <td
                          className="text-[#000000] font-[Verdana] text-[15px]"
                          align="center"
                        >
                          8
                        </td>
                        <td
                          className="text-[#000000] font-[Verdana] text-[15px]"
                          align="center"
                        >
                          1
                        </td>
                      </tr>

                      <tr>
                        <td
                          className="text-[#003A6A] text-right align-middle font-bold font-[Verdana] text-[15px]"
                          colspan="2"
                        >
                          Credits Registered in the Semester &nbsp;
                        </td>
                        <td
                          className="text-[#003A6A] font-bold; font-[Verdana] text-[14px] width:50px;"
                          align="center"
                        >
                          <input
                            type="text"
                            className=" bg-[#eee] text-bold text-[15px] w-16 p-3 rounded-lg"
                            readonly=""
                            value="23"
                          />{" "}
                        </td>
                        <td colspan="3">&nbsp;</td>
                      </tr>
                    </tbody>
                  </table>

                  <table>
                    <tbody>
                      <tr>
                        <td className="text-[#003A6A; font-bold; font-[Verdana] text-[15px]">
                          Credits Earned in the Semester &nbsp;
                        </td>
                        <td
                          className="text-[#003A6A; font-bold; font-[Verdana] text-[14px]"
                          width="60px"
                        >
                          <input
                            type="text"
                            className=" bg-[#eee] text-bold text-[15px] w-16 p-3 rounded-lg"
                            value="23"
                            readonly=""
                          />
                        </td>
                      </tr>

                      <tr>
                        <td className="text-[#003A6A; font-bold; font-[Verdana] text-[15px]">
                          Semester Grade Point Average (SGPA) &nbsp;
                        </td>
                        <td
                          className="text-[#003A6A; font-bold; font-[Verdana] text-[14px]"
                          width="60px"
                        >
                          <input
                            type="text"
                            className=" bg-[#eee] text-bold text-[15px] w-16 p-3 rounded-lg"
                            value="7.49"
                            readonly=""
                          />
                        </td>
                      </tr>

                      <tr>
                        <td className="text-[#003A6A; font-bold; font-[Verdana] text-[15px]">
                          Cumulative Grade Point Average (CGPA) &nbsp;
                        </td>
                        <td
                          className="text-[#003A6A; font-bold; font-[Verdana] text-[14px]"
                          width="60px"
                        >
                          <input
                            type="text"
                            className=" bg-[#eee] text-bold text-[15px] w-16 p-3 rounded-lg"
                            value="7.35"
                            readonly=""
                          />
                        </td>
                      </tr>

                      <tr>
                        <td className="text-[#003A6A; font-bold; font-[Verdana] text-[15px]">
                          Earned Credits (Cumulative){" "}
                        </td>
                        <td
                          className="text-[#003A6A; font-bold; font-[Verdana] text-[14px]"
                          width="60px"
                        >
                          <input
                            type="text"
                            className=" bg-[#eee] text-bold text-[15px] w-16 p-3 rounded-lg"
                            value="140"
                            readonly=""
                          />
                        </td>
                      </tr>

                      <tr>
                        <td className="text-[#003A6A; font-bold; font-[Verdana] text-[15px]">
                          Registered Credits (Cumulative){" "}
                        </td>
                        <td
                          className="text-[#003A6A; font-bold; font-[Verdana] text-[14px]"
                          width="60px"
                        >
                          <input
                            type="text"
                            className=" bg-[#eee] text-bold text-[15px] w-16 p-3 rounded-lg"
                            value="140"
                            readonly=""
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <br />

                  <form action="" method="post" enctype="multipart/form-data">
                    <div className="row">
                      <div className="col-md-3">
                        <label for="date">Date of Notification:</label>
                        <input
                          type="text"
                          className="px-2"
                          name="notification_date"
                          id="datepicker"
                          placeholder="Select Date"
                          readonly=""
                          value="04-Aug-2024"
                        />
                      </div>

                      <div className="col-md-3">
                        <label for="date">Date of Issue</label>
                        <input
                          type="text"
                          className="px-2"
                          name="issue_date"
                          id="datepicker2"
                          placeholder="Select Date"
                          readonly=""
                          value="04-Aug-2024"
                        />
                      </div>

                      <div className="col-md-3">
                        <br />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
