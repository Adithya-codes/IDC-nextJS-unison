import Head from "next/head";
import Link from "next/link";

import Layout from "../components/Layout";
import { useState, useEffect } from "react";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-primary via-secondary to-third to-fourth min-h-screen w-full overflow-x-hidden">
      <div className="container mx-auto px-20 py-3 xs:px-14">
        <Layout>
          <section>
            <div className="container px-4 mx-auto max-w-screen-sm  my-20 ">
              <div className="flex flex-wrap row xs:justify-center  ">
                <div>
                  <h1 className="home-h1-main font-display xs:text-5xl">
                    {" "}
                    make the <br /> connection.{" "}
                  </h1>

                  <p class="xs:text-xl small-text mt-2">
                    When you’re developing software, the right partner makes all
                    the difference in the world. IDC is your global link to
                    superior software development. We offer a better way to get
                    the job done, with U.S.-based project managers leading
                    talented teams of offshore developers.
                  </p>
                </div>

                <div className="content-center">
                  <div> </div>
                </div>
              </div>
            </div>
          </section>

          <section className=" w-full flex ">
            <div className=" mx-auto">
              <div className=" flex flex-wrap h-100 mr-0">
                <div className="unicorn-img"></div>

                <div className="unicorn-content flex flex-col relative mr-0 px-0 text-right">
                  <div className="">
                    <h1 className="home-h1 break-normal  font-display xs:text-3.12 leading-1">
                      {" "}
                      where <br /> software <br /> dreams <br /> come true{" "}
                    </h1>
                  </div>

                  <div className="unicorn-para relative">
                    <p class="small-text xs:text-xl leading-1.65">
                      You want great results at an affordable price. With IDC,
                      that’s exactly what you get. Mobile applications.
                      Customized websites. EDI systems. We do it all – on
                      target, on time, on budget.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div>
              <div className="container mx-auto px-4  ">
                <div className=" flex flex-wrap w-full row mx-auto">
                  <div className="flex flex-col justify-center w-full relative">
                    <div className="oct-image"></div>
                    <div className="heading">
                      <h1 className="home-h1 xs:text-5xl w-full  leading-1 text-center  ">
                        {" "}
                        custom edi with
                        <br />
                        <span className="span-h1"> instant pricing </span>{" "}
                      </h1>
                    </div>

                    <div className="para w-full">
                      <p class="small-text text-center xs: text-xl leading-1.75">
                        We’ve even developed a product of our own: the Armor
                        Connect Engine (ACE). You can see pricing in seconds
                        with our online calculator. And unlike many providers,
                        we provide custom integration with your ERP system.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="hand-img"></div>
            <div className="container px-4 mx-auto">
              <div className="flex flex-wrap mx-auto h-full">
                <div className="oct-content flex flex-col justify-center w-full">
                  <div className="title text-center">
                    <h1 className="home-h1 xs:text-5xl leading-1">
                      {" "}
                      a relationship <br />
                      <span className=" text-globe xs: text-3.43"> built to last </span>{" "}
                    </h1>
                  </div>

                  <div>
                    <p class="small-text xs: text-xl">
                      At IDC, we've always got your back. We're more than your
                      software developer or EDI provider - we're your partner,
                      dedicated to your success today and tomorrow.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Layout>
      </div>
    </div>
  );
}
