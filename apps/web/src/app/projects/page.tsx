import Link from "next/link";

export default function ProjectsPage() {
  // いまはモック。あとでDBから取ってくる
  const mockProjects = [
    {
      id: "gray-library",
      name: "古代遺跡「灰色図書館」",
      description: "失踪した調査隊を追う探索系シティシナリオ。",
      tags: ["CoC", "探索", "遺跡"],
      visibility: "private" as const,
      updatedAt: "2025-11-16",
      issuesOpen: 3,
      isClone: false,
    },
    {
      id: "seven-mysteries",
      name: "学園怪談「七不思議の番人」",
      description: "学園の七不思議をめぐる青春ミステリ。",
      tags: ["学園", "ミステリ", "現代"],
      visibility: "public" as const,
      updatedAt: "2025-11-10",
      issuesOpen: 1,
      isClone: false,
    },
    {
      id: "desert-kingdom",
      name: "砂上の王国と三つの願い（クローン）",
      description: "公開シナリオをクローンして改造中のプロジェクト。",
      tags: ["冒険", "改造中"],
      visibility: "private" as const,
      updatedAt: "2025-11-08",
      issuesOpen: 5,
      isClone: true,
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* ヘッダー */}
      <header className="border-b border-slate-800 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-2">
            <Link href="/" className="text-lg font-bold tracking-tight">
              ScenarioShelf
            </Link>
            <span className="rounded bg-slate-800 px-2 py-0.5 text-[10px] text-slate-300">
              projects
            </span>
          </div>

          <nav className="hidden items-center gap-4 text-sm text-slate-300 md:flex">
            <Link href="/workspace" className="hover:text-white">
              ホーム
            </Link>
            <span className="text-slate-100 underline underline-offset-4">
              Myプロジェクト
            </span>
            <Link href="/explore" className="hover:text-white">
              Explore
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/me"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-600 bg-slate-900 text-xs font-semibold text-slate-200 hover:border-indigo-400"
            >
              Y
            </Link>
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <div className="mx-auto max-w-5xl px-4 py-8">
        {/* 上段：タイトル + ボタン */}
        <section className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div className="space-y-1">
            <h1 className="text-2xl font-semibold tracking-tight">
              Myプロジェクト
            </h1>
            <p className="text-sm text-slate-300 max-w-xl">
              自分が作成したシナリオプロジェクトと、Exploreからクローンしたプロジェクトの一覧です。
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/projects/new"
              className="rounded-md bg-indigo-500 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-400"
            >
              ＋ プロジェクトを作成
            </Link>
            <Link
              href="/explore"
              className="rounded-md border border-slate-700 px-4 py-2 text-sm text-slate-100 hover:border-indigo-400"
            >
              公開シナリオをExplore
            </Link>
          </div>
        </section>

        {/* フィルタバー（まだダミー） */}
        <section className="mt-6 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-300">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-slate-400">表示フィルタ：</span>
            <button className="rounded-full border border-slate-600 bg-slate-900 px-3 py-1 hover:border-indigo-400">
              すべて
            </button>
            <button className="rounded-full border border-slate-800 bg-slate-950 px-3 py-1 hover:border-slate-600">
              公開
            </button>
            <button className="rounded-full border border-slate-800 bg-slate-950 px-3 py-1 hover:border-slate-600">
              非公開
            </button>
            <button className="rounded-full border border-slate-800 bg-slate-950 px-3 py-1 hover:border-slate-600">
              クローン
            </button>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-slate-400">並び替え：</span>
            <select className="rounded-md border border-slate-700 bg-slate-900 px-2 py-1 text-xs text-slate-100">
              <option>最終更新が新しい順</option>
              <option>作成が新しい順</option>
              <option>名前順</option>
            </select>
          </div>
        </section>

        {/* プロジェクト一覧 */}
        <section className="mt-6 space-y-3">
          {mockProjects.map((p) => (
            <Link
              key={p.id}
              href={`/projects/${p.id}`}
              className="block rounded-xl border border-slate-800 bg-slate-900/70 p-4 hover:border-indigo-400 hover:bg-slate-900 transition"
            >
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                {/* 左：タイトルと説明 */}
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-sm font-semibold text-slate-100">
                      {p.name}
                    </h2>
                    {p.visibility === "public" ? (
                      <span className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-2 py-0.5 text-[10px] text-emerald-300">
                        公開
                      </span>
                    ) : (
                      <span className="rounded-full border border-slate-600 bg-slate-800 px-2 py-0.5 text-[10px] text-slate-300">
                        非公開
                      </span>
                    )}
                    {p.isClone && (
                      <span className="rounded-full border border-sky-500/40 bg-sky-500/10 px-2 py-0.5 text-[10px] text-sky-300">
                        クローン
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-xs text-slate-300">
                    {p.description}
                  </p>

                  {/* タグ */}
                  <div className="mt-2 flex flex-wrap gap-1">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded bg-slate-800 px-2 py-0.5 text-[10px] text-slate-300"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 右：メタ情報 */}
                <div className="mt-2 flex flex-col items-start gap-1 text-[11px] text-slate-400 md:mt-0 md:items-end">
                  <span>最終更新：{p.updatedAt}</span>
                  <span>未解決Issue：{p.issuesOpen}件</span>
                  <span className="text-slate-500">
                    クリックでプロジェクトを開く
                  </span>
                </div>
                {/* ボタン2つ：閲覧・編集 */}
                <div className="mt-3 flex items-center gap-2 md:mt-1">
                    <Link
                        href={`/projects/${p.id}`}
                        className="rounded-md border border-slate-700 px-3 py-1.5 text-[11px] text-slate-200 hover:border-indigo-400 hover:text-white"
                    >
                        閲覧
                    </Link>

                    <Link
                        href={`/projects/${p.id}/edit`}
                        className="rounded-md border border-slate-700 px-3 py-1.5 text-[11px] text-slate-200 hover:border-emerald-400 hover:text-white"
                    >
                        編集
                    </Link>
                </div>
              </div>
            </Link>
          ))}

          {/* プロジェクトが0件のときの空表示もあとで入れると良さそう */}
          {/* 例：
          {mockProjects.length === 0 && (
            <div className="mt-6 rounded-xl border border-dashed border-slate-700 bg-slate-900/60 p-6 text-center text-sm text-slate-300">
              まだプロジェクトがありません。
              「＋ プロジェクトを作成」から最初のシナリオを作ってみましょう。
            </div>
          )}
          */}
        </section>
      </div>
    </main>
  );
}
