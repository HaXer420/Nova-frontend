import React from "react";
import { Button, Footer, NavBar, TopBar } from "../../components";
import './reviewsPage.css'

export default function ReviewsPage() {
  const reviewArray = [
    {
      id: 1,
      name: 'Wali Khan',
      message: 'The cheapest Sugar Wax Brazilian you can get in the Atlanta area! The location is also very convenient in the Publix shopping center. No need to worry about parking! Both times, I had Tina, who was great! I have also gotten my eyebrows & upper lip threaded here. You truly can’t beat the service and price. I also recommend their sugar scrubs. It’s all organic & homemade. My favorite is the peach scrub. The wait time is also not long at all!',
    },
    {
      id: 2,
      name: 'Nilofar',
      message: 'This was the first threading place I discovered near my apartment when I first moved here. Growing up, I only went to my Indian neighbors’ in-house salons to thread my eyebrows. I was initially scared to try out a salon, but let out a huge sigh of relief when I walked in here and noticed all South Asian women running this place!',
    },
    {
      id: 3,
      name: 'Yasmeen',
      message: 'This was the first threading place I discovered near my apartment when I first moved here. Growing up, I only went to my Indian neighbors’ in-house salons to thread my eyebrows. I was initially scared to try out a salon, but let out a huge sigh of relief when I walked in here and noticed all South Asian women running this place!',
    },
    {
      id: 4,
      name: 'Sadia',
      message: 'Prompt, professional and precise. Everything you want in eyebrow threading! I was impressed with Tina, I got my eyebrows tinted for the first time and it looks AWESOME! I then added upper lip to the threading services. Since everything was going so well, I got a henna tattoo by Aarzoo to cover up some surgical scars on my foot.',
    },
    {
      id: 5,
      name: 'Shabana',
      message: 'Unique does a wonderful job with threading of eye brows and lips. I refuse to go elsewhere. Tina always does a wonderful job, exactly what i want!! Tina also does a 5/5 job for sugaring /Brazilian. It was my first time, and she was very professional and comforting.',
    },
    {
      id: 6,
      name: 'Muskaan',
      message: 'So the first woman who serviced me was Sonya, who is now on medical leave. Since Sonya is out, Tina was more than accommodating and really cared to make me comfortable while performing services. These girls are the best!',
    },
  ]

  return (
    <div className="nova-dashboard-main_container">
      <TopBar />
      <NavBar />
      <div className="nova-dashboard-container">
        <div className="nova-reviews-banner_view">
          <div>
            <h1>Customer <br /><span style={{ color: '#292929' }}>Reviews</span></h1>
          </div>
        </div>
        <div className="nova-reviews-reviews_list_top_view">
          {reviewArray.map((item) => {
            return (
              <div key={item.id} className="nova-reviews-single_review_item">
                <h1>{item.name}</h1>
                <div>
                  <h2>{item.message}</h2>
                </div>
              </div>
            )
          })}
        </div>
        <div className="nova-reviews-divider" />
        <div className="nova-reviews-write_review_view">
          <h1>Write Review</h1>
          <div className="nova-reviews-input_view">
            <input placeholder="Name" />
          </div>
          <div className="nova-reviews-textarea_view">
            <textarea placeholder="Review" />
          </div>
          <Button>Submit</Button>
        </div>
        <Footer />
      </div>
    </div>
  );
}
