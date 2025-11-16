"use client";
import Link from "next/link";
import { FormEvent } from "react";

export default function LoginPage() {
  // まだバックエンド未接続なのでダミーの submit ハンドラ
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: API 接続したらここで fetch する
    // ひとまずコンソールに出すだけ
    const formData = new FormData(e.currentTarget);
    console.log("login:", {
      email: formData.get("email"),
      password: formData.get("password"),
    });
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* ヘッダー（ホームとほぼ同じ） */}
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
              <span className="rounded-md border border-slate-600 px-3 py-1.5 text-sm text-slate-300">
                ログイン
              </span>
              <Link
                href="/auth/register"
                className="rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold text-white hover:bg-indigo-400"
              >
                新規登録
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* ログインフォーム本体 */}
      <section className="flex items-center justify-center px-4 py-12">
        <div className="mx-auto flex w-full max-w-md flex-col gap-6 rounded-2xl border border-slate-800 bg-slate-900/80 p-6 shadow-xl shadow-indigo-900/30">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-indigo-300">
              Login
            </p>
            <h1 className="text-xl font-semibold tracking-tight">
              シナリオの棚にログイン
            </h1>
            <p className="mt-2 text-xs text-slate-300">
              登録済みのメールアドレスとパスワードでログインします。
              <br />
              まだアカウントがない場合は{" "}
              <Link
                href="/auth/register"
                className="text-indigo-300 underline-offset-2 hover:underline"
              >
                新規登録
              </Link>
              からどうぞ。
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
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
                autoComplete="current-password"
                className="w-full rounded-md border border-slate-700 bg-slate-950/70 px-3 py-2 text-sm text-slate-50 outline-none ring-0 placeholder:text-slate-500 focus:border-indigo-400 focus:ring-1 focus:ring-indigo-500"
                placeholder="********"
              />
            </div>

            <div className="flex items-center justify-between text-xs text-slate-400">
              <label className="inline-flex items-center gap-2">
                <input
                  type="checkbox"
                  name="remember"
                  className="h-3 w-3 rounded border-slate-600 bg-slate-950 text-indigo-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-indigo-500"
                />
                <span>ログイン状態を保持する</span>
              </label>
              <button
                type="button"
                className="text-xs text-slate-300 underline-offset-2 hover:text-indigo-300 hover:underline"
              >
                パスワードをお忘れですか？
              </button>
            </div>

            <button
              type="submit"
              className="mt-2 w-full rounded-md bg-indigo-500 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-400 disabled:cursor-not-allowed disabled:opacity-60"
            >
              ログイン
            </button>
          </form>

          <div className="border-t border-slate-800 pt-4 text-xs text-slate-400">
            <p className="mb-1">ゲスト的な使い方も、将来ありかも：</p>
            <ul className="list-disc pl-4">
              <li>閲覧専用アカウント</li>
              <li>公開シナリオだけざっと見るモード</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
