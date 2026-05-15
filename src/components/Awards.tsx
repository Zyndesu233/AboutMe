import SectionTitle from "./SectionTitle";
import AwardVisual from "./AwardVisual";
import AwardMarquee from "./AwardMarquee";

const Awards = () => {


  return (
    <section id="Awards" className="h-[100vh] relative">
      <SectionTitle title="Awards" subtitle="This is what I won" />
      <AwardVisual />
      <AwardMarquee content={"AWARDS"} duration={15} />
    </section>
  );
};

export default Awards;