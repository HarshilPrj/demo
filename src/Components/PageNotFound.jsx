import React from "react";
import { Link } from "react-router-dom";
import Errorimg from "../img/404-img.svg";

const PageNotFound = () => {
    return (
        <div>
            <div>
                <div className="container mx-auto 2xl:px-0 px-4">
                    <div className="flex lg:py-[120px] py-8 lg:gap-7 gap-4 lg:flex-row flex-col lg:items-center">
                        <div className="lg:max-w-1/2 w-full">
                            <img src={Errorimg} alt="Errorimg" />
                        </div>
                        <div className="lg:max-w-1/2 w-full">
                            <div className="lg:pl-[65px] pl-0 ml-0">
                                <h2 className="font-dmsans font-bold lg:leading-[230px] lg:text-[200px] text-[80px] text-blacklightcolor text-left">
                                    40<span className="text-primarycolor">4</span>
                                </h2>
                                <h6 className="text-[32px] font-bold font-dmsans text-blacklightcolor">
                                    Oops! It looks like you're lost.
                                </h6>
                                <p className="font-dmsans font-normal lg:text-xl text-sm lg:leading-7 text-blacklightcolor pt-2">
                                    This page is not found.
                                </p>
                                <Link
                                    to="/list"
                                    className="mt-5 lg:mt-[30px] flex justify-center items-center gap-2 w-fit bg-gradient-to-br from-gradientcolor1 via-gradientcolor2 to-gradientcolor3 text-whitecolor tracking-[1px] lg:py-4 lg:px-11 py-3 px-5 font-dmsans text-[15px] font-bold rounded lg:leading-7 hover:bg-gradient-to-br hover:from-hovergradientcolor1 hover:via-hovergradientcolor2 hover:to-hovergradientcolor3"
                                >
                                    Back Home
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M16.0556 0.881226H6.2778C6.03214 0.881226 5.83334 1.08002 5.83334 1.32568C5.83334 1.57135 6.03214 1.77014 6.2778 1.77014H14.9827L0.630219 16.1226C0.456594 16.2962 0.456594 16.5774 0.630219 16.751C0.71701 16.8378 0.83076 16.8812 0.944469 16.8812C1.05818 16.8812 1.17189 16.8378 1.25872 16.751L15.6111 2.3986V11.1035C15.6111 11.3491 15.8099 11.5479 16.0556 11.5479C16.3013 11.5479 16.5001 11.3491 16.5001 11.1035V1.32568C16.5 1.08002 16.3012 0.881226 16.0556 0.881226Z"
                                            fill="white"
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageNotFound;
