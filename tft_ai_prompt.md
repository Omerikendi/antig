# Role ve Hedef
Sen usta bir yazılım geliştiricisisin. Görevin, aşağıda sağlanan güncel Teamfight Tactics (TFT) meta verilerini kullanarak kullanıcılar için şık, modern ve etkileşimli bir "TFT Meta Rehberi ve Dashboard" web uygulaması kodlamaktır.

# Uygulama Gereksinimleri
1. **Teknoloji:** İsteğe bağlı olarak React/Next.js veya HTML/CSS/JS kullanabilirsin. Eğer HTML/CSS/JS kullanacaksan modern bir tasarım (Glassmorphism, karanlık tema, pürüzsüz animasyonlar) uygula ve tek/birkaç dosyada toparla.
2. **Yapı:**
    - **Header/Giriş:** Yama 16.6 ("Unlocks Unlocked!") hakkında özet bilgi.
    - **Tier List (Kompozisyonlar):** S-Tier ve A-Tier kompozisyonları gösteren, tıklandığında detayları açılan kartlar (Accordion veya Modal yapıları).
    - **Oyun Planı Bölümü:** Erken oyun, orta oyun ve esneklik aşamalarını anlatan bir zaman çizelgesi (timeline) veya adım adım rehber.
3. **Veri Modeli:** Aşağıdaki verileri JSON formatında bir JavaScript objesi olarak kodun içine göm ve arayüzü bu veriyi okuyarak dinamik olarak oluştur.

# Veri (Patch 16.6 - Mart 2026, Set 16: Lore & Legends)
Aşağıdaki bilgileri uygulamanın içeriği olarak kullan:

## Yama Özeti (Yama 16.6)
- "Unlock" mekanikleri daha erişilebilir, esnek oyun teşvik ediliyor (Bard, Graves, Yorick, Darius vb. için kolaylaştı).
- Aatrox büyü hasarı dengelendi, Annie ve Azir taban saldırı hızı (AS) buff'landı. Ryze buff, Sylas/Sett nerf aldı.
- Ekonomi eklentilerinde (augments) değişiklikler var, oyunda altın yönetimi zorlaştı. Choncc's Treasure modu aktif.

## S-Tier Kompozisyonlar
1. **Noxus Deathmark**
   - Taşıyıcılar: Kindred, Senna & Lucian, Skarner
   - Strateji: Fast 9
   - Açıklama: Kindred ve Skarner ön-arka hat uyumu, Lucian & Senna ile yüksek hasar.
2. **Fast 9 Fleet**
   - Taşıyıcılar: Lucian & Senna, Miss Fortune, Tahm Kench, Wukong
   - Strateji: Fast 9
   - Açıklama: Tahm ve Wukong sağlam ön hat, Lucian ve MF arka hattan alan/tek hedef hasarı.

## A-Tier Kompozisyonlar
3. **Shurima Shuffle**
   - Taşıyıcılar: Annie, Azir, Renekton, Tibbers
   - Strateji: Fast 9 (veya 8'de stabilize)
   - Açıklama: Annie ve Azir buff'lı. Ön hat Renekton ve Tibbers.
4. **Bruiser Bear**
   - Taşıyıcılar: Volibear, Ryze, Lissandra, Wukong
   - Strateji: Fast 8
   - Açıklama: Volibear ana tank, Lissandra ve Ryze büyü hasarı. Agresif lobilerde ilk 4 oynamak için ideal.

## Oyun Planı (Tırmanış Stratejisi)
- **Erken Oyun:** Ekonomi eklentilerinin olmaması altını zorlaştırır. Unlock birimleriyle win-streak deneyerek can koru.
- **Orta Oyun:** 50 altın üstü ve yüksek canda Fast 9 (Noxus / Fast 9 Fleet) hedeflenmeli.
- **Esneklik (Pivot):** Can düşükse 8. seviyede Bruiser Bear'a dönerek ilk 4'ü garantile. Ionia ekonomi stratejisinden kaçın.

# Tasarım Yönergeleri
- Etkileyici bir UI tasarımı yap, sıkıcı renklerden kaçın, "dark mode" temelli ve oyunculara hitap eden bir renk paleti kullan.
- Kompozisyon kartlarına hover efekti ve açılır/kapanır (accordion) veya pop-up (modal) detay ekranı ekle.
- "Sıfırdan bir web uygulaması yaz" talimatına uygun şekilde temiz, modüler ve güncel teknolojilerle tam donanımlı kodları üret.
