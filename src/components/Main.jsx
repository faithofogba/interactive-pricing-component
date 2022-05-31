import React from "react";

export default function Main() {
  var price = "";
  var pageviewVal = "";
  const [value, setValue] = React.useState("6");
  const [isYearly, setIsYearly] = React.useState(false);
  const sliderVal = {
    min: 2,
    max: 10,
    value: 6,
    step: 2,
  };

  const handleSliderChange = (e) => {
    setValue(e.target.value);
  };

  const onToggle = (e) => {
    setIsYearly(!isYearly);
  };

  if (value === "2") {
    pageviewVal = '10K'
    price = isYearly ? 8 * 12 * 0.25 : 8;
  } else if (value === "4") {
    pageviewVal = '50K'
    price = isYearly ? 12 * 12 * 0.25 : 12;
  } else if (value === "6") {
    pageviewVal = '100K'
    price = isYearly ? 16 * 12 * 0.25 : 16;
  } else if (value === "8") {
    pageviewVal = '500K'
    price = isYearly ? 24 * 12 * 0.25 : 24;
  } else if (value === "10") {
    pageviewVal = '1M'
    price = isYearly ? 36 * 12 * 0.25 : 36;
  }

  return (
    <main className="card">
      <div className="card--body">
        <div className="package--details">
          <span className="previews">{pageviewVal} PAGEVIEWS</span>
          <span className="package--amount">
            <strong className="value">${price}.00</strong>
            <sup>{!isYearly ? "/month" : "/annum"}</sup>
          </span>
        </div>
        <div className="slidecontainer">
          <input
            {...sliderVal}
            type="range"
            aria-label="slider"
            className="slider"
            value={value}
            id="myRange"
            onChange={handleSliderChange}
            style={{
              background: `linear-gradient(to right, hsl(174, 77%, 80%) ${
                ((parseInt(value) - sliderVal.min) * 100) /
                (sliderVal.max - sliderVal.min)
              }%, hsl(224, 65%, 95%) 0px)`,
            }}
          />
        </div>
        <p className="package--amount-mv">
          <strong className="value">${price}.00</strong>
          <sup>{!isYearly ? "/month" : "/annum"}</sup>
        </p>
        <div id="package--range">
          <div className="monthly--package">Monthly Billing</div>
          <label className="switch" checked={isYearly} onChange={onToggle}>
            <input aria-labelledby="package--range" type="checkbox" />
            <span className="toggle--slider round"></span>
          </label>
          <div className="yearly--package">Yearly Billing</div>
          <div className="package--discount">25% discount</div>
          <div className="package--discount-mv">-25%</div>
        </div>
      </div>
      <div className="card--footer">
        <div className="items">
          <ul>
            <li className="package--type">
              <i className="fa-solid fa-check"></i> Unlimited websites
            </li>
            <li className="package--type">
              <i className="fa-solid fa-check"></i> 100% data ownership
            </li>
            <li>
              <i className="fa-solid fa-check"></i> Email reports
            </li>
          </ul>
          <button className="btn">Start my trial</button>
        </div>
      </div>
    </main>
  );
}
