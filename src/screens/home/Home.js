import React from "react";
import Slider from "../../components/Home/Slider";
import CarEnquiry from "../../components/Home/CarEnquiry";
import Cars from "../../components/Home/Cars";
import Blogs from "../../components/Home/Blogs";
import ServiceFinanceInsu from "../../components/Home/ServiceFinanceInsu";
import NewsLetter from "../../components/Home/NewsLetter";
import MobileSlider from "../../components/Home/MobileSlider";
import Helmet from "react-helmet";
import Header from "../../components/Header/Header";


const width = window.innerWidth;

function Home() {
  return (
    <>
      <Header />
      <Helmet>
        <title>
          Maruti Suzuki Nexa Showroom, Car Finance, Maruti Insurance |SabooNexa
        </title>
        <meta
          name="title"
          content="Maruti Suzuki Nexa Showroom, Car Finance, Maruti Insurance |SabooNexa "
        />
        <meta
          name="description"
          content="RKS Motor is one of the most trusted Nexa dealers in Hyderabad & Secunderabad. New Nexa car models Maruti Baleno, Maruti Baleno RS, Nexa Ignis, Nexa Scross, Maruti Ciaz & Nexa XL6."
        />
        <meta
          name="keywords"
          content="Nexa Showrooms in Hyderabad, Nexa Delaers in Hyderabad, Nexa Cars Hyderabad, Nexa Balneo, Nexa Scross, Nexa Ignis, Nexa Ciaz, Nexa Xl6,Maruti baleno,maruti ciaz, maruti ignis, maruti xl6,maruti scross"
        />
        <meta name="author" content="BroaddCast Business Solutions" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.saboonexa.in/" />
        <meta
          property="og:title"
          content="Maruti Suzuki Authorized Car Dealer in Hyderabad & Secunderabad |RKS Motors"
        />
        <meta
          property="og:description"
          content="RKS Motor is one of the most trusted Nexa dealers in Hyderabad & Secunderabad. New Nexa car models Maruti Baleno, Maruti Baleno RS, Nexa Ignis, Nexa Scross, Maruti Ciaz & Nexa XL6."
        />
        <meta
          property="og:image"
          content="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/og-tags/index.jpg"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.saboonexa.in/" />
        <meta
          property="twitter:title"
          content="Maruti Suzuki Authorized Car Dealer in Hyderabad & Secunderabad |RKS Motors"
        />
        <meta
          property="twitter:description"
          content="RKS Motor is one of the most trusted Nexa dealers in Hyderabad & Secunderabad. New Nexa car models Maruti Baleno, Maruti Baleno RS, Nexa Ignis, Nexa Scross, Maruti Ciaz & Nexa XL6."
        />
        <meta
          property="twitter:image"
          content="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/saboonexa/og-tags/index.jpg"
        />
      </Helmet>
      {width > 425 ? <Slider /> : <MobileSlider />}
      <CarEnquiry />
      <Cars />
      <Blogs />
      <ServiceFinanceInsu />
      <NewsLetter />
    </>
  );
}

export default Home;