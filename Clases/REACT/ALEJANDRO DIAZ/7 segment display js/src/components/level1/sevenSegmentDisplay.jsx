import { SegmentHorizontal } from "../segmentHorizontals/segmentHorizontal";
import { SegmentVertical } from "../segmentVertical/segmentVertical";
import { SegmentHorizontalMiddle } from "../segmentHorizontals/segmentHorizontalMiddle";
import "../../assets/style/SevenSegmentDisplay.css";

export const SevenSegmentDisplay = ({ digit, text }) => {
  const numbers = {
    0: [true, true, true, false, true, true, true],
    1: [false, false, true, false, false, true, false],
    2: [true, false, true, true, true, false, true],
    3: [true, false, true, true, false, true, true],
    4: [false, true, true, true, false, true, false],
    5: [true, true, false, true, false, true, true],
    6: [true, true, false, true, true, true, true],
    7: [true, false, true, false, false, true, false],
    8: [true, true, true, true, true, true, true],
    9: [true, true, true, true, false, true, false],
  };
  return (
    <>
      <div className="container">
        <h2 className="title">{text}</h2>
        <div className="container-segments">
          <SegmentHorizontal pintar={numbers[digit][0]} />
          <div className="container-segments-verticals">
            <SegmentVertical pintar={numbers[digit][1]} />
            <SegmentVertical pintar={numbers[digit][2]} />
          </div>
          <div className="container-horizontal-middle">
            <SegmentHorizontalMiddle pintar={numbers[digit][3]} />
            <SegmentHorizontalMiddle pintar={numbers[digit][3]} />
          </div>
          <div className="container-segments-verticals">
            <SegmentVertical pintar={numbers[digit][4]} />
            <SegmentVertical pintar={numbers[digit][5]} />
          </div>
          <SegmentHorizontal pintar={numbers[digit][6]} />
        </div>
      </div>
    </>
  );
};
