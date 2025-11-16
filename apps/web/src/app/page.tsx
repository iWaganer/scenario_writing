// apps/web/src/app/page.tsx
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* ヘッダー */}
      <header className="border-b border-slate-800">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-2">
            <span className="rounded bg-indigo-500/10 px-2 py-1 text-xs font-semibold text-indigo-300">
              beta
            </span>
            <span className="text-lg font-bold tracking-tight">
              ScenarioShelf
            </span>
          </div>
          <nav className="flex items-center gap-4 text-sm">
            <Link href="#features" className="text-slate-300 hover:text-white">
              機能
            </Link>
            <Link href="#for-whom" className="text-slate-300 hover:text-white">
              こんな人に
            </Link>
            <div className="flex items-center gap-2">
              <Link
                href="/auth/login"
                className="rounded-md border border-slate-600 px-3 py-1.5 text-sm hover:border-slate-400"
              >
                ログイン
              </Link>
              <Link
                href="/auth/register"
                className="rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold text-white hover:bg-indigo-400"
              >
                無料で始める
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* ヒーロー */}
      <section className="border-b border-slate-800 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="mx-auto flex max-w-5xl flex-col gap-10 px-4 py-16 md:flex-row md:items-center">
          <div className="flex-1 space-y-6">
            <p className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-3 py-1 text-xs text-slate-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              TRPGシナリオ専用シナリオ整理・共有ツール
            </p>
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
              ノートが散らかる前に、<br />
              シナリオを<strong className="text-indigo-300">プロジェクト</strong>で管理しよう。
            </h1>
            <p className="max-w-xl text-sm text-slate-300 md:text-base">
              世界観設定、NPC、ハンドアウト、マップ画像…
              <br />
              「プロジェクト」単位でディレクトリを切り、
              テキストと画像だけに絞ってシンプルに整理。
              タグとIssueで、アイデアも詰まりポイントも一か所に。
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/auth/register"
                className="rounded-md bg-indigo-500 px-5 py-2 text-sm font-semibold text-white hover:bg-indigo-400"
              >
                プロジェクトを作ってみる
              </Link>
              <Link
                href="#features"
                className="text-sm text-slate-300 hover:text-white"
              >
                どんなことができる？
              </Link>
            </div>
            <p className="text-xs text-slate-400">
              アカウント登録だけで利用できます。MVP版のため、機能は順次追加予定。
            </p>
          </div>

          {/* 簡易モック（画面イメージ） */}
          <div className="flex-1">
            <div className="mx-auto max-w-md rounded-xl border border-slate-800 bg-slate-900/80 p-3 shadow-lg shadow-indigo-900/30">
              <div className="mb-2 flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-red-500" />
                <span className="h-2 w-2 rounded-full bg-amber-400" />
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
              </div>
              <div className="flex border-t border-slate-800">
                <div className="w-1/2 border-r border-slate-800 bg-slate-950/60 p-2 text-xs">
                  <p className="mb-2 text-[10px] font-semibold text-slate-400">
                    プロジェクトツリー
                  </p>
                  <ul className="space-y-1 font-mono text-[11px] text-slate-300">
                    <li>▶ 古代遺跡調査シナリオ/</li>
                    <li className="pl-3">▶ docs/</li>
                    <li className="pl-6">世界観メモ.md</li>
                    <li className="pl-6">NPC一覧.md</li>
                    <li className="pl-3">▶ images/</li>
                    <li className="pl-6">map_ruins.png</li>
                    <li className="pl-3">issues/</li>
                  </ul>
                </div>
                <div className="w-1/2 p-2 text-xs">
                  <p className="mb-1 text-[10px] font-semibold text-slate-400">
                    テキストプレビュー（Markdown）
                  </p>
                  <div className="rounded border border-slate-700 bg-slate-950/80 p-2 text-[11px] text-slate-200">
                    <p className="font-bold text-indigo-300">
                      # 古代遺跡「灰色図書館」
                    </p>
                    <p className="mt-1">
                      ・目的：行方不明になった調査隊の捜索
                      <br />
                      ・導入：大学教授からの依頼
                    </p>
                    <p className="mt-2 text-[10px] text-emerald-300">
                      tag: 導入 / 世界観 / NPC
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-2 flex items-center justify-between text-[10px] text-slate-400">
                <span>プロジェクト内検索：タグ / テキスト</span>
                <span>Issue: 3件（未解決 2）</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 機能紹介 */}
      <section id="features" className="border-b border-slate-800 bg-slate-950">
        <div className="mx-auto max-w-5xl px-4 py-12">
          <h2 className="mb-6 text-xl font-semibold tracking-tight">
            シナリオ制作にちょうどいい、4つの機能
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-4">
              <h3 className="text-sm font-semibold text-slate-100">
                プロジェクト & ディレクトリ構造
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                シナリオごとに「プロジェクト」を作成し、フォルダとファイルで階層管理。
                オンセ用 / オフセ用 / 改訂版なども1つの箱の中で整理できます。
              </p>
            </div>
            <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-4">
              <h3 className="text-sm font-semibold text-slate-100">
                テキスト & 画像に特化
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                MVPでは「ディレクトリ・テキスト・画像」だけに絞り、
                機能過多にならないよう設計。世界観メモ、NPC、マップ画像など、
                必要な情報だけを集中的に管理できます。
              </p>
            </div>
            <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-4">
              <h3 className="text-sm font-semibold text-slate-100">
                タグ & プロジェクト内検索
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                「導入」「NPC」「ハンドアウト」など自由にタグ付け。
                あとから「あのNPCどこだっけ？」となっても、すぐに検索できます。
              </p>
            </div>
            <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-4">
              <h3 className="text-sm font-semibold text-slate-100">
                Issueゾーン & 公開 / クローン
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                詰まりポイントややりたいギミックを Issue としてメモ。
                公開したシナリオプロジェクトは、他のPL・GMがクローンして
                自分用にカスタマイズできます（将来的なGitHubライク仕様）。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-slate-950">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-6 text-xs text-slate-500">
          <span>© {new Date().getFullYear()} ScenarioShelf (仮). All rights reserved.</span>
          <span>TRPGシナリオライティング補助ツール MVP</span>
        </div>
      </footer>
    </main>
  );
}
