export default function attributeSizeCalc(colorAttr, isOverlay) {
  let width = "";
  let height = "";
  if (isOverlay) {
    width = colorAttr ? "8px" : "32px";
    height = colorAttr ? "8px" : "25px";
  } else {
    width = colorAttr ? "12px" : "45px";
    height = colorAttr ? "12px" : "27px";
  }
  return {
    width,
    height,
  };
}
