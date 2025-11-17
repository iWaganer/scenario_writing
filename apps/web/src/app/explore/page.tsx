import Link from "next/link";

export default function ExplorePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* ヘッダー */}
      <header className="border-b border-slate-800 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-2">
            <Link href="/" className="text-lg font-bold tracking-tight">
              ScenarioShelf
            </Link>
            <span className="rounded bg-indigo-500/10 px-2 py-0.5 text-[10px] text-indigo-300">
              explore
            </span>
          </div>

          <nav className="hidden items-center gap-4 text-sm text-slate-300 md:flex">
            <Link href="/workspace" className="hover:text-white">
              ホーム
            </Link>
            <Link href="/projects" className="hover:text-white">
              Myプロジェクト
            </Link>
            <span className="text-slate-100 underline underline-offset-4">
              Explore
            </span>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/account"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-600 bg-slate-900 text-xs font-semibold text-slate-200 hover:border-indigo-400"
            >
              Y
            </Link>
          </div>
        </div>
      </header>

      {/* メインプレート */}
      <div className="mx-auto max-w-5xl px-4 py-10">
        <h1 className="text-2xl font-semibold tracking-tight">
          公開シナリオを探す
        </h1>
        <p className="mt-2 text-sm text-slate-300 max-w-xl">
          各ユーザーが公開しているシナリオプロジェクトです。気になる作品を開くか、クローンして自分の棚に追加できます。
        </p>

        {/* 検索バー（ダミー） */}
        <div className="mt-6 flex items-center gap-3">
          <input
            type="text"
            className="w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-200 placeholder:text-slate-500 focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400"
            placeholder="キーワード / タグ を検索..."
          />
          <button className="rounded-md border border-slate-700 px-4 py-2 text-sm text-slate-200 hover:border-indigo-400 hover:text-white">
            絞り込み
          </button>
        </div>

        {/* プロジェクト一覧（モック） */}
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <ProjectCard
            title="古代遺跡『灰色図書館』"
            description="失踪した調査隊を追う、灰色の遺跡群を探索するシティ型シナリオ。"
            tags={["CoC", "探索", "遺跡"]}
            author="GM太郎"
            clones={12}
            updated="2025-10-12"
          />

          {/* Card 2 */}
          <ProjectCard
            title="学園怪談『七不思議の番人』"
            description="部活動と怪談が交錯する現代学園ミステリ系短編。"
            tags={["学園", "ミステリ", "現代"]}
            author="PL花子"
            clones={7}
            updated="2025-09-02"
          />

          {/* Card 3 */}
          <ProjectCard
            title="砂上の王国と三つの願い"
            description="砂漠都市を舞台にした、願いと代償をテーマにした冒険シティ。"
            tags={["冒険", "異国風", "短編"]}
            author="RPG職人"
            clones={4}
            updated="2025-11-20"
          />

          {/* Card 4 */}
          <ProjectCard
            title="星降る夜の演劇部"
            description="演劇部の陰に潜む秘密。舞台裏で起きる不可解な出来事を追う日常系ミステリ。"
            tags={["学園", "日常系", "ミステリ"]}
            author="劇作家PL"
            clones={6}
            updated="2025-10-05"
          />

          {/* Card 5 */}
          <ProjectCard
            title="雪の檻と六つの鐘"
            description="吹雪に閉ざされた山荘での密室系シナリオ。導入が簡単で回しやすい。"
            tags={["冬", "密室", "短編"]}
            author="氷点P"
            clones={15}
            updated="2025-10-28"
          />

          {/* Card 6 */}
          <ProjectCard
            title="黒猫の郵便配達"
            description="ほのぼの系ファンタジー。黒猫といっしょに郵便を届けるIF調物語。"
            tags={["ファンタジー", "日常", "ゆるい"]}
            author="ゆるふわGM"
            clones={3}
            updated="2025-11-01"
          />
        </div>
      </div>
    </main>
  );
}

/* ---- プロジェクトカード（モック用コンポーネント） ---- */
function ProjectCard({
  title,
  description,
  tags,
  author,
  clones,
  updated,
}: {
  title: string;
  description: string;
  tags: string[];
  author: string;
  clones: number;
  updated: string;
}) {
  return (
    <div className="flex flex-col justify-between rounded-xl border border-slate-800 bg-slate-900/70 p-4 hover:border-indigo-400 hover:bg-slate-900 transition">
      <div>
        <h3 className="text-sm font-semibold text-slate-100">{title}</h3>
        <p className="mt-2 text-xs text-slate-300">{description}</p>

        {/* タグ */}
        <div className="mt-3 flex flex-wrap gap-1">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="rounded bg-slate-800 px-2 py-0.5 text-[10px] text-slate-300"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
        <span>by {author}</span>
        <span>{clones} clones</span>
      </div>

      <div className="mt-2 flex items-center justify-between text-[10px] text-slate-500">
        <span>更新日: {updated}</span>

        <button className="rounded border border-slate-700 px-2 py-1 text-[10px] text-slate-200 hover:border-indigo-400 hover:text-white">
          clone
        </button>
      </div>
    </div>
  );
}
