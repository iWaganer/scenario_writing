import Link from "next/link";

export default function AppHomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* 上部ヘッダー */}
      <header className="border-b border-slate-800 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
          {/* 左：ロゴ */}
          <div className="flex items-center gap-2">
            <Link href="/" className="text-lg font-bold tracking-tight">
              ScenarioShelf
            </Link>
            <span className="rounded bg-slate-800 px-2 py-0.5 text-[10px] text-slate-300">
              workspace
            </span>
          </div>

          {/* 中央：ナビゲーション */}
          <nav className="hidden items-center gap-4 text-sm text-slate-300 md:flex">
            <Link
              href="/app"
              className="text-slate-100 underline-offset-4 hover:underline"
            >
              ホーム
            </Link>
            <Link
              href="/projects"
              className="underline-offset-4 hover:text-white hover:underline"
            >
              Myプロジェクト
            </Link>
            <Link
              href="/explore"
              className="underline-offset-4 hover:text-white hover:underline"
            >
              Explore
            </Link>
          </nav>

          {/* 右：ユーザーアイコン（マイページへ） */}
          <div className="flex items-center gap-3">
            <span className="hidden text-xs text-slate-400 sm:inline">
              ようこそ、GMさん（仮）
            </span>
            <Link
              href="/account"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-600 bg-slate-900 text-xs font-semibold text-slate-200 hover:border-indigo-400"
              aria-label="マイページへ"
            >
              Y
            </Link>
          </div>
        </div>
      </header>

      {/* コンテンツ本体 */}
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-4 py-8">
        {/* 上段：挨拶 + プロジェクト作成ボタン */}
        <section className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="space-y-2">
            <h1 className="text-2xl font-semibold tracking-tight">
              あなたのシナリオ棚
            </h1>
            <p className="max-w-xl text-sm text-slate-300">
              ここからプロジェクトを作成したり、これまでのシナリオを開いたり、
              他の人の公開シナリオをExploreできます。
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
              href="/projects"
              className="rounded-md border border-slate-700 px-4 py-2 text-sm text-slate-100 hover:border-slate-500"
            >
              Myプロジェクトへ
            </Link>
          </div>
        </section>

        {/* 中段：2カラムのカードエリア */}
        <section className="grid gap-6 md:grid-cols-2">
          {/* 最近のプロジェクト */}
          <div className="flex flex-col gap-3 rounded-xl border border-slate-800 bg-slate-900/70 p-4">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-semibold text-slate-100">
                最近開いたプロジェクト
              </h2>
              <Link
                href="/projects"
                className="text-xs text-indigo-300 underline-offset-2 hover:underline"
              >
                すべて見る
              </Link>
            </div>
            {/* TODO: DBつないだらここをmapで埋める */}
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-center justify-between rounded-md border border-slate-800 bg-slate-950/60 px-3 py-2">
                <div>
                  <p className="font-medium">古代遺跡「灰色図書館」</p>
                  <p className="text-xs text-slate-400">
                    最終更新：2025-11-16 / tag: CoC
                  </p>
                </div>
                <span className="text-[10px] text-slate-400">
                  draft / 非公開
                </span>
              </li>
              <li className="flex items-center justify-between rounded-md border border-slate-800 bg-slate-950/60 px-3 py-2">
                <div>
                  <p className="font-medium">学園怪談「七不思議の番人」</p>
                  <p className="text-xs text-slate-400">
                    最終更新：2025-11-10 / tag: 学園
                  </p>
                </div>
                <span className="text-[10px] text-emerald-300">
                  公開 / 3クローン
                </span>
              </li>
              <li className="rounded-md border border-dashed border-slate-700 bg-slate-950/40 px-3 py-2 text-xs text-slate-400">
                ※ DB 連携後は、ここに最近触ったプロジェクトが最大5件ほど表示されます。
              </li>
            </ul>
          </div>

          {/* Explore ハイライト */}
          <div className="flex flex-col gap-3 rounded-xl border border-slate-800 bg-slate-900/70 p-4">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-semibold text-slate-100">
                Explore から拾ってきた公開シナリオ
              </h2>
              <Link
                href="/explore"
                className="text-xs text-indigo-300 underline-offset-2 hover:underline"
              >
                Exploreへ
              </Link>
            </div>
            {/* TODO: 後で人気順 / 新着順をAPIから引く */}
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="rounded-md border border-slate-800 bg-slate-950/60 px-3 py-2">
                <p className="font-medium">▲ 砂上の王国と三つの願い</p>
                <p className="text-xs text-slate-400">
                  砂漠都市を舞台にした短編シティシナリオ。タグ: 導入簡単 / 2〜3話構成
                </p>
              </li>
              <li className="rounded-md border border-slate-800 bg-slate-950/60 px-3 py-2">
                <p className="font-medium">▲ 星降る夜の演劇部</p>
                <p className="text-xs text-slate-400">
                  学園演劇部を舞台にした青春ミステリ系。タグ: 学園 / 現代 / 日常系
                </p>
              </li>
              <li className="rounded-md border border-dashed border-slate-700 bg-slate-950/40 px-3 py-2 text-xs text-slate-400">
                公開プロジェクト一覧APIとつなぐと、ここにランダム or
                人気のシナリオが並ぶ予定。
              </li>
            </ul>
          </div>
        </section>

        {/* 下段：案内・ショートカット */}
        <section className="grid gap-4 md:grid-cols-3">
          <Link
            href="/projects/new"
            className="flex flex-col justify-between rounded-xl border border-slate-800 bg-slate-900/80 p-4 text-sm hover:border-indigo-400 hover:bg-slate-900"
          >
            <div>
              <p className="text-xs font-semibold text-indigo-300">
                はじめての方へ
              </p>
              <h3 className="mt-1 text-sm font-semibold text-slate-100">
                新しいシナリオ箱を作る
              </h3>
            </div>
            <p className="mt-3 text-xs text-slate-400">
              プロジェクトを作成して、ディレクトリ構造・テキスト・画像を整理しながらシナリオを書いていきましょう。
            </p>
          </Link>

          <Link
            href="/projects"
            className="flex flex-col justify-between rounded-xl border border-slate-800 bg-slate-900/80 p-4 text-sm hover:border-indigo-400 hover:bg-slate-900"
          >
            <div>
              <p className="text-xs font-semibold text-emerald-300">
                作業を再開する
              </p>
              <h3 className="mt-1 text-sm font-semibold text-slate-100">
                進行中のシナリオを開く
              </h3>
            </div>
            <p className="mt-3 text-xs text-slate-400">
              前に作ったプロジェクトから、続きを書いたり、Issueを整理したりできます。
            </p>
          </Link>

          <Link
            href="/explore"
            className="flex flex-col justify-between rounded-xl border border-slate-800 bg-slate-900/80 p-4 text-sm hover:border-indigo-400 hover:bg-slate-900"
          >
            <div>
              <p className="text-xs font-semibold text-sky-300">
                他の卓から学ぶ
              </p>
              <h3 className="mt-1 text-sm font-semibold text-slate-100">
                公開シナリオを探す
              </h3>
            </div>
            <p className="mt-3 text-xs text-slate-400">
              公開設定されたプロジェクトを覗いて、クローンして自分用にアレンジすることもできます。
            </p>
          </Link>
        </section>
      </div>
    </main>
  );
}
