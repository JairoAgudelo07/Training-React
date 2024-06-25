import "../../assets/style/segmentHorizontalMiddle.css";

export const SegmentHorizontalMiddle = ({ pintar }) => {
  return (
    <div
      className={`${
        pintar
          ? "segment-horizontal-middle"
          : "segment-horizontal-middle-inactive"
      }`}
    ></div>
  );
};
