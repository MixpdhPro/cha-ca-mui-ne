import { useAuth } from "@/_core/hooks/useAuth";
import { useState } from 'react';
import { Streamdown } from 'streamdown';
import { Button } from '@/components/ui/button';
import { ChefHat, Leaf, Flame, X, Phone, MapPin, MessageCircle, Facebook } from 'lucide-react';

/**
 * Design Philosophy: Coastal Heritage
 * - Warm, earthy color palette (cream, deep teal, burnt orange)
 * - Typography: Playfair Display (serif, bold) for headings, Lora (serif) for body
 * - Asymmetric layout with organic spacing
 * - Watercolor aesthetic with subtle textures
 * - Handcrafted, artisanal feel throughout
 */

export default function Home() {
  // The userAuth hooks provides authentication state
  // To implement login/logout functionality, simply call logout() or redirect to getLoginUrl()
  let { user, loading, error, isAuthenticated, logout } = useAuth();
  const [selectedDish, setSelectedDish] = useState<{ name: string; desc: string; details: string; image?: string } | null>(null);

  const heroImageUrl = "https://d2xsxph8kpxj0f.cloudfront.net/310519663450626883/V8kgNLLTxsY5sNt4BbUMm7/cha_ca_hero_banner-LYy7KLHqaQPZhJcFCchYaG.webp";
  const processImageUrl = "https://d2xsxph8kpxj0f.cloudfront.net/310519663450626883/V8kgNLLTxsY5sNt4BbUMm7/cha_ca_process-ny7JkwLdYZAMbMgVapV5zx.webp";
  const ingredientsImageUrl = "https://d2xsxph8kpxj0f.cloudfront.net/310519663450626883/V8kgNLLTxsY5sNt4BbUMm7/cha_ca_ingredients-oRA3QwhXDR44g3TsUmAv3p.webp";
  const dishImageUrl = "https://d2xsxph8kpxj0f.cloudfront.net/310519663450626883/V8kgNLLTxsY5sNt4BbUMm7/cha_ca_dish_real_7550f6e8.webp";

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
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-sm hover:text-secondary transition-colors">Trang Chủ</button>
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
                <Button 
                  onClick={() => document.getElementById('dishes')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                >
                  Khám Phá Ngay
                </Button>
                <Button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  variant="outline" 
                  className="border-secondary text-secondary hover:bg-secondary/10"
                >
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
                      desc: "Món ăn đặc trưng với nước dùng ngọt thanh, chả cá dai ngon, ăn kèm rau sống và ớt tươi.",
                      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663450626883/V8kgNLLTxsY5sNt4BbUMm7/bun_cha_ca-H4jF5Qaz6nzfiPyWvEMSjN.webp",
                      details: "Bún Chả Cá là món ăn truyền thống của Mũi Né, nổi tiếng với hương vị độc đáo. Nước dùng được nấu từ xương cá tươi, tạo nên vị ngọt thanh tự nhiên. Chả cá được nướng trên than hoa, có lớp vỏ ngoài giòn, bên trong mềm ngon. Ăn kèm với bún tươi, rau sống (rau cải, dill, bạc hà) tạo nên sự hòa quyện tuyệt vời."
                    },
                    { 
                      name: "Bánh Mì Chả Cá", 
                      desc: "Chả cá chiên kẹp trong bánh mì nóng giòn, thêm chút rau dưa và tương ớt.",
                      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663450626883/V8kgNLLTxsY5sNt4BbUMm7/banh_mi_cha_ca-d5kdVN6xBR7gwuynfr3CGU.webp",
                      details: "Bánh Mì Chả Cá là sự kết hợp hoàn hảo giữa bánh mì giòn và chả cá nướng thơm. Bánh mì được nướng nóng, giòn tan, bên trong mềm. Chả cá được cắt thành những miếng vừa vặn, chiên vàng ơ. Kèm theo là rau dưa chua ngon, tương ớt cay nồng, tạo nên một bữa ăn nhanh gọn nhưng rất thỏa mãn."
                    },
                    { 
                      name: "Lẩu Chả Cá", 
                      desc: "Nước lẩu đậm đà, chả cá tươi ngon, ăn kèm các loại rau và nấm.",
                      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663450626883/V8kgNLLTxsY5sNt4BbUMm7/lau_cha_ca-KvVPtUPuqDtCX4AwPNcupM.webp",
                      details: "Lẩu Chả Cá là món ăn lý tưởng cho những bữa ăn tập thể. Nước lẩu được nấu từ xương cá, tôm, cua, tạo nên vị đậm đà, béo ngậy. Chả cá tươi được cắt thành lát mỏng, chín nhanh khi nhúng vào nước lẩu. Ăn kèm với rau xanh (bạc hà, dill, rau cải), nấm, tofu, tạo nên một bữa ăn vừa ngon vừa bổ dưỡng."
                    },
                    { 
                      name: "Chả Cá Kho Tiêu", 
                      desc: "Chả cá kho cùng tiêu xanh, ớt và nước mắm, ăn với cơm nóng rất bắt vị.",
                      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663450626883/V8kgNLLTxsY5sNt4BbUMm7/cha_ca_kho_tieu-W6jG56bCCtSutGb8ypGPWU.webp",
                      details: "Chả Cá Kho Tiêu là món ăn cơm truyền thống, hương vị cay nồng, kích thích vị giác. Chả cá được kho với tiêu xanh, ớt tươi, nước mắm cá, tạo nên vị cay nồng đặc trưng. Kho được nấu chậm để chả cá thấm đều gia vị, vị kho sâu sắc. Ăn với cơm nóng, rau sống, tạo nên một bữa ăn đơn giản nhưng rất bắt vị."
                    }
                  ].map((dish) => (
                    <button
                      key={dish.name}
                      onClick={() => setSelectedDish(dish)}
                      className="p-4 bg-background rounded-lg border border-border hover:border-secondary hover:bg-muted/50 transition-all cursor-pointer text-left overflow-hidden"
                    >
                      <img src={dish.image} alt={dish.name} className="w-full h-32 object-cover rounded-lg mb-3" />
                      <h4 className="font-semibold text-foreground mb-2">{dish.name}</h4>
                      <p className="text-sm text-muted-foreground line-clamp-2">{dish.desc}</p>
                      <p className="text-xs text-secondary mt-2">Nhấp để xem chi tiết →</p>
                    </button>
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
                  <MapPin className="w-8 h-8 mx-auto" />
                </div>
                <h4 className="font-semibold mb-2">Địa Chỉ</h4>
                <p className="text-sm text-muted-foreground">
                  6/14 Nguyễn Thanh Hùng<br />
                  Phường Mũi Né, Tỉnh Lâm Đồng
                </p>
              </div>
              <div className="p-6 bg-muted/50 rounded-lg border border-border">
                <div className="text-secondary mb-3">
                  <Phone className="w-8 h-8 mx-auto" />
                </div>
                <h4 className="font-semibold mb-2">Điện Thoại</h4>
                <button 
                  onClick={() => window.location.href = 'tel:0986679556'}
                  className="text-sm text-secondary hover:underline font-semibold"
                >
                  0986679556<br />
                  Gọi Ngay
                </button>
              </div>
              <div className="p-6 bg-muted/50 rounded-lg border border-border">
                <div className="text-secondary mb-3 flex gap-3 justify-center">
                  <button
                    onClick={() => window.open('https://zalo.me/0986679556', '_blank')}
                    title="Zalo"
                    className="text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    <MessageCircle className="w-8 h-8" />
                  </button>
                  <button
                    onClick={() => window.open('https://www.facebook.com/profile.php?id=100089317447444', '_blank')}
                    title="Facebook"
                    className="text-blue-800 hover:text-blue-900 transition-colors"
                  >
                    <Facebook className="w-8 h-8" />
                  </button>
                  <button
                    onClick={() => window.open('https://wa.me/0986679556', '_blank')}
                    title="WhatsApp"
                    className="text-green-600 hover:text-green-700 transition-colors"
                  >
                    <MessageCircle className="w-8 h-8" />
                  </button>
                </div>
                <h4 className="font-semibold mb-2">Kết Nối Với Chúng Tôi</h4>
                <p className="text-sm text-muted-foreground">
                  Zalo, Facebook, WhatsApp<br />
                  Liên lạc ngay
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                onClick={() => window.location.href = 'tel:0986679556'}
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-4 py-3 text-2xl rounded-full w-14 h-14 flex items-center justify-center"
                title="Gọi Điện Thoại"
              >
                <Phone className="w-6 h-6" />
              </Button>
              <Button 
                onClick={() => window.open('https://zalo.me/0986679556', '_blank')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 text-2xl rounded-full w-14 h-14 flex items-center justify-center"
                title="Zalo"
              >
                <span className="text-lg font-bold">Z</span>
              </Button>
              <Button 
                onClick={() => window.open('https://wa.me/0986679556', '_blank')}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-3 text-2xl rounded-full w-14 h-14 flex items-center justify-center"
                title="WhatsApp"
              >
                <span className="text-lg font-bold">W</span>
              </Button>
              <Button 
                onClick={() => window.open('https://www.facebook.com/profile.php?id=100089317447444', '_blank')}
                className="bg-blue-800 hover:bg-blue-900 text-white px-4 py-3 text-2xl rounded-full w-14 h-14 flex items-center justify-center"
                title="Facebook"
              >
                <span className="text-lg font-bold">f</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <p className="text-secondary font-accent text-sm uppercase tracking-widest">Vị Trí</p>
              <h2 className="text-3xl md:text-4xl font-bold">Tìm Chúng Tôi Trên Bản Đồ</h2>
            </div>
            <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg border border-border">
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen={true}
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.0!2d108.2830354!3d10.935157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31768fbb5b9bea93%3A0x3ab73afef7899851!2zQ2jDo0EgQ8OhIE3Dui0gTkU!5e0!3m2!1svi!2svi!4v1679123456789"
              />
            
        </div>
      </section>

      {/* Dish Detail Modal */}
      {selectedDish && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-background rounded-lg shadow-lg max-w-md w-full p-6 space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-foreground">{selectedDish.name}</h3>
              <button
                onClick={() => setSelectedDish(null)}
                className="p-1 hover:bg-muted rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            {selectedDish.image && (
              <img src={selectedDish.image} alt={selectedDish.name} className="w-full h-48 object-cover rounded-lg" />
            )}
            <p className="text-muted-foreground font-semibold">{selectedDish.desc}</p>
            <p className="text-sm text-muted-foreground leading-relaxed">{selectedDish.details}</p>
            <div className="flex gap-3 pt-4">
              <Button
                onClick={() => setSelectedDish(null)}
                variant="outline"
                className="flex-1"
              >
                Đóng
              </Button>
              <Button className="flex-1 bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                Gọi Đặt Hàng: 0986679556
              </Button>
            </div>
          </div>
        </div>
      )}

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
