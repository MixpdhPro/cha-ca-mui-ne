import { useEffect } from 'react';

/**
 * Facebook Tab Component
 * This page is designed to be loaded within a Facebook Tab iframe
 * It displays the Chả Cá Mũi Né content optimized for Facebook's iframe environment
 */
/* eslint-disable @typescript-eslint/no-explicit-any */
export default function FacebookTab() {
  useEffect(() => {
    // Initialize Facebook SDK if needed
    if ((window as any).FB) {
      (window as any).FB.XFBML.parse();
    }
  }, []);

  const heroImageUrl = "https://d2xsxph8kpxj0f.cloudfront.net/310519663450626883/V8kgNLLTxsY5sNt4BbUMm7/cha_ca_hero_banner-LYy7KLHqaQPZhJcFCchYaG.webp";

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Facebook Tab Header */}
      <div className="bg-secondary text-secondary-foreground py-6">
        <div className="container text-center">
          <h1 className="text-3xl font-bold">Chả Cá Mũi Né "Nhiên Trần"</h1>
          <p className="text-sm mt-2 opacity-90">Hương vị biển cả đậm đà - Đặc sản Mũi Né</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-8 space-y-8">
        {/* Hero Section */}
        <section className="bg-white rounded-lg shadow-md overflow-hidden">
          <img 
            src={heroImageUrl}
            alt="Chả cá Mũi Né Nhiên Trần"
            className="w-full h-auto"
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Chào Mừng Đến Với Chả Cá Mũi Né</h2>
            <p className="text-muted-foreground mb-4">
              Chả cá "Nhiên Trần" được làm từ những con cá tươi ngon nhất, đánh bắt trực tiếp từ vùng biển Mũi Né. 
              Bí quyết tạo nên hương vị đặc trưng nằm ở việc kết hợp các loại cá khác nhau theo tỷ lệ vàng, 
              cùng với gia vị truyền thống.
            </p>
            <div className="flex gap-3">
              <a 
                href="https://3000-iq4dxy655290smtm6elk2-0cc240e2.sg1.manus.computer/" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-secondary text-secondary-foreground px-6 py-2 rounded-lg font-semibold hover:bg-secondary/90 transition-colors"
              >
                Xem Trang Đầy Đủ
              </a>
            </div>
          </div>
        </section>

        {/* Quick Info */}
        <section className="grid md:grid-cols-3 gap-4">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-bold text-lg mb-2">🐟 Nguyên Liệu Tươi</h3>
            <p className="text-sm text-muted-foreground">
              Cá tươi được chọn lọc kỹ càng từ vùng biển Mũi Né
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-bold text-lg mb-2">👨‍🍳 Chế Biến Thủ Công</h3>
            <p className="text-sm text-muted-foreground">
              Quy trình truyền thống, giữ gìn hương vị tự nhiên
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-bold text-lg mb-2">⭐ Chất Lượng Cao</h3>
            <p className="text-sm text-muted-foreground">
              Công thức gia đình bí truyền, được yêu thích nhiều năm
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-white p-6 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-bold mb-4">Liên Hệ Với Chúng Tôi</h2>
          <p className="text-muted-foreground mb-6">
            Để đặt hàng hoặc tìm hiểu thêm về sản phẩm của chúng tôi
          </p>
          <div className="space-y-3">
            <p><strong>📍 Địa chỉ:</strong> Mũi Né, Phan Thiết, Bình Thuận</p>
            <p><strong>📞 Điện thoại:</strong> +84 (0) XXX XXX XXX</p>
            <p><strong>🌐 Website:</strong> www.chacamuine.vn</p>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center text-sm text-muted-foreground py-4 border-t">
          <p>© 2026 Chả Cá Mũi Né "Nhiên Trần" - Hương vị biển cả đậm đà</p>
        </div>
      </div>
    </div>
  );
}
