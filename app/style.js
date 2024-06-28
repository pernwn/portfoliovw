const styles = {
  boxWidth: "xl:max-w-[1280px] w-full",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",

  paddingX: "sm:px-6 px-16",
  paddingY: "sm:py-6 py-16",
  padding: "sm:px-8 px-16 sm:py-8 py-16",

  marginX: "sm:mx-6 mx-16",
  marginY: "sm:my-6 my-16",
  margin: "sm:mx-8 mx-16 sm:my-8 my-16",
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;
