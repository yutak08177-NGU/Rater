import Image from "next/image";


function Placeholder({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div className={`bg-gray-200 flex items-center justify-center ${className}`}>
      <p className="text-gray-400 text-xs text-center px-4 leading-relaxed">{label}</p>
    </div>
  );
}

function SectionLabel({ text, dark = false, className = "" }: { text: string; dark?: boolean; className?: string }) {
  return (
    <div className="mb-10">
      <div className="w-8 h-[2px] bg-[#C49A00] mb-2" />
      <span
        className={`text-[10px] tracking-[0.3em] font-medium ${dark ? "text-white" : "text-black"} ${className}`}
      >
        {text}
      </span>
    </div>
  );
}

function GoldButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`block w-full bg-[#C49A00] text-white font-bold text-center py-4 rounded-full text-sm tracking-wider ${className}`}
    >
      {children}
    </a>
  );
}

export default function Home() {
  const mapsUrl =
    "https://www.google.com/maps/search/?api=1&query=東京都新宿区西新宿5-5-1+ザ・パークハウス西新宿";
  const mapsEmbedUrl =
    "https://maps.google.com/maps?q=東京都新宿区西新宿5-5-1+ザ・パークハウス西新宿&hl=ja&z=16&output=embed";

  return (
    <main>
      {/* ===== HERO ===== */}
      <section className="relative h-screen md:h-[88vh]">
        {/* 背景画像 */}
        <Image
          src="/images/hero-back.webp"
          alt=""
          fill
          className="object-cover"
          priority
        />
        {/* 前景：PC用 */}
        <div className="hidden md:flex absolute inset-0 items-center justify-center z-10" style={{ paddingTop: "4%" }}>
          <Image
            src="/images/hero-illustration.png"
            alt="メインビジュアル"
            width={1350}
            height={443}
            className="object-contain"
          />
        </div>
        {/* 前景：スマホ用イラスト */}
        <div className="flex md:hidden absolute inset-0 z-10">
          <div className="relative w-full h-full">
            <Image
              src="/images/hero-illustration-phone.png"
              alt="メインビジュアル"
              fill
              className="object-cover object-top"
            />
          </div>
        </div>
        {/* ロゴ（スマホ・白エリア右上）← ロゴ画像に差し替え可能 */}
        <div className="flex md:hidden absolute top-[22%] right-0 w-1/2 justify-center z-20 flex-col items-center gap-1">
          <Image src="/images/ratel-icon.png" alt="Ratel" width={80} height={46} className="object-contain" />
          <span className="text-xs font-bold tracking-[0.2em] text-black">Ratel</span>
        </div>
      </section>

      {/* ===== CONCEPT ===== */}
      {/* 🔧 文字サイズ調整: text-xs / text-sm / text-base / text-lg / text-xl / text-2xl */}
      <section className="bg-[#1a1a1a] text-white py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <SectionLabel text="CONCEPT" className="text-xs" dark />
          {/* ロゴ文字サイズ → text-2xl を変更 */}
          <div className="flex justify-center items-center gap-3 mb-8">
            <Image src="/images/ratel-icon-hooter.png" alt="Ratel" width={40} height={24} className="object-contain" />
            <span className="text-2xl font-bold tracking-[0.2em]">Ratel</span>
          </div>
          {/* キャッチコピーサイズ → text-sm を変更 */}
          <p className="text-center text-sm leading-loose mb-10">
            日本に適正な金融教育の機会をつくり
            <br />
            各家庭でお金の教育を受けれる社会を実現する
          </p>
          {/* 動画プレースホルダー */}
          <div className="bg-[#252525] rounded overflow-hidden mb-10">
            <Placeholder
              label="Ratel 紹介動画SHORTver&#10;（YouTube動画を差し替え）"
              className="w-full h-52 bg-[#252525] rounded-none"
            />
            <div className="px-4 py-3 flex justify-between items-center">
              <div className="flex gap-4 text-gray-500 text-base">
                <span>↗</span>
                <span>⏱</span>
              </div>
              <span className="text-white text-sm">見る</span>
            </div>
          </div>
          {/* 本文サイズ → text-sm を変更（2箇所） */}
          <p className="text-sm leading-loose text-center mb-6">
            世界の先進国と比較して日本の金融教育が遅れている昨今。知識がない日本人に対して、「簡単な言葉でわかりやすく」をテーマに最も皆さんに必要な金融教育の場を提供しています。
          </p>
          <p className="text-sm leading-loose text-center">
            義務教育では得られない適正な金融教育の場をつくり、各家庭でお金の教育がなされるような日本の未来を創造します。そこには、皆さんのお金の扱い方がより良くなる未来が待っています。
          </p>
        </div>
      </section>

      {/* ===== ACTION ===== */}
      <section className="bg-white pt-20 px-6">
        <div className="max-w-2xl mx-auto">
          <SectionLabel text="ACTION" className="text-xs" />
          {/* スマホ: text-base を変更 / PC: md:text-xl を変更 */}
          <h2 className="text-base md:text-xl font-bold text-center leading-relaxed text-black mb-12">
            日本に適正な金融教育の機会をつくるために
            <br />
            1回でわかりやすく学べるお金の考え方の
            <br />
            セミナーを実施しています
          </h2>
          <Image
            src="/images/action-seminar.jpg"
            alt="未来投資2.0セミナー"
            width={900}
            height={764}
            style={{ width: "90%", height: "auto" }}
            className="rounded mx-auto block"
          />
          {/* 三角形（セクション境界） */}
          <div className="flex justify-center mt-10">
            <div style={{
              width: 0,
              height: 0,
              borderLeft: "50px solid transparent",
              borderRight: "50px solid transparent",
              borderBottom: "70px solid #efefef",
            }} />
          </div>
        </div>
      </section>

      {/* ===== FEATURES（グレー）===== */}
      <section className="bg-[#efefef] py-20 px-6">
        <div className="max-w-2xl mx-auto flex flex-col items-center">
          <div className="relative w-full h-24 md:h-32 mb-12">
            <Image
              src="/images/features-smartphone.png"
              alt="スマートフォン送金イラスト"
              fill
              className="object-contain"
            />
          </div>
          <h2 className="text-xm font-bold text-center leading-relaxed text-black mb-8">
            お金の動かし方が学べる
            <br />
            アメリカやイギリスのような金融先進国の
            <br />
            水準で金融教育の提供をしています
          </h2>
          <p className="text-xs leading-loose text-black mb-10 w-full">
            金融教育の知識の乏しい日本の一般家庭に対して、何が投資で何が投機か適正な判断を下せるための教育機会を提供しております。
          </p>
          <div className="relative w-full h-48 mb-10">
            <Image
              src="/images/features-investment.jpg"
              alt="投資 vs 投機 図解"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-xs leading-loose text-black mb-6 w-full">
            一般的に事業への出資や「確実に何％儲かる」などの"投機的"な話と"投資"の話を誤解している人が多い中"投資"が何か？を知ることで、少なくとも「変なものに騙されない」「何から始めたら良いか」「自分で選び取ることができる」そんな日本人が増えることを目指しています。
          </p>
          <p className="text-xs leading-loose text-black mb-10 w-full">
            その結果、日本の社会をより良くする社会貢献に少しでもなれば良いなという想いでこの金融教育事業の発案に至りました。
          </p>
          <div className="relative w-full h-44 mb-10">
            <Image
              src="/images/features-warning.jpg"
              alt="投資詐欺 WARNING"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-xs leading-loose text-black mb-6 w-full">
            今まで様々な事案やともすると投資詐欺的な事案に資産を減らしてきた方々もしっかりとした投資への知識を学んでいく機会になるかと思います。
          </p>
          <p className="text-xs leading-loose text-black w-full">
            分かりやすく簡単にがコンセプトなので、知識の浅い方も１回で分かりやすく投資の考え方を学んで頂ける機会になるかと思います。
          </p>
        </div>
      </section>

      {/* ===== ONLINE SEMINAR（白）===== */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-2xl mx-auto flex flex-col items-center">
          <h2 className="text-xm font-bold text-center text-black mb-10">
            オンライン勉強会の開催
          </h2>
          {/* オンラインセミナー画像: スマホ → w-XX h-XX / PC → md:w-64 md:h-52 を変更 */}
          <div className="relative w-44 h-36 md:w-64 md:h-52 mb-10">
            <Image
              src="/images/seminar-online.png"
              alt="オンラインセミナー"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-xs leading-loose text-black text-center mb-10">
            会場セミナーをはじめ、オンラインセミナーも開催しております。Ratel
            公式の講師陣が全国各地で開催しているのでお気軽にご参加下さい。開催場所や日時などは下記の公式LINEのお友だち追加で確認頂けます。
          </p>
          {/* セミナー画面画像: スマホ → w-[XX%] / PC → md:w-[60%] を変更 */}
          <Image
            src="/images/seminar-laptop.jpg"
            alt="セミナー画面"
            width={700}
            height={381}
            className="rounded mx-auto block w-[90%] md:w-[60%]"
          />
        </div>
      </section>

      {/* ===== LINE CTA（ダーク）===== */}
      <section className="bg-[#1a1a1a] py-16 px-6">
        <div className="max-w-sm mx-auto flex flex-col items-center">
          <p className="text-white text-sl mb-8 text-center">開催情報やお申込みはこちら</p>
          <GoldButton href="https://lin.ee/rYFBgA7" className="mb-4"><span className="text-lg">公式LINE</span> &nbsp;&nbsp; お友だち追加</GoldButton>
          <GoldButton href="mailto:Ratel@ratel-ltd.tokyo">
            &nbsp; Ratel@ratel-ltd.tokyo
          </GoldButton>
        </div>
      </section>

      {/* ===== OWNER ===== */}
      <section className="relative" style={{ minHeight: "700px" }}>
        {/* 分割背景 */}
        <div className="absolute inset-0 flex pointer-events-none">
          <div className="w-1/2 bg-white" />
          <div className="w-1/2 bg-[#F7C52D]" />
        </div>
        {/* コンテンツ */}
        <div className="relative z-10 max-w-3xl mx-auto py-16 px-4 md:px-8">
          <SectionLabel text="OWNER" className="text-xs" />
          {/* CEOカード（白+黄をまたぐ） */}
          <div className="border border-gray-200 bg-white rounded-lg p-4 md:p-8 mb-10 flex items-center justify-between">
            <div className="flex-1 pr-3 md:pr-8">
              <div className="flex items-center gap-2 mb-4 md:mb-6">
                <Image src="/images/ratel-icon.png" alt="Ratel" width={44} height={26} className="object-contain" />
                <span className="font-bold text-black text-base tracking-[0.15em]">Ratel</span>
              </div>
              <p className="text-xs text-gray-500 mb-1">CEO</p>
              <h3 className="text-xl md:text-3xl font-bold text-black">名倉 健太</h3>
              <p className="text-xs text-gray-400 mb-4 md:mb-6">kenta nagura</p>
              <p className="text-xs md:text-sm text-gray-600">Ratel 株式会社</p>
            </div>
            <Placeholder label="CEO写真" className="w-32 h-40 md:w-44 md:h-52 rounded flex-shrink-0" />
          </div>
          {/* 経歴（白側） */}
          <div className="space-y-6">
            <div>
              <span className="inline-block bg-[#1a1a1a] text-white text-xs font-bold px-3 py-1 rounded mb-3">20 代</span>
              <p className="text-sm text-gray-700 leading-relaxed">
                高等学校、専門学校、大学で教育業に携わる。
              </p>
            </div>
            <div>
              <span className="inline-block bg-[#1a1a1a] text-white text-xs font-bold px-3 py-1 rounded mb-3">30 代</span>
              <p className="text-sm text-gray-700 leading-relaxed">
                不動産、保険、その他 金融商品の営業で各トップセールを上げる。
              </p>
            </div>
            <div>
              <span className="inline-block bg-[#1a1a1a] text-white text-xs font-bold px-3 py-1 rounded mb-3">現在</span>
              <p className="text-sm text-gray-700 leading-relaxed">
                金融教育事業を立ち上げ、日本国内の法人・個人に向けに、お金や投資の考え方を学べるセミナーを全国やオンラインで主宰。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section className="bg-[#1a1a1a] py-20 px-6">
        <div className="max-w-sm mx-auto">
          <SectionLabel text="CONTACT" dark className="text-xs" />
          <p className="text-white text-sm text-center mb-8">
            お問合せは公式LINEまたはe-mailをご利用下さい
          </p>
          <GoldButton href="https://lin.ee/rYFBgA7" className="mb-4"><span className="text-lg">公式LINE</span> &nbsp;&nbsp; お友だち追加</GoldButton>
          <GoldButton href="mailto:Ratel@ratel-ltd.tokyo">
            &nbsp; Ratel@ratel-ltd.tokyo
          </GoldButton>
        </div>
      </section>

      {/* ===== COMPANY ===== */}
      <section className="relative" style={{ minHeight: "500px" }}>
        <div className="absolute inset-0 flex pointer-events-none">
          <div className="w-1/2 bg-white" />
          <div className="w-1/2 bg-[#F7C52D]" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto py-16 px-8">
          <SectionLabel text="COMPANY" className="text-xs" />
          <h3 className="text-xl font-bold text-black mb-4">Ratel 株式会社</h3>
          <p className="text-sm text-black">TOKYO OFFICE</p>
          <p className="text-sm text-black mt-1">〒160-0023</p>
          <p className="text-sm text-black">東京都新宿区西新宿5-5-1 ザ・パークハウス西新宿タワー60</p>
          {/* 埋め込みGoogleマップ */}
          <div className="mt-6 w-full" style={{ height: "380px" }}>
            <iframe
              src={mapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          {/* GoogleMap リンクボタン */}
          <div className="flex justify-center mt-8">
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1a1a1a] text-white text-sm font-medium px-10 py-3 rounded-full flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              📍 GoogleMap で見る
            </a>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-[#1a1a1a] py-12 flex flex-col items-center gap-4">
        <div className="flex items-center gap-2">
          <Image src="/images/ratel-icon-hooter.png" alt="Ratel" width={28} height={16} className="object-contain" />
          <span className="text-white font-bold tracking-[0.2em]">Ratel</span>
        </div>
        <p className="text-gray-400 text-xs">©2021 Ratel all rights reserved.</p>
      </footer>
    </main>
  );
}
