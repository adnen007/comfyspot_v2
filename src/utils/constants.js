import React from "react";
import { FaTruck } from "react-icons/fa";
import { MdDesignServices, MdArchitecture, MdPhone, MdPayment } from "react-icons/md";
import { RiArrowGoBackLine } from "react-icons/ri";

export const links = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about",
  },
  {
    id: 3,
    text: "products",
    url: "/products",
  },
  {
    id: 4,
    text: "orders",
    url: "/orders",
  },
];

export const services = [
  {
    id: 1,
    icon: <FaTruck />,
    title: "Free Delivery",
    text: "Your furniture shipped safely and quickly — always free.",
  },
  {
    id: 2,
    icon: <MdDesignServices />,
    title: "Built to Last",
    text: "We use premium materials designed for real-life durability.",
  },
  {
    id: 3,
    icon: <MdArchitecture />,
    title: "Custom Options",
    text: "Choose colors, fabrics, or sizes that suit your space.",
  },
  {
    id: 4,
    icon: <RiArrowGoBackLine />,
    title: "Easy Returns",
    text: "Not satisfied? Return within 30 days, no questions asked.",
  },
  {
    id: 5,
    icon: <MdPhone />,
    title: "Friendly Support",
    text: "Our team is here to help — before and after your purchase.",
  },
  {
    id: 6,
    icon: <MdPayment />,
    title: " Secure Payment",
    text: "Fast and safe, pay when you get your order",
  },
];

export const colors = ["#ff0000", "#00ff00", "#0000ff", "#000000", "#ffb900"];

export const text =
  "Crucifix narwhal street art asymmetrical, humblebrag tote bag pop-up fixie raclette taxidermy craft beer. Brunch bitters synth, VHS crucifix heirloom meggings bicycle rights.";
