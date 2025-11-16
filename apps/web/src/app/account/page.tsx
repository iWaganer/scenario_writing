"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

export default function AccountPage() {
  const [saving, setSaving] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSaving(true);
    const formData = new FormData(e.currentTarget);

    const payload = {
      displayName: formData.get("displayName"),
      bio: formData.get("bio"),
      favoriteSystems: formData.getAll("favoriteSystems"),
      defaultVisibility: formData.get("defaultVisibility"),
      email: formData.get("email"), // 今は読み取り専用想定だけど一応
    };

    console.log("update account:", payload);
    // TODO: 後で /api/me に PATCH 飛ばす

    // ダミーでちょっと待って戻す
    setTimeout(() => setSaving(false), 500);
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
              account
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
            <span className="text-slate-100 underline underline-offset-4">
              アカウント
            </span>
          </nav>

          <div className="flex items-center gap-3">
            <span className="hidden text-xs text-slate-400 sm:inline">
              アカウント設定
            </span>
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-indigo-400 bg-slate-900 text-xs font-semibold text-slate-50">
              Y
            </div>
          </div>
        </div>
      </header>

      {/* コンテンツ本体 */}
      <div className="mx-auto max-w-5xl px-4 py-8">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold tracking-tight">
            アカウント設定
          </h1>
          <p className="mt-2 text-sm text-slate-300 max-w-xl">
            表示名や自己紹介、よく使うTRPGシステム、プロジェクトのデフォルト公開設定などを変更できます。
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid gap-6 md:grid-cols-[2fr,1.5fr]"
        >
          {/* 左側：プロフィール関連 */}
          <section className="space-y-5 rounded-2xl border border-slate-800 bg-slate-900/80 p-5">
            <div>
              <h2 className="text-sm font-semibold text-slate-100">
                基本プロフィール
              </h2>
              <p className="mt-1 text-xs text-slate-400">
                他のユーザーに表示される名前や自己紹介を設定します。
              </p>
            </div>

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
                defaultValue="GM太郎"
                className="w-full rounded-md border border-slate-700 bg-slate-950/70 px-3 py-2 text-sm text-slate-50 outline-none ring-0 placeholder:text-slate-500 focus:border-indigo-400 focus:ring-1 focus:ring-indigo-500"
                placeholder="例: GM太郎 / PL花子 / サークル名など"
              />
            </div>

            {/* 自己紹介 */}
            <div className="space-y-1 text-sm">
              <label
                htmlFor="bio"
                className="block text-xs font-semibold text-slate-200"
              >
                自己紹介
              </label>
              <textarea
                id="bio"
                name="bio"
                rows={4}
                defaultValue="よく遊ぶシステムや、シナリオの傾向などを書いておくと、公開プロジェクトの雰囲気が伝わりやすくなります。"
                className="w-full resize-none rounded-md border border-slate-700 bg-slate-950/70 px-3 py-2 text-sm text-slate-50 outline-none ring-0 placeholder:text-slate-500 focus:border-indigo-400 focus:ring-1 focus:ring-indigo-500"
              />
              <p className="text-[11px] text-slate-500">
                プロフィールページや公開プロジェクトの作者情報に表示されます。
              </p>
            </div>

            {/* よく遊ぶTRPGシステム */}
            <div className="space-y-2 text-sm">
              <p className="text-xs font-semibold text-slate-200">
                よく遊ぶTRPGシステム
              </p>
              <p className="text-[11px] text-slate-500">
                複数選択可。公開プロジェクトの検索時などに、同じ傾向の作者を探しやすくするために使う予定です。
              </p>
              <div className="mt-1 flex flex-wrap gap-2 text-xs">
                {["CoC", "インセイン", "D&D5e", "シノビガミ", "オリジナル"].map(
                  (sys) => (
                    <label
                      key={sys}
                      className="inline-flex items-center gap-1 rounded-full border border-slate-700 bg-slate-950 px-3 py-1 hover:border-indigo-400"
                    >
                      <input
                        type="checkbox"
                        name="favoriteSystems"
                        value={sys}
                        defaultChecked={sys === "CoC"}
                        className="h-3 w-3 rounded border-slate-600 bg-slate-950 text-indigo-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-indigo-500"
                      />
                      <span>{sys}</span>
                    </label>
                  )
                )}
              </div>
            </div>

            {/* デフォルト公開設定 */}
            <div className="space-y-2 text-sm">
              <p className="text-xs font-semibold text-slate-200">
                新規プロジェクトのデフォルト公開設定
              </p>
              <p className="text-[11px] text-slate-500">
                ここで選んだ設定が、新しくプロジェクトを作るときの初期値になります。
              </p>
              <div className="mt-1 grid gap-2 text-xs md:grid-cols-2">
                <label className="flex cursor-pointer items-start gap-2 rounded-md border border-slate-700 bg-slate-950/70 px-3 py-2 hover:border-indigo-400">
                  <input
                    type="radio"
                    name="defaultVisibility"
                    value="private"
                    defaultChecked
                    className="mt-[3px] h-3 w-3 border-slate-600 bg-slate-950 text-indigo-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-indigo-500"
                  />
                  <span>
                    <span className="block font-semibold text-slate-100">
                      非公開（おすすめ）
                    </span>
                    <span className="text-[11px] text-slate-400">
                      作成直後は自分だけが見られる状態にします。完成してから公開に切り替える運用向け。
                    </span>
                  </span>
                </label>
                <label className="flex cursor-pointer items-start gap-2 rounded-md border border-slate-700 bg-slate-950/70 px-3 py-2 hover:border-indigo-400">
                  <input
                    type="radio"
                    name="defaultVisibility"
                    value="public"
                    className="mt-[3px] h-3 w-3 border-slate-600 bg-slate-950 text-indigo-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-indigo-500"
                  />
                  <span>
                    <span className="block font-semibold text-slate-100">
                      公開
                    </span>
                    <span className="text-[11px] text-slate-400">
                      作成した時点でExploreに表示されるようにします。制作過程を公開したい場合などに。
                    </span>
                  </span>
                </label>
              </div>
            </div>
          </section>

          {/* 右側：アカウント情報 / その他 */}
          <section className="space-y-5 rounded-2xl border border-slate-800 bg-slate-900/80 p-5">
            {/* アカウント情報 */}
            <div className="space-y-3">
              <div>
                <h2 className="text-sm font-semibold text-slate-100">
                  アカウント情報
                </h2>
                <p className="mt-1 text-xs text-slate-400">
                  ログインに利用するメールアドレスなどを表示します。
                </p>
              </div>

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
                  defaultValue="gm@example.com"
                  readOnly
                  className="w-full cursor-not-allowed rounded-md border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-400 outline-none ring-0"
                />
                <p className="text-[11px] text-slate-500">
                  メールアドレスの変更は後で専用フローを用意する予定です。
                </p>
              </div>

              <div className="space-y-1 text-sm">
                <p className="text-xs font-semibold text-slate-200">
                  パスワード
                </p>
                <button
                  type="button"
                  className="rounded-md border border-slate-700 bg-slate-950/70 px-3 py-2 text-xs text-slate-200 hover:border-indigo-400 hover:text-white"
                >
                  パスワードを変更する（予定）
                </button>
                <p className="text-[11px] text-slate-500">
                  MVPでは未実装。先にアカウント削除やログアウトなどを優先してもOK。
                </p>
              </div>
            </div>

            {/* 通知・実験的な設定など（将来用の置き場） */}
            <div className="space-y-3 border-t border-slate-800 pt-4">
              <div>
                <h2 className="text-sm font-semibold text-slate-100">
                  お知らせ・実験的機能
                </h2>
                <p className="mt-1 text-xs text-slate-400">
                  将来的に、更新情報や新機能の案内、実験的なUIなどのオン/オフをここに並べる想定です。
                </p>
              </div>
              <div className="space-y-2 text-xs text-slate-400">
                <label className="flex items-center justify-between rounded-md border border-slate-800 bg-slate-950/70 px-3 py-2">
                  <span>更新情報やメンテナンス情報の通知を受け取る</span>
                  <input
                    type="checkbox"
                    name="notifyNews"
                    defaultChecked
                    className="h-3 w-3 rounded border-slate-600 bg-slate-950 text-indigo-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-indigo-500"
                  />
                </label>
              </div>
            </div>

            {/* 保存ボタン */}
            <div className="border-t border-slate-800 pt-4">
              <button
                type="submit"
                disabled={saving}
                className="w-full rounded-md bg-indigo-500 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-400 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {saving ? "保存中..." : "変更を保存する"}
              </button>
              <p className="mt-2 text-[11px] text-slate-500">
                実際の保存処理は後でAPI接続時に実装します。今はフォーム構造とUIだけのモックです。
              </p>
            </div>
          </section>
        </form>
      </div>
    </main>
  );
}
