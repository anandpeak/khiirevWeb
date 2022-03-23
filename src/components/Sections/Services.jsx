import React from "react";
import styled from "styled-components";
// Components
import ClientSlider from "../Elements/ClientSlider";
import ServiceBox from "../Elements/ServiceBox";
import FullButton from "../Buttons/FullButton";
// Assets
import AddImage1 from "../../assets/img/add/1.png";
import AddImage2 from "../../assets/img/add/2.png";
import AddImage3 from "../../assets/img/add/3.png";
import AddImage4 from "../../assets/img/add/4.png";

export default function Services() {
  return (
    <Wrapper id="services">
      <div className="lightBg" style={{ padding: "50px 0" }}>
        <div className="container">
          <ClientSlider />
        </div>
      </div>
      <div className="whiteBg" style={{ padding: "60px 0" }}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Хэрэглэх заавар</h1>
            {/* <p className="font13">
            Гумины бордоо нь байгалийн гаралтай ялзмагт бордоо бөгөөд бүх төрлийн:<br />
              🌲🌲🌲 Мод<br />
              🌾🌾🌾 Үр тарианд<br />
              🌱🌼🌾 Үр, үрсэлгээ<br />
              🌱🌼🌾 Цэцэг навч<br />
              🌱🌼🌾 Хүлэмжийн ногоо<br />
              🌱🌼🌾  Хүнсний ногоо гэх мэт бүх төрлийн мод, үр тариа, ургамалд хэрэглэдэг.
              <br /> Ургацыг 20- 40% нэмэгдүүлдэг
            </p> */}
          </HeaderInfo>
          <ServiceBoxRow className="flex">
            <ServiceBoxWrapper>
              <ServiceBox
                icon="browser"
                title="Тарих үрэнд шингээж идэвхжүүлэх"
                subtitle={
                "🥔🧅🍎🥒  Савтай бордооноос 40 мл-ийг авч 10 л усанд найруулж, төмс, чихрийн манжин, улаан лооль, өргөст хэмх, чинжүү, байцаа болон усан үзэм, алим, шийгуа мэтийн үр жимсний ургамлын үрэнд 12-24 цаг шингээж идэвхжүүлнэ. \n"
                +"Мод, бутны тарьц, суулгацыг ийм уусмалд үндэсний нь талаар уртынх нь 1/3-ээр дүрж хонуулна. \n"}
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="browser"
                title="Хүнсний ногоо, үр жимсний ургамлыг бордоотой услах"
                subtitle="10л усанд 10мл бордоо найруулж, талбайн 1 м.кв-д 2-3л уусмал орохоор бодож вегетацын бүхий л хугацаанд 3-4 удаа услах байдлаар бордоно. Жимс ногооны үрслэгийг бойжилтын үед нь ийм уусмалаар услаж, сайжруулна. Харин 100 л усанд 1л бордоо найруулж модлог, бутлаг ургамлыг услаж бордоно."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="browser"
                title="Бутлаг ургамлыг услаж бордох"
                subtitle="100 л усанд 1л бордоо найруулж модлог,  бутлаг ургамлыг услаж бордоно"
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox icon="browser" title="Ургамлын иш, навчинд цацаж хүртээх" 
              subtitle="100л усанд 0.4л бордоо найруулж ургамлын иш навчинд цацаж хүртээнэ. Багаахан талбайд тарьсан ургамлыг 2-3л/м.кв хүртэл нормоор шүршиж борддог ч томоохон талбайд дөнгөж 200-300л/га-аар 1-3 удаа цацаж хүртээхэд чамлалтгүй үр дүн өгнө" />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox icon="browser" title="Хаврын хөрс боловсруулалт" 
              subtitle="100л усанд 0.4л бордоо уусгаж, 1м.кв талбайд 3-5л уусмал ноогдохоор бодож бордоно. Бордсоноос хойш 6 хоногийн дотор үрээ суулгана." />
            </ServiceBoxWrapper>
          </ServiceBoxRow>
        </div>
        <div className="lightBg">
          <div className="container">
            <Advertising className="flexSpaceCenter">
              {/* <AddLeft>
                <h4 className="font15 semiBold">A few words about company</h4>
                <h2 className="font40 extraBold">A Study of Creativity</h2>
                <p className="font12">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
                  diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                </p>
                <ButtonsRow className="flexNullCenter" style={{ margin: "30px 0"}}>
                  <div style={{ width: "190px" }}>
                    <FullButton title="Get Started" action={() => alert("clicked")} />
                  </div>
                  <div style={{ width: "190px", marginLeft: "15px" }}>
                    <FullButton title="Contact Us" action={() => alert("clicked")} border />
                  </div>
                </ButtonsRow>
              </AddLeft> */}
              <AddRight>
                {/* <AddRightInner>
                  <div className="flexNullCenter">
                    <AddImgWrapp1 className="flexCenter">
                      <img src={AddImage1} alt="office" />
                    </AddImgWrapp1>
                    <AddImgWrapp2>
                      <img src={AddImage2} alt="office" />
                    </AddImgWrapp2>
                  </div>
                  <div className="flexNullCenter">
                    <AddImgWrapp3>
                      <img src={AddImage3} alt="office" />
                    </AddImgWrapp3>
                    <AddImgWrapp4>
                      <img src={AddImage4} alt="office" />
                    </AddImgWrapp4>
                  </div>
                </AddRightInner> */}
              </AddRight>
            </Advertising>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const ServiceBoxRow = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const ServiceBoxWrapper = styled.div`
  width: 20%;
  margin-right: 5%;
  padding: 80px 0;
  @media (max-width: 860px) {
    width: 100%;
    text-align: center;
    padding: 40px 0;
  }
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  margin: 80px 0;
  padding: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 100px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;
const AddLeft = styled.div`
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  position: absolute;
  top: -70px;
  right: 0;
  @media (max-width: 860px) {
    width: 80%;
    position: relative;
    order: 1;
    top: -40px;
  }
`;
const AddRightInner = styled.div`
  width: 100%;
`;
const AddImgWrapp1 = styled.div`
  width: 48%;
  margin: 0 6% 10px 6%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp2 = styled.div`
  width: 30%;
  margin: 0 5% 10px 5%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp3 = styled.div`
  width: 20%;
  margin-left: 40%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp4 = styled.div`
  width: 30%;
  margin: 0 5%auto;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;