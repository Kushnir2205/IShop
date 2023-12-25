export default function () {
  const iphoneConfig = {
    filterSubCategory: [
      {
        name: "iPhone 14 Pro",
        image: "14_pro_max",
      },
      {
        name: "iPhone 14 Pro",
        image: "14_pro_max",
      },
      {
        name: "iPhone 14 Pro",
        image: "14_pro_max",
      },
      {
        name: "iPhone 14 Pro",
        image: "14_pro_max",
      },
      {
        name: "iPhone 14 Pro",
        image: "14_pro_max",
      },
      {
        name: "iPhone 14 Pro",
        image: "14_pro_max",
      },
    ],
    leftSideFilter: [
      {
        title: "Модель",
        items: [],
      },
    ],
  };

  iphoneConfig.leftSideFilter[0].items = iphoneConfig.filterSubCategory.map(
    (item) => item.name
  );

  return iphoneConfig;
}
