import React from "react";
import { toCSSUnit } from "../util";

export const Card = ({
  title = "Bitcoin (BTC)",
  price = "$31,815.80",
  percent = 10,
  TVL = "$60,000",
  icon,
  dimension = 190.74,
}) => {
  const d = toCSSUnit(dimension, "px");
  const p = toCSSUnit(0.2 * dimension, "px");
  const r = toCSSUnit(0.2 * dimension * Math.sqrt(2), "px");
  const o = toCSSUnit(0.2 * dimension * 0.5, "px");

  const cardContainer = {
    borderRadius: `${p}`,
    width: `${d}`,
    height: `calc(${d} / 0.83)`,
    padding: `${p}`,
    background: `linear-gradient(
          180deg,
          rgba(98, 106, 136, 0.1) 0%,
          rgba(46, 49, 73, 0.1) 107.43%
        )`,
    backdropFilter: `blur(50px)`,
    border: `1px solid`,
    borderImageSource: `linear-gradient(
          180deg,
          rgba(236, 240, 255, 0.1) 0%,
          rgba(46, 49, 73, 0) 107.43%
        )`,

    ["-webkit-mask"]: `linear-gradient(red 0 0),
          radial-gradient(
              circle at 0 ${r},
              transparent calc(${r}),
              gold calc(${r})
            )
            calc(0.5 * ${d} + ${p} - 1.5 * ${r}) 0/ ${r} ${o} no-repeat,
          radial-gradient(
              circle at 100% ${r},
              transparent calc(${r}),
              gold calc(${r})
            )
            calc(0.5 * ${d} + ${p} + 0.5 * ${r}) 0/ ${r} ${o} no-repeat,
          radial-gradient(
            circle at calc(0.5 * ${d} + ${p}) calc(${o} * 0.5),
            transparent calc(${o} * 0.5),
            transparent calc(${o} * 0.5)
          ),
          radial-gradient(
            circle at calc(0.5 * ${d} + ${p}) -${o},
            blue calc(${r}),
            transparent calc(${r})
          )`,
    ["-webkit-mask-composite"]: `xor, source-over, source-over`,
  };

  return (
    <div class="card-wrapper">
      <div class="card-container" style={cardContainer}>
        <h1 className="title">{title}</h1>
        <div>
          <p className="value-display">
            {price}{" "}
            <span className={`percent ${percent > 0 ? "up" : "down"}`}>
              {percent}%
            </span>
          </p>
          <p className="label">Price</p>
        </div>
        <div>
          <p className="value-display">{TVL}</p>
          <p className="label">TVL</p>
        </div>
        <div>
          <div className="icon-container">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <p className="label">Popular pairs</p>
        </div>
      </div>
      <div style={{ width: r, height: r }} class="card-icon">
        {icon}
      </div>
    </div>
  );
};
