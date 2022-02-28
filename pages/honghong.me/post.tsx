import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const Logo = ({ color }) => {
  return (
    <>
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="50"
        fill={color}
        viewBox="0 0 661.000000 1111.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g transform="translate(0.000000,1111.000000) scale(0.100000,-0.100000)">
          <path
            d="M1760 10979 c-147 -108 -301 -202 -967 -591 l-792 -463 -1 -2923 0
-2922 48 27 c27 16 207 120 400 233 l351 205 1 2485 0 2485 390 198 390 198
-2 -2897 -3 -2897 -787 -461 -788 -461 1 -240 0 -240 1187 -695 1187 -696 5
1163 5 1163 920 528 920 528 5 -2255 5 -2254 213 -99 213 -98 184 133 c152
111 318 213 974 596 l791 463 0 2920 c0 2332 -3 2919 -12 2915 -7 -3 -186
-106 -398 -230 l-385 -225 -3 -2486 -2 -2485 -387 -195 c-212 -108 -388 -196
-389 -196 -2 0 -4 1302 -4 2893 l0 2892 788 462 787 462 0 241 0 241 -1184
695 c-651 382 -1186 694 -1187 694 -2 0 -5 -523 -6 -1162 l-3 -1162 -919 -528
c-505 -290 -920 -528 -922 -528 -2 0 -4 1014 -4 2253 l0 2253 -210 97 c-115
53 -215 97 -222 96 -7 0 -92 -59 -188 -130z m3478 -2707 c106 -57 192 -107
192 -111 0 -7 -65 -44 -307 -173 l-93 -50 0 222 c0 122 4 220 8 218 4 -1 94
-50 200 -106z m-1010 -2188 l-3 -435 -905 -520 c-498 -286 -913 -525 -922
-530 -17 -9 -18 14 -18 428 l0 438 918 527 c504 290 920 527 925 527 4 1 6
-195 5 -435z m-2650 -3237 l-3 -113 -203 110 c-170 92 -200 111 -185 120 10 6
101 56 203 111 l185 100 3 -107 c1 -59 1 -158 0 -221z"
          />
        </g>
      </svg>
    </>
  );
};

const HongHongMe = () => {
  const router = useRouter();

  const searchParams = new URLSearchParams(router.asPath.split(/\?/)[1]);

  const title = searchParams.get("title");
  const background = searchParams.get("background");
  const color = searchParams.get("color");

  const [params, setParams] = useState({
    title: null,
    color: null,
    background: null,
  });

  useEffect(() => {
    setParams({
      title,
      color,
      background,
    });
  }, [title, color, background]);

  return (
    <>
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: params.background ? params.background : "#141516",
        }}
      >
        <div
          style={{
            padding: "140px 145px 120px 145px",
            display: "flex",
            flex: 1,
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              maxWidth: "840px",
              height: "330px",
              maxHeight: "330px",
            }}
          >
            <h1
              style={{
                fontSize: "64px",
                lineHeight: "73.59px",
                color: params.color ? params.color : "#FEFEFE",
                fontWeight: 600,
                fontStyle: "normal",
                textAlign: "center",
              }}
            >
              {params.title}
            </h1>
          </div>
          <div
            style={{
              color: params.color ? params.color : "#FEFEFE",
              justifyContent: "space-between",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Logo color={params.color ? params.color : "#FEFEFE"} />
            <span
              style={{
                fontSize: "24px",
                fontWeight: 300,
              }}
            >
              @TszHong0411
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default HongHongMe;
