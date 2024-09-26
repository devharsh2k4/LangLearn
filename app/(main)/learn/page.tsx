import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { Header } from "./header";
import { getUserProgress } from "@/db/queries";
import { UserProgress } from "@/components/user-progress";
import { redirect } from "next/navigation";


const LearnPage = async () => {
  const userProgerssData = getUserProgress();

  const [userProgress] = await Promise.all([userProgerssData]);

  if(!userProgress || !userProgress.activeCourse){
  redirect("/courses");
  }
  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
        <UserProgress
          activeCourse={{ title: "Spanish", imageSrc: "/es.svg" }}
          hearts={5}
          points={100}
          hasActiveSubscription={true}
        />
      </StickyWrapper>
      <FeedWrapper>
        <Header title="spanish" />
    
      </FeedWrapper>
    </div>
  );
};

export default LearnPage;
