import { Card } from "../../components/card/Card";

export function Features()
{
    const card1 = 
    {
      title : "Fresh new layout",
      description : "With Bootstrap 5, we've created a fresh new layout for this template!",
      icon : "bi-collection"
    };
    const card2 = 
    {
      title : "Fresh new layout",
      description : "With Bootstrap 5, we've created a fresh new layout for this template!",
      icon : "bi-cloud-download"
    };
    const card3 = 
    {
      title : "Fresh new layout",
      description : "With Bootstrap 5, we've created a fresh new layout for this template!",
      icon : "bi-card-heading"
    };
    const card4 = 
    {
      title : "Fresh new layout",
      description : "With Bootstrap 5, we've created a fresh new layout for this template!",
      icon : "bi-bootstrap"
    };
    const card5 = 
    {
      title : "Fresh new layout",
      description : "With Bootstrap 5, we've created a fresh new layout for this template!",
      icon : "bi-code"
    };
    const card6 = 
    {
      title : "Fresh new layout",
      description : "With Bootstrap 5, we've created a fresh new layout for this template!",
      icon : "bi-patch-check"
    };
    const cards = [card1,card2,card3,card4,card5,card6];
    return (
        <section>
            <div className="container">
                <div className="row">
                    
                        {cards.map((card,index)=>
                        (
                          <div key={index} className="col-lg-6 col-xxl-4 mb-5">
                        <Card
                          key = {index}
                          title = {card.title}
                          description = {card.description}
                          icon = {card.icon}
                          ></Card>
                          </div>
                        ))};
                    
                </div>
            </div>
        </section>
    );
}