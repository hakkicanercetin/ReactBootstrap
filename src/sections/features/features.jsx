import { Card } from "../../components/card/Card";

export function Features()
{
    const card1 = 
    {
      title : "Öğrenmesi ve Kullanımı Kolay",
      description : "Açık kaynaklı bir JavaScript GUI kütüphanesi olan React’ı öğrenmesi nispeten kolaydır.",
      icon : "bi-collection"
    };
    const card2 = 
    {
      title : "Artan İş Fırsatları",
      description : "Çok çeşitli alanlarda React becerisine sahip olanlara talep var. React’ı öğrenmek, kariyeriniz boyunca size fayda sağlayabilir.",
      icon : "bi-cloud-download"
    };
    const card3 = 
    {
      title : "Gelişen Topluluk",
      description : "Açık kaynaklı bir kütüphane olduğu için herkes React’ı kullanabilir. Dahası, ekosistemi destekleyen ve geliştiren, kendi katkılarını ekleyen bir topluluğu da var! ",
      icon : "bi-card-heading"
    };
    const card4 = 
    {
      title : "Yeniden Kullanılabilirlik",
      description : "React, yeniden kullanılabilir bir sisteme sahip olduğu için aynı sistem farklı uygulamalarda da tekrar kullanılabilir.",
      icon : "bi-bootstrap"
    };
    const card5 = 
    {
      title : "Hızlı Sonuç",
      description : "Uygulamalardaki canlı değişiklikleri hızlı, verimli ve realtime bir şekilde aktarır.  Ayrıca DOM kullanılarak çok daha çabuk sonuç alınabilir.",
      icon : "bi-code"
    };
    const card6 = 
    {
      title : "SEO Friendly",
      description : "React ile oluşturulan kullanıcı arayüzleri farklı arama motorlarına da erişebilir.",
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