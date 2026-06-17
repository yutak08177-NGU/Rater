function LightningBolt({ className = "", size = 24 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={Math.round(size * 1.35)}
      viewBox="0 0 20 27"
      fill="currentColor"
      className={className}
    >
      <path d="M13 0L3 15h7L7 27l13-16h-7z" />
    </svg>
  );
}

function Placeholder({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div className={`bg-gray-200 flex items-center justify-center ${className}`}>
      <p className="text-gray-400 text-xs text-center px-4 leading-relaxed">{label}</p>
    </div>
  );
}

function SectionLabel({ text, dark = false }: { text: string; dark?: boolean }) {
  return (
    <div className="mb-10">
      <div className="w-8 h-[2px] bg-[#C4A43A] mb-2" />
      <span
        className={`text-[10px] tracking-[0.3em] font-medium ${dark ? "text-white" : "text-black"}`}
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
      className={`block w-full bg-[#C4A43A] text-white font-bold text-center py-4 rounded-full text-sm tracking-wider ${className}`}
    >
      {children}
    </a>
  );
}

export default function Home() {
  const mapsUrl =
    "https://www.google.com/maps/search/?api=1&query=〒163-1055+東京都新宿区西新宿3-7-1-2";
  const mapsEmbedUrl =
    "https://maps.google.com/maps?q=東京都新宿区西新宿3-7-1-2&hl=ja&z=16&output=embed";

  return (
    <main>
      {/* ===== HERO ===== */}
      <section className="flex" style={{ minHeight: "100vh" }}>
        {/* 左：黄色 */}
        <div className="w-1/2 bg-[#F7C52D] flex flex-col justify-between px-14 py-16">
          <div />
          <div>
            <h1 className="text-5xl font-black leading-tight text-black mb-8">
              日本に
              <br />
              いま必要な
              <br />
              金融教育の場を
              <br />
              提供する
            </h1>
            <div className="text-black text-sm font-semibold leading-8 mb-16">
              Providing
              <br />
              financial
              <br />
              education
              <br />
              to all
            </div>
          </div>
          {/* スクロールインジケーター */}
          <div className="flex flex-col items-start">
            <div className="w-2 h-2 rounded-full bg-black" />
            <div className="w-px h-14 bg-black ml-[3px] my-1" />
            <div className="border border-black text-black text-[10px] px-4 py-1 tracking-[0.3em]">
              S c r o l l
            </div>
          </div>
        </div>

        {/* 右：白 */}
        <div className="w-1/2 bg-white relative flex items-center justify-center">
          {/* ロゴ（縦並び、上右） */}
          <div className="absolute top-8 right-10 flex flex-col items-center gap-1">
            <LightningBolt className="text-[#C4A43A]" size={44} />
            <span className="font-bold text-black text-sm tracking-[0.2em]">CLOUD EDGE</span>
          </div>
          {/* イラストプレースホルダー */}
          <Placeholder
            label="メインビジュアル&#10;（アイソメトリックイラスト）"
            className="w-72 h-80 rounded"
          />
        </div>
      </section>

      {/* ===== CONCEPT ===== */}
      <section className="bg-[#1a1a1a] text-white py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <SectionLabel text="CONCEPT" dark />
          {/* ロゴ */}
          <div className="flex justify-center items-center gap-3 mb-8">
            <LightningBolt className="text-[#C4A43A]" size={28} />
            <span className="text-2xl font-bold tracking-[0.2em]">CLOUD EDGE</span>
          </div>
          {/* キャッチコピー */}
          <p className="text-center text-sm leading-loose mb-10">
            日本に適正な金融教育の機会をつくり
            <br />
            各家庭でお金の教育を受けれる社会を実現する
          </p>
          {/* 動画プレースホルダー */}
          <div className="bg-[#252525] rounded overflow-hidden mb-10">
            <Placeholder
              label="CLOUDEDGE 紹介動画SHORTver&#10;（YouTube動画を差し替え）"
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
          <p className="text-sm leading-loose text-center mb-6">
            世界の先進国と比較して日本の金融教育が遅れている昨今。知識がない日本人に対して、「簡単な言葉でわかりやすく」をテーマに最も皆さんに必要な金融教育の場を提供しています。
          </p>
          <p className="text-sm leading-loose text-center">
            義務教育では得られない適正な金融教育の場をつくり、各家庭でお金の教育がなされるような日本の未来を創造します。そこには、皆さんのお金の扱い方がより良くなる未来が待っています。
          </p>
        </div>
      </section>

      {/* ===== ACTION ===== */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <SectionLabel text="ACTION" />
          <h2 className="text-2xl font-bold text-center leading-relaxed text-black mb-12">
            日本に適正な金融教育の機会をつくるために
            <br />
            1回でわかりやすく学べるお金の考え方の
            <br />
            セミナーを実施しています
          </h2>
          {/* 未来投資2.0カード＋セミナー写真 */}
          <Placeholder
            label="未来投資2.0カード＋セミナー会場写真&#10;（重ね合わせ画像）"
            className="w-full h-72 rounded"
          />
        </div>
      </section>

      {/* ===== FEATURES（グレー）===== */}
      <section className="bg-[#efefef] py-20 px-6">
        <div className="max-w-2xl mx-auto flex flex-col items-center">
          <Placeholder label="スマートフォン送金イラスト" className="w-72 h-44 rounded mb-12" />
          <h2 className="text-xl font-bold text-center leading-relaxed text-black mb-8">
            お金の動かし方が学べる
            <br />
            アメリカやイギリスのような金融先進国の
            <br />
            水準で金融教育の提供しています
          </h2>
          <p className="text-sm leading-loose text-black mb-10 w-full">
            金融教育の知識の乏しい日本の一般家庭に対して、何が投資で何が投機か適正な判断を下せるための教育機会を提供しております。
          </p>
          <Placeholder label="投資 vs 投機 図解" className="w-full h-48 rounded mb-10" />
          <p className="text-sm leading-loose text-black mb-6 w-full">
            一般的に事業への出資や「確実に何％儲かる」などの"投機的"な話と"投資"の話を誤解している人が多い中"投資"が何か？を知ることで、少なくとも「変なものに騙されない」「何から始めたら良いか」「自分で選び取ることができる」そんな日本人が増えることを目指しています。
          </p>
          <p className="text-sm leading-loose text-black mb-10 w-full">
            その結果、日本の社会をより良くする社会貢献に少しでもなれば良いなという想いでこの金融教育事業の発案に至りました。
          </p>
          <Placeholder label="投資詐欺 WARNING イラスト" className="w-full h-44 rounded mb-10" />
          <p className="text-sm leading-loose text-black mb-6 w-full">
            今まで様々な事案やともすると投資詐欺的な事案に資産を減らしてきた方々もしっかりとした投資への知識を学んでいく機会になるかと思います。
          </p>
          <p className="text-sm leading-loose text-black w-full">
            分かりやすく簡単にがコンセプトなので、知識の浅い方も１回で分かりやすく投資の考え方を学んで頂ける機会になるかと思います。
          </p>
        </div>
      </section>

      {/* ===== ONLINE SEMINAR（白）===== */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-2xl mx-auto flex flex-col items-center">
          <h2 className="text-lg font-bold text-center text-black mb-10">
            オンライン勉強会の開催
          </h2>
          <Placeholder
            label="オンラインセミナー イラスト（ONLINE）"
            className="w-64 h-52 rounded mb-10"
          />
          <p className="text-sm leading-loose text-black text-center mb-10">
            会場セミナーをはじめ、オンラインセミナーも開催しております。CLOUD EDGE
            公式の講師陣が全国各地で開催しているのでお気軽にご参加下さい。開催場所や日時などは下記の公式LINE@のお友だち追加で確認頂けます。
          </p>
          <Placeholder
            label="セミナー画面 スクリーンショット（ラップトップ）"
            className="w-80 h-48 rounded"
          />
        </div>
      </section>

      {/* ===== LINE CTA（ダーク）===== */}
      <section className="bg-[#1a1a1a] py-16 px-6">
        <div className="max-w-sm mx-auto flex flex-col items-center">
          <p className="text-white text-sm mb-8 text-center">開催情報やお申込みはこちら</p>
          <GoldButton href="#" className="mb-4">LINE@ &nbsp;&nbsp; お友だち追加</GoldButton>
          <GoldButton href="mailto:info.cloudedge@gmail.com">
            ✉ &nbsp; info.cloudedge@gmail.com
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
        <div className="relative z-10 max-w-3xl mx-auto py-16 px-8">
          <SectionLabel text="OWNER" />
          {/* CEOカード（白+黄をまたぐ） */}
          <div className="border border-gray-200 bg-white rounded-lg p-8 mb-10 flex items-center justify-between">
            <div className="flex-1 pr-8">
              <div className="flex items-center gap-2 mb-6">
                <LightningBolt className="text-[#C4A43A]" size={18} />
                <span className="font-bold text-black text-base tracking-[0.15em]">CLOUD EDGE</span>
              </div>
              <p className="text-xs text-gray-500 mb-1">CEO</p>
              <h3 className="text-3xl font-bold text-black">竹田 陽一</h3>
              <p className="text-xs text-gray-400 mb-6">yoichi takeda</p>
              <p className="text-sm text-gray-600">（日本）株式会社 CLOUD EDGE</p>
              <p className="text-sm text-gray-600">（香港）CLOUD EDGE LIMITED</p>
            </div>
            <Placeholder label="CEO写真" className="w-44 h-52 rounded flex-shrink-0" />
          </div>
          {/* 経歴（白側） */}
          <div className="w-1/2 space-y-6">
            {[
              {
                period: "20代",
                text: "国内投資会社にて勤務。\n同時に若手に向けた経済セミナーを全国で開催。",
              },
              {
                period: "30代",
                text: "金融教育事業を立ち上げ、アドバイザリー資産1200億円の 香港金融機関と事業提携。",
              },
              {
                period: "現在",
                text: "日本国内の法人・個人向けに「未来投資2.0」というお金や 投資の考え方を学べるセミナーを全国やオンラインで主宰。",
              },
            ].map(({ period, text }) => (
              <div key={period}>
                <span className="bg-black text-white text-xs px-4 py-1 rounded-full">{period}</span>
                <p className="text-sm text-black mt-2 leading-relaxed whitespace-pre-line">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section className="bg-[#1a1a1a] py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <SectionLabel text="CONTACT" dark />
          <p className="text-white text-sm text-center mb-8">
            お問合せはLINE@またはe-mailをご利用下さい
          </p>
          <GoldButton href="#" className="mb-4">LINE@ &nbsp;&nbsp; お友だち追加</GoldButton>
          <GoldButton href="mailto:info.cloudedge@gmail.com">
            ✉ &nbsp; info.cloudedge@gmail.com
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
          <SectionLabel text="COMPANY" />
          <h3 className="text-xl font-bold text-black mb-4">株式会社 CLOUD EDGE</h3>
          <p className="text-sm text-black">TOKYO OFFICE</p>
          <p className="text-sm text-black mt-1">〒163-1055</p>
          <p className="text-sm text-black">東京都新宿区西新宿3-7-1-2</p>
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
          <LightningBolt className="text-[#C4A43A]" size={18} />
          <span className="text-white font-bold tracking-[0.2em]">CLOUD EDGE</span>
        </div>
        <p className="text-gray-400 text-xs">©2021 CLOUD EDGE all rights reserved.</p>
      </footer>
    </main>
  );
}
