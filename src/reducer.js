const initialState = {
  currentApp: "",
};

export default function (state = initialState, action) {
  const { type } = action;
  console.log(type);
  switch (type) {
    case "cv":
      return { ...state, currentApp: "CV" };
    case "vr":
      return { ...state, currentApp: "VR" };
    case "blog":
      return { ...state, currentApp: "Blog" };
    case "erp":
      return { ...state, currentApp: "ERP" };
    case "travel":
      return { ...state, currentApp: "Travel" };
    case "ecommerce":
      return { ...state, currentApp: "eCommerce" };
    case "stream":
      return { ...state, currentApp: "Stream" };
    default:
      return { ...state, currentApp: "" };
  }
}
