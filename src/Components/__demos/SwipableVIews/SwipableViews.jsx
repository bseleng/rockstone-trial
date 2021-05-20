import React from "react";
import SwipeableViews from "react-swipeable-views";
import OrgMessagesWrapper from "../../Ad_Organisms/OrgMessagesWrapper/OrgMessagesWrapper";

const styles = {
  slide: {
    padding: 15,
    minHeight: 100,
    color: "#fff",
    height: "100vh",
  },
  slide1: {
    background: "#FEA900",
  },
  slide2: {
    background: "#B3DC4A",
  },
  slide3: {
    background: "#6AC0FF",
  },
};

const SwipableViews = () => (
  <SwipeableViews>
    <div style={Object.assign({}, styles.slide, styles.slide1)}>
      <OrgMessagesWrapper btnName={"Отправить"} />
    </div>
    <div style={Object.assign({}, styles.slide, styles.slide2)}>slide n°3</div>
    <div style={Object.assign({}, styles.slide, styles.slide3)}>slide n°3</div>
  </SwipeableViews>
);

export default SwipableViews;
