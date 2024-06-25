import "../../assets/style/segmentVertical.css";

export const SegmentVertical = ({ pintar }) => {
  return (
    <div
      className={`${
        pintar ? "segment-vertical" : "segment-vertical-inactive "
      }`}
    ></div>
  );
};
