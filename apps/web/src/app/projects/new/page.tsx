"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

export default function NewProjectPage() {
  const [saving, setSaving] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSaving(true);

    const formData = new FormData(e.currentTarget);

    const payload = {
      title: formData.get("title"),
      description: formData.get("description"),
      system: formData.get("system"),
      tags: (formData.get("tags") as string | null)
        ?.split(",")
        .map((t) => t.trim())
        .filter(Boolean),
      visibility: formData.get("visibility"),
    };

    console.log("create project:", payload);
    // TODO: 後で /api/projects に POST する

    setTimeout(() => {
      setSaving(false);
      // TODO: 実装時には作成したプロジェクトのページに遷移させる
      // router.push(`/projects/${newId}`);
    }, 500);
  };

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
              new project
            </span>
          </div>

          <nav className="hidden items-center gap-4 text-sm text-slate-300 md:flex">
            <Link href="/workspace" className="hover:text-white">
              ホーム
            </Link>
            <Link href="/projects" className="hover:text-white">
              Myプロジェクト
            </Link>
            <Link href="/explore" className="hover:text-white">
              Explore
            </Link>
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

      {/* コンテンツ */}
      <div className="mx-auto max-w-3xl px-4 py-8">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">
              新規プロジェクトの作成
            </h1>
            <p className="mt-2 text-sm text-slate-300 max-w-xl">
              1つのシナリオごとに1プロジェクトを作成します。
              タイトル、説明、よく使うシステム、タグ、公開設定を決めてスタートしましょう。
            </p>
          </div>
          <Link
            href="/projects"
            className="text-xs text-slate-400 underline-offset-2 hover:text-slate-200 hover:underline"
          >
            Myプロジェクト一覧に戻る
          </Link>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 rounded-2xl border border-slate-800 bg-slate-900/80 p-6"
        >
          {/* タイトル */}
          <div className="space-y-1 text-sm">
            <label
              htmlFor="title"
              className="block text-xs font-semibold text-slate-200"
            >
              プロジェクト名
            </label>
            <input
              id="title"
              name="title"
              type="text"
              required
              className="w-full rounded-md border border-slate-700 bg-slate-950/70 px-3 py-2 text-sm text-slate-50 outline-none ring-0 placeholder:text-slate-500 focus:border-indigo-400 focus:ring-1 focus:ring-indigo-500"
              placeholder="例: 古代遺跡『灰色図書館』 / 学園怪談『七不思議の番人』"
            />
            <p className="text-[11px] text-slate-500">
              シナリオタイトルと同じでも、作業用の管理名でもOKです。
            </p>
          </div>

          {/* 説明 */}
          <div className="space-y-1 text-sm">
            <label
              htmlFor="description"
              className="block text-xs font-semibold text-slate-200"
            >
              説明（任意）
            </label>
            <textarea
              id="description"
              name="description"
              rows={4}
              className="w-full resize-none rounded-md border border-slate-700 bg-slate-950/70 px-3 py-2 text-sm text-slate-50 outline-none ring-0 placeholder:text-slate-500 focus:border-indigo-400 focus:ring-1 focus:ring-indigo-500"
              placeholder="どんな雰囲気のシナリオか、PLの人数やプレイ時間などを書いておくと、後で見返しやすくなります。"
            />
          </div>

          {/* システム & タグ */}
          <div className="grid gap-4 md:grid-cols-2">
            {/* システム */}
            <div className="space-y-1 text-sm">
              <label
                htmlFor="system"
                className="block text-xs font-semibold text-slate-200"
              >
                想定TRPGシステム
              </label>
              <select
                id="system"
                name="system"
                className="w-full rounded-md border border-slate-700 bg-slate-950/70 px-3 py-2 text-sm text-slate-100 outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-500"
                defaultValue="other"
              >
                <option value="coc">クトゥルフ神話TRPG（CoC）</option>
                <option value="insane">インセイン</option>
                <option value="dnd5e">D&D 5e</option>
                <option value="shino">シノビガミ</option>
                <option value="original">オリジナルシステム</option>
                <option value="other">その他 / 未定</option>
              </select>
              <p className="text-[11px] text-slate-500">
                後から変更できます。複数システム対応の場合は説明文に補足を。
              </p>
            </div>

            {/* タグ */}
            <div className="space-y-1 text-sm">
              <label
                htmlFor="tags"
                className="block text-xs font-semibold text-slate-200"
              >
                タグ（カンマ区切り・任意）
              </label>
              <input
                id="tags"
                name="tags"
                type="text"
                className="w-full rounded-md border border-slate-700 bg-slate-950/70 px-3 py-2 text-sm text-slate-50 outline-none ring-0 placeholder:text-slate-500 focus:border-indigo-400 focus:ring-1 focus:ring-indigo-500"
                placeholder="例: 学園, ミステリ, 日常系"
              />
              <p className="text-[11px] text-slate-500">
                Exploreやプロジェクト内検索に使われます。タグシステムは後で拡張予定。
              </p>
            </div>
          </div>

          {/* 公開設定 */}
          <div className="space-y-2 text-sm">
            <p className="text-xs font-semibold text-slate-200">公開設定</p>
            <p className="text-[11px] text-slate-500">
              初期状態を選びます。あとからプロジェクト設定画面で変更可能です。
            </p>
            <div className="mt-1 grid gap-3 md:grid-cols-2">
              <label className="flex cursor-pointer items-start gap-2 rounded-md border border-slate-700 bg-slate-950/70 px-3 py-2 hover:border-indigo-400">
                <input
                  type="radio"
                  name="visibility"
                  value="private"
                  defaultChecked
                  className="mt-[3px] h-3 w-3 border-slate-600 bg-slate-950 text-indigo-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-indigo-500"
                />
                <span>
                  <span className="block text-xs font-semibold text-slate-100">
                    非公開
                  </span>
                  <span className="text-[11px] text-slate-400">
                    自分だけが閲覧できます。完成するまで見せたくない場合に。
                  </span>
                </span>
              </label>

              <label className="flex cursor-pointer items-start gap-2 rounded-md border border-slate-700 bg-slate-950/70 px-3 py-2 hover:border-indigo-400">
                <input
                  type="radio"
                  name="visibility"
                  value="public"
                  className="mt-[3px] h-3 w-3 border-slate-600 bg-slate-950 text-indigo-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-indigo-500"
                />
                <span>
                  <span className="block text-xs font-semibold text-slate-100">
                    公開
                  </span>
                  <span className="text-[11px] text-slate-400">
                    Exploreに表示され、他ユーザーがクローンできるようになります。
                  </span>
                </span>
              </label>
            </div>
          </div>

          {/* 将来用：テンプレ / ベースにするプロジェクト */}
          <div className="space-y-1 text-sm">
            <p className="text-xs font-semibold text-slate-200">
              ベースにするテンプレート（将来用）
            </p>
            <p className="text-[11px] text-slate-500">
              今は機能なしですが、将来的に「ワンショット用」「キャンペーン用」などのテンプレートや、
              既存プロジェクトをコピーして作る機能をここに追加する想定です。
            </p>
            <div className="mt-1 rounded-md border border-dashed border-slate-700 bg-slate-950/60 px-3 py-2 text-[11px] text-slate-500">
              例: 「基本構成（導入 / 本編 / クライマックス / エピローグ）」フォルダ付きで作成 など
            </div>
          </div>

          {/* ボタン */}
          <div className="flex items-center justify-between pt-2">
            <Link
              href="/projects"
              className="text-xs text-slate-400 underline-offset-2 hover:text-slate-200 hover:underline"
            >
              作成せずに戻る
            </Link>
            <button
              type="submit"
              disabled={saving}
              className="rounded-md bg-indigo-500 px-5 py-2 text-sm font-semibold text-white hover:bg-indigo-400 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {saving ? "作成中..." : "プロジェクトを作成する"}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
