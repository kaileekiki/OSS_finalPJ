import React from "react";
import { useRecoilValue } from "recoil";
import { searchedAirlineState } from "../../store/atom";
import { Horizontal, Vertical } from "../../styles/CommunalStyle";
import styled from "styled-components";

export default function AirlineListsComponent() {
  const searchedAirline = useRecoilValue(searchedAirlineState);

  const getRandomNum = () => {
    return Math.floor(Math.random() * 100) + 1;
  };

  return Array.isArray(searchedAirline) ? (
    <AllListContainer>
      <Vertical>
        {searchedAirline.map((itm) => (
          <Horizontal
            key={
              itm.domesticNum +
              itm.date +
              itm.domesticStartTime +
              getRandomNum()
            }
          >
            {itm.airlineKorean} : 출발시간 - {itm.domesticStartTime}, 도착시간 -
            {itm.domesticArrivalTime}
          </Horizontal>
        ))}
      </Vertical>
    </AllListContainer>
  ) : (
    <div>항공편이 존재하지 않습니다</div>
  );
}

const AllListContainer = styled.div`
  height: 300px;
  overflow-y: scroll;
`;
