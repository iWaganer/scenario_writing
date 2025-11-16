"use client";

import Link from "next/link";
import { FormEvent } from "react";

export default function RegisterPage() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    console.log("register:", {
      displayName: formData.get("displayName"),
      email: formData.get("email"),
      password: formData.get("password"),
      passwordConfirm: formData.get("passwordConfirm"),
    });

    // TODO: ここで /api/auth/register に fetch する感じにする
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* ヘッダー（ログインとほぼ共通） */}
      <header className="border-b border-slate-800">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-2">
            <span className="rounded bg-indigo-500/10 px-2 py-1 text-xs font-semibold text-indigo-300">
              beta
            </span>
            <Link href="/" className="text-lg font-bold tracking-tight">
              ScenarioShelf
            </Link>
          </div>
          <nav className="flex items-center gap-4 text-sm">
            <Link href="/#features" className="text-slate-300 hover:text-white">
              機能
            </Link>
            <Link href="/#for-whom" className="text-slate-300 hover:text-white">
              こんな人に
            </Link>
            <div className="flex items-center gap-2">
              <Link
                href="/auth/login"
                className="rounded-md border border-slate-600 px-3 py-1.5 text-sm hover:border-slate-400"
              >
                ログイン
              </Link>
              <span className="rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold text-white">
                新規登録
              </span>
            </div>
          </nav>
        </div>
      </header>

      {/* 新規登録フォーム本体 */}
      <section className="flex items-center justify-center px-4 py-12">
        <div className="mx-auto flex w-full max-w-md flex-col gap-6 rounded-2xl border border-slate-800 bg-slate-900/80 p-6 shadow-xl shadow-indigo-900/30">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-indigo-300">
              Sign up
            </p>
            <h1 className="text-xl font-semibold tracking-tight">
              シナリオの棚にアカウント登録
            </h1>
            <p className="mt-2 text-xs text-slate-300">
              メールアドレスとパスワード、表示名を設定してアカウントを作成します。
              すでにアカウントをお持ちの場合は{" "}
              <Link
                href="/auth/login"
                className="text-indigo-300 underline-offset-2 hover:underline"
              >
                ログイン
              </Link>
              へ。
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* 表示名 */}
            <div className="space-y-1 text-sm">
              <label
                htmlFor="displayName"
                className="block text-xs font-semibold text-slate-200"
              >
                表示名
              </label>
              <input
                id="displayName"
                name="displayName"
                type="text"
                required
                className="w-full rounded-md border border-slate-700 bg-slate-950/70 px-3 py-2 text-sm text-slate-50 outline-none ring-0 placeholder:text-slate-500 focus:border-indigo-400 focus:ring-1 focus:ring-indigo-500"
                placeholder="GM太郎 / PL花子 など"
              />
            </div>

            {/* メールアドレス */}
            <div className="space-y-1 text-sm">
              <label
                htmlFor="email"
                className="block text-xs font-semibold text-slate-200"
              >
                メールアドレス
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="w-full rounded-md border border-slate-700 bg-slate-950/70 px-3 py-2 text-sm text-slate-50 outline-none ring-0 placeholder:text-slate-500 focus:border-indigo-400 focus:ring-1 focus:ring-indigo-500"
                placeholder="gm@example.com"
              />
            </div>

            {/* パスワード */}
            <div className="space-y-1 text-sm">
              <label
                htmlFor="password"
                className="block text-xs font-semibold text-slate-200"
              >
                パスワード
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                autoComplete="new-password"
                className="w-full rounded-md border border-slate-700 bg-slate-950/70 px-3 py-2 text-sm text-slate-50 outline-none ring-0 placeholder:text-slate-500 focus:border-indigo-400 focus:ring-1 focus:ring-indigo-500"
                placeholder="8文字以上を推奨"
              />
            </div>

            {/* パスワード（確認） */}
            <div className="space-y-1 text-sm">
              <label
                htmlFor="passwordConfirm"
                className="block text-xs font-semibold text-slate-200"
              >
                パスワード（確認）
              </label>
              <input
                id="passwordConfirm"
                name="passwordConfirm"
                type="password"
                required
                autoComplete="new-password"
                className="w-full rounded-md border border-slate-700 bg-slate-950/70 px-3 py-2 text-sm text-slate-50 outline-none ring-0 placeholder:text-slate-500 focus:border-indigo-400 focus:ring-1 focus:ring-indigo-500"
                placeholder="同じパスワードを再入力"
              />
            </div>

            {/* 利用規約的な一言（あとでページ作ってリンク化でもOK） */}
            <div className="flex items-start gap-2 pt-1 text-xs text-slate-400">
              <input
                id="agree"
                name="agree"
                type="checkbox"
                required
                className="mt-[3px] h-3 w-3 rounded border-slate-600 bg-slate-950 text-indigo-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-indigo-500"
              />
              <label htmlFor="agree" className="leading-relaxed">
                利用上の注意（公開シナリオの扱いや、TRPG公式ルールへの配慮など）を理解した上で登録します。
                {/* TODO: 利用規約ページを作ったらリンクにする */}
              </label>
            </div>

            <button
              type="submit"
              className="mt-2 w-full rounded-md bg-indigo-500 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-400 disabled:cursor-not-allowed disabled:opacity-60"
            >
              アカウントを作成する
            </button>
          </form>

          <div className="border-t border-slate-800 pt-4 text-xs text-slate-400">
            <p className="mb-1">あとで追加してもよさそうな項目：</p>
            <ul className="list-disc pl-4">
              <li>アイコン画像のアップロード</li>
              <li>普段よく遊ぶシステム（CoC / D&D / インセイン など）の選択</li>
              <li>公開シナリオのデフォルト公開設定</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
