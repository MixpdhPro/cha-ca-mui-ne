import { Streamdown } from 'streamdown';
import { Button } from '@/components/ui/button';
import { ChefHat, Leaf, Flame } from 'lucide-react';

/**
 * Design Philosophy: Coastal Heritage
 * - Warm, earthy color palette (cream, deep teal, burnt orange)
 * - Typography: Playfair Display (serif, bold) for headings, Lora (serif) for body
 * - Asymmetric layout with organic spacing
 * - Watercolor aesthetic with subtle textures
 * - Handcrafted, artisanal feel throughout
 */

export default function Home() {
  const heroImageUrl = "https://d2xsxph8kpxj0f.cloudfront.net/310519663450626883/V8kgNLLTxsY5sNt4BbUMm7/cha_ca_hero_banner-LYy7KLHqaQPZhJcFCchYaG.webp";
  const processImageUrl = "https://d2xsxph8kpxj0f.cloudfront.net/310519663450626883/V8kgNLLTxsY5sNt4BbUMm7/cha_ca_process-ny7JkwLdYZAMbMgVapV5zx.webp";
  const ingredientsImageUrl = "https://d2xsxph8kpxj0f.cloudfront.net/310519663450626883/V8kgNLLTxsY5sNt4BbUMm7/cha_ca_ingredients-oRA3QwhXDR44g3TsUmAv3p.webp";
  const dishImageUrl = "https://d2xsxph8kpxj0f.cloudfront.net/310519663450626883/V8kgNLLTxsY5sNt4BbUMm7/cha_ca_dish-LgVZAPKqwL7rC3iCQoX4VJ.webp";

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header Navigation */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ChefHat className="w-6 h-6 text-secondary" />
            <h1 className="text-xl font-bold text-foreground">Chả Cá Mũi Né</h1>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#origin" className="text-sm hover:text-secondary transition-colors">Nguồn Gốc</a>
            <a href="#process" className="text-sm hover:text-secondary transition-colors">Quy Trình</a>
            <a href="#dishes" className="text-sm hover:text-secondary transition-colors">Món Ăn</a>
            <a href="#contact" className="text-sm hover:text-secondary transition-colors">Liên Hệ</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container py-12 md:py-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-secondary font-accent text-sm uppercase tracking-widest">Đặc Sản Mũi Né</p>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  Chả Cá Mũi Né<br />
                  <span className="text-secondary">"Nhiên Trần"</span>
                </h1>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
                Hương vị biển cả đậm đà, quy trình chế biến thủ công tỉ mỉ, và tình yêu với thực phẩm được kế thừa qua từng thế hệ.
              </p>
              <div className="flex gap-4">
                <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                  Khám Phá Ngay
                </Button>
                <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary/10">
                  Liên Hệ
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={heroImageUrl}
                alt="Chả cá Mũi Né Nhiên Trần"
                className="w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Origin Section */}
      <section id="origin" className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img 
                src={ingredientsImageUrl}
                alt="Nguyên liệu chả cá"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <div>
                <p className="text-secondary font-accent text-sm uppercase tracking-widest">Nguồn Gốc & Nguyên Liệu</p>
                <h2 className="text-3xl md:text-4xl font-bold mt-2">Từ Biển Cả Mũi Né</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Chả cá "Nhiên Trần" được làm từ những con cá tươi ngon nhất, đánh bắt trực tiếp từ vùng biển Mũi Né. Các loại cá thường được sử dụng là cá thu, cá mối, cá đỏ củ, đảm bảo độ tươi ngon và chất lượng.
                </p>
                <p>
                  Bí quyết tạo nên hương vị đặc trưng nằm ở việc kết hợp các loại cá khác nhau theo tỷ lệ vàng, cùng với gia vị truyền thống. Mỗi nguyên liệu được chọn lọc kỹ lưỡng để đảm bảo chất lượng tốt nhất.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-background rounded-lg border border-border">
                  <Leaf className="w-5 h-5 text-secondary mb-2" />
                  <p className="font-semibold text-sm">Nguyên Liệu Tươi</p>
                  <p className="text-xs text-muted-foreground">Cá tươi từ biển Mũi Né</p>
                </div>
                <div className="p-4 bg-background rounded-lg border border-border">
                  <Flame className="w-5 h-5 text-secondary mb-2" />
                  <p className="font-semibold text-sm">Gia Vị Truyền Thống</p>
                  <p className="text-xs text-muted-foreground">Công thức gia đình bí truyền</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-16 md:py-24">
        <div className="container">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <p className="text-secondary font-accent text-sm uppercase tracking-widest">Quy Trình Chế Biến</p>
              <h2 className="text-3xl md:text-4xl font-bold">Thủ Công Truyền Thống</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Mỗi bước trong quy trình làm chả cá đều được thực hiện tỉ mỉ, giữ gìn hương vị tự nhiên và chất lượng truyền thống.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  {[
                    { step: "01", title: "Chọn Cá", desc: "Cá tươi được chọn lọc kỹ càng, đảm bảo không bị ươn hay dập nát." },
                    { step: "02", title: "Sơ Chế", desc: "Cá được làm sạch vảy, bỏ ruột, cắt bỏ đầu và đuôi, lọc lấy phần thịt cá." },
                    { step: "03", title: "Xay & Quết", desc: "Thịt cá được xây nhuyễn và quết liên tục cho đến khi đạt độ dai mịn." },
                    { step: "04", title: "Nêm Gia Vị", desc: "Các loại gia vị được nêm nếm vừa phải, tạo hương vị đậm đà hài hòa." },
                    { step: "05", title: "Tạo Hình", desc: "Chả cá được nặn thành từng miếng tròn hoặc hình oval." },
                    { step: "06", title: "Hấp/Chiên", desc: "Chả cá được hấp chín hoặc chiên vàng tùy theo sở thích." }
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-secondary text-secondary-foreground font-bold text-sm">
                          {item.step}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <img 
                  src={processImageUrl}
                  alt="Quy trình chế biến chả cá"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dishes Section */}
      <section id="dishes" className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <p className="text-secondary font-accent text-sm uppercase tracking-widest">Các Món Ăn</p>
              <h2 className="text-3xl md:text-4xl font-bold">Những Cách Thưởng Thức</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img 
                  src={dishImageUrl}
                  alt="Chả cá nóng với rau sống"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-6">
                <div className="space-y-4">
                  {[
                    { 
                      name: "Bún Chả Cá", 
                      desc: "Món ăn đặc trưng với nước dùng ngọt thanh, chả cá dai ngon, ăn kèm rau sống và ớt tươi." 
                    },
                    { 
                      name: "Bánh Mì Chả Cá", 
                      desc: "Chả cá chiên kẹp trong bánh mì nóng giòn, thêm chút rau dưa và tương ớt." 
                    },
                    { 
                      name: "Lẩu Chả Cá", 
                      desc: "Nước lẩu đậm đà, chả cá tươi ngon, ăn kèm các loại rau và nấm." 
                    },
                    { 
                      name: "Chả Cá Kho Tiêu", 
                      desc: "Chả cá kho cùng tiêu xanh, ớt và nước mắm, ăn với cơm nóng rất bắt vị." 
                    }
                  ].map((dish) => (
                    <div key={dish.name} className="p-4 bg-background rounded-lg border border-border hover:border-secondary transition-colors">
                      <h4 className="font-semibold text-foreground mb-2">{dish.name}</h4>
                      <p className="text-sm text-muted-foreground">{dish.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <p className="text-secondary font-accent text-sm uppercase tracking-widest">Liên Hệ</p>
              <h2 className="text-3xl md:text-4xl font-bold">Thưởng Thức Hương Vị Chính Gốc</h2>
              <p className="text-muted-foreground">
                Để thưởng thức Chả Cá Mũi Né "Nhiên Trần" chính gốc, quý khách có thể liên hệ với chúng tôi qua các kênh dưới đây.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-muted/50 rounded-lg border border-border">
                <div className="text-secondary mb-3">
                  <ChefHat className="w-8 h-8 mx-auto" />
                </div>
                <h4 className="font-semibold mb-2">Địa Chỉ</h4>
                <p className="text-sm text-muted-foreground">
                  Mũi Né, Phan Thiết<br />
                  Bình Thuận, Việt Nam
                </p>
              </div>
              <div className="p-6 bg-muted/50 rounded-lg border border-border">
                <div className="text-secondary mb-3">
                  <Leaf className="w-8 h-8 mx-auto" />
                </div>
                <h4 className="font-semibold mb-2">Điện Thoại</h4>
                <p className="text-sm text-muted-foreground">
                  +84 (0) XXX XXX XXX<br />
                  Hỗ trợ 24/7
                </p>
              </div>
              <div className="p-6 bg-muted/50 rounded-lg border border-border">
                <div className="text-secondary mb-3">
                  <Flame className="w-8 h-8 mx-auto" />
                </div>
                <h4 className="font-semibold mb-2">Website</h4>
                <p className="text-sm text-muted-foreground">
                  www.chacamuine.vn<br />
                  Fanpage: Chả Cá Mũi Né
                </p>
              </div>
            </div>

            <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-6 text-base">
              Liên Hệ Ngay
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30 py-8">
        <div className="container text-center text-sm text-muted-foreground">
          <p>© 2026 Chả Cá Mũi Né "Nhiên Trần" - Hương vị biển cả đậm đà</p>
          <p className="mt-2">Thiết kế với tình yêu dành cho ẩm thực Việt Nam</p>
        </div>
      </footer>
    </div>
  );
}
