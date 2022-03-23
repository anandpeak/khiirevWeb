import React from "react";
import styled from "styled-components";
// Components
import BlogBox from "../Elements/BlogBox";
import FullButton from "../Buttons/FullButton";
import TestimonialSlider from "../Elements/TestimonialSlider";

export default function Blog() {
  return (
    <Wrapper id="blog">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Бидний түүх</h1>
            <p className="font13">
            "Хийрэв ХХК" нь 2011 оноос идвэхтэй үйл ажиллагаагаа явуулж байна
            </p>
          </HeaderInfo>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Анхны бүтээгдэхүүн"
                text="Хуурай бордоо"
                tag="company"
                author="10н жилийн өмнө"
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Анхны бүтээгдэхүүн"
                text="Хуурай бордоо"
                tag="company"
                author="10н жилийн өмнө"
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Анхны бүтээгдэхүүн"
                text="Хуурай бордоо"
                tag="company"
                author="10н жилийн өмнө"
                action={() => alert("clicked")}
              />
            </div>
          </div>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Анхны бүтээгдэхүүн"
                text="Хуурай бордоо"
                tag="company"
                author="10н жилийн өмнө"
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Анхны бүтээгдэхүүн"
                text="Хуурай бордоо"
                tag="company"
                author="10н жилийн өмнө"
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Анхны бүтээгдэхүүн"
                text="Хуурай бордоо"
                tag="company"
                author="10н жилийн өмнө"
                action={() => alert("clicked")}
              />
            </div>
          </div>
          <div className="row flexCenter">
            <div style={{ margin: "50px 0", width: "200px" }}>
              <FullButton title="Load More" action={() => alert("clicked")} />
            </div>
          </div>
        </div>
      </div>
      <div className="lightBg" style={{padding: '50px 0'}}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Тэд юу хэлсэн бэ?</h1>
            <p className="font13">
                Хэрэглэгчийн сэтгэгдэлүүд
              {/* <br />
              labore et dolore magna aliquyam erat, sed diam voluptua. */}
            </p>
          </HeaderInfo>
          <TestimonialSlider />
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding-top: 20px;
`;
const HeaderInfo = styled.div`
  margin-bottom: 30px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;