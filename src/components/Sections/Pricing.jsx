import React from "react";
import styled from "styled-components";
// Components
import PricingTable from "../Elements/PricingTable";

export default function Pricing() {
  return (
    <Wrapper id="pricing">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Үнийн санал</h1>
            <p className="font13">
              10кг болон 10л ээс дээш хүргэлттэй
              {/* <br />
              labore et dolore magna aliquyam erat, sed diam voluptua. */}
            </p>
          </HeaderInfo>
          <TablesWrapper className="flexSpaceNull">
            <TableBox>
              <PricingTable
                icon="roller"
                price="₮7,500/л"
                title="Шингэн бордоо"
                text="Усанд шингэлж хэрэглэнэ"
                // offers={[
                //   { name: "Product Offer", cheked: true },
                //   { name: "Offer", cheked: true },
                //   { name: "Product Offer #2", cheked: false },
                //   { name: "Product", cheked: false },
                //   { name: "Product Offer", cheked: false },
                // ]}
                // action={() => alert("clicked")}
              />
            </TableBox>
            <TableBox>
              <PricingTable
                icon="monitor"
                price="₮6,000/кг"
                title="Хуурай бордоо"
                text="Усанд найруулж хэрэглэнэ"
                // offers={[
                //   { name: "Product Offer", cheked: true },
                //   { name: "Offer", cheked: true },
                //   { name: "Product Offer #2", cheked: true },
                //   { name: "Product", cheked: true },
                //   { name: "Product Offer", cheked: false },
                // ]}
                // action={() => alert("clicked")}
              />
            </TableBox>
            <TableBox>
              <PricingTable
                icon="browser"
                price="$59,99/mo"
                title="Үнийн санал"
                text="100кг болон 100л ээс дээш үнийн санал сонсоно"
                // offers={[
                //   { name: "Product Offer", cheked: true },
                //   { name: "Offer", cheked: true },
                //   { name: "Product Offer #2", cheked: true },
                //   { name: "Product", cheked: true },
                //   { name: "Product Offer", cheked: true },
                // ]}
                // action={() => alert("clicked")}
              />
            </TableBox>
          </TablesWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding: 50px 0;
`;
const HeaderInfo = styled.div`
  margin-bottom: 50px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const TablesWrapper = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const TableBox = styled.div`
  width: 31%;
  @media (max-width: 860px) {
    width: 100%;
    max-width: 370px;
    margin: 0 auto
  }
`;




