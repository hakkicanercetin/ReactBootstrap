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
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-xxl-4 mb-5">
                        <Card
                        title = {card1.title}
                        description = {card1.description}
                        icon = {card1.icon}
                        ></Card>
                    </div>
                    <div className="col-lg-6 col-xxl-4 mb-5">
                        <Card
                        title = {card2.title}
                        description = {card2.description}
                        icon = {card2.icon}
                        ></Card>
                    </div>
                    <div className="col-lg-6 col-xxl-4 mb-5">
                        <Card
                        title = {card3.title}
                        description = {card3.description}
                        icon = {card3.icon}
                        ></Card>
                    </div>
                    <div className="col-lg-6 col-xxl-4 mb-5">
                        <Card
                        title = {card4.title}
                        description = {card4.description}
                        icon = {card4.icon}
                        ></Card>
                    </div>
                    <div className="col-lg-6 col-xxl-4 mb-5">
                        <Card
                        title = {card5.title}
                        description = {card5.description}
                        icon = {card5.icon}
                        ></Card>
                    </div>
                    <div className="col-lg-6 col-xxl-4 mb-5">
                        <Card
                        title = {card6.title}
                        description = {card6.description}
                        icon = {card6.icon}
                        ></Card>
                    </div>
                </div>
            </div>
        </section>
    );
}