import "../../assets/style/segmentHorizontal.css";

export const SegmentHorizontal = ({ pintar }) => {
  return (
    <>
      <div
        className={`${
          pintar ? "segment-horizontal" : "segment-horizontal-inactive"
        }`}
      ></div>
    </>
  );
};
